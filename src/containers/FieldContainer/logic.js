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
        px: 0,
        py: 0,
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
  let newStack = ''
  const m1 = s.match(/^([0-9]*)([dcv])(.?.?)$/)
  const m2 = s.match(/^([0-9]*)([a-zA-Z{}%$\]])$/)
  if (m1) {
    const mount = m1[0]
    const op = m1[1]
    const to = m1[2]
    if (to.length == 2) {
      if ('fFtTia'.indexOf(to[0]) > -1) {
        // bad
      } else {
        // to[1];
      }
    }
    if (to === '' || (to.length == 1 && 'fFtTia'.indexOf(to) > -1)) {
      newStack = s
    }
  } else if (m2) {
    const mount = parseInt(`0${m2[1]}`) || 1
    const dire = m2[2]
    if (dire === 'h') {
      move(dispatch, state, -mount, 0)
    } else if (dire === 'l') {
      move(dispatch, state, mount, 0)
    } else if (dire === 'j') {
      move(dispatch, state, 0, mount)
    } else if (dire === 'k') {
      move(dispatch, state, 0, -mount)
    }
  } else {
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
      console.log(state.Key.stack + e.key)
      const { newStack } = vimParseRun(dispatch, state, state.Key.stack + e.key)
      if (state.Key.stack != newStack) {
        dispatch(actions.updateStack(newStack))
      }
    }
  }
}
