import * as game from '../../api/game'
import type {
  State,
  ThunkAction,
  BaseField,
  Field,
  Square,
  Dispatch,
  GetState,
  VimOperator,
} from '../../types'
import * as actions from './actions'
import * as vimActions from '../Vim/actions'

function codeToSquares(code): Array<Array<Square>> {
  let i = -1
  return code.split('\n').map(line =>
    line.split('').map(c => {
      i += 1
      const playersId = i === 0 ? [1] : []
      return {
        id: i,
        charactor: c,
        playersId,
      }
    })
  )
}

export function loadFields(): ThunkAction {
  return dispath => {
    game.getFields((fields: BaseField[]) => {
      const rawFiled = fields[0]
      const field: Field = {
        squares: codeToSquares(rawFiled.code),
        players: { '1': { id: 1 } },
        ...rawFiled,
      }
      dispath(actions.receiveField(field))
    })
  }
}

const whileListKey =
  'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890'

type runResult = {
  newStack: string,
}

function canMove(state: State, x: number, y: number): boolean {
  return (
    0 <= y &&
    y < state.FieldContainer.squares.length &&
    0 <= x &&
    x < state.FieldContainer.squares[y].length
  )
}

function move(dispatch: Dispatch, state: State, dx: number, dy: number) {
  const nx = state.FieldContainer.px + dx
  const ny = state.FieldContainer.py + dy
  if (!canMove(state, nx, ny)) {
    return
  }
  dispatch(vimActions.move(nx, ny))
}

type VimParseResult = {
  op: VimOperator,
  amount: number,
  newStack: string,
  hit: boolean,
}

function vimParse(s: string): VimParseResult {
  return {
    hit: false,
  }
}

function vimParseRun(dispatch: Dispatch, state: State, s: string): runResult {
  let newStack = s
  if (s === 'h') {
    newStack = ''
    move(dispatch, state, -1, 0)
  } else if (s === 'l') {
    newStack = ''
    move(dispatch, state, 1, 0)
  } else if (s === 'j') {
    newStack = ''
    move(dispatch, state, 0, 1)
  } else if (s === 'k') {
    newStack = ''
    move(dispatch, state, 0, -1)
  }
  return { newStack }
}

export function gameSetup(): ThunkAction {
  return (dispatch, getState: GetState) => {
    window.onkeydown = e => {
      if (whileListKey.indexOf(e.key) === -1) {
        return
      }
      const state = getState()
      dispatch(actions.receiveKey(e.key))
      console.log(state.stack + e.key)
      const { newStack } = vimParseRun(dispatch, state, state.stack + e.key)
      if (state.stack != newStack) {
        dispatch(actions.updateStack(newStack))
      }
    }
  }
}
