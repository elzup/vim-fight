import * as game from '../../api/game'
import type {
  State,
  ThunkAction,
  Field,
  Square,
  Dispatch,
  GetState,
} from '../../types'
import * as actions from './actions'
import * as playerActions from '../PlayerById/actions'
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
    }),
  )
}

export function loadFields(): ThunkAction {
  return dispath => {
    game.getFields((fields: Field[]) => {
      const rawFiled = fields[0]
      const field: Field = {
        squares: codeToSquares(rawFiled.code),
        px: 0,
        py: 0,
        ...rawFiled,
      }
      dispath(actions.receiveField(field))
      dispath(playerActions.addPlayer({ id: 1 }))
    })
  }
}

const whileListKey =
  '!"#$%&\'()*+,-. /0123456789:;<=>?@ABCDEFGHJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~'

type runResult = {
  newStack: string,
}

function checkMove(state: State, x: number, y: number): boolean {
  const { squares } = state.FieldContainer
  const ty = Math.max(0, Math.min(squares.length - 1, y))
  const tx = Math.max(0, Math.min(squares[ty].length - 1, x))
  return { x: tx, y: ty }
}

function move(dispatch: Dispatch, state: State, dx: number, dy: number) {
  const nx = state.FieldContainer.px + dx
  const ny = state.FieldContainer.py + dy
  const { x, y } = checkMove(state, nx, ny)
  dispatch(vimActions.move(x, y))
}

function nextToken(state: State): number {
  const { squares, px, py } = state.FieldContainer
  for (var i = px + 1; i < squares[py].length; i++) {
    // squares[i]
  }
  return 3
  // TODO
}

function nextPos(state: State, target: string, d: number = 1): number {
  const { squares, px, py } = state.FieldContainer
  for (var dx = 1; px + dx < squares[py].length; dx += d) {
    if (squares[py][px + dx].charactor === target) {
      return dx
    }
  }
  return 0
}

function vimParseRun(dispatch: Dispatch, state: State, s: string): runResult {
  let newStack = ''
  const m0 = s.match(/^([0-9]*)([fFtT])(.?)$/)
  const m1 = s.match(/^([0-9]*)([dcv])(.?.?)$/)
  const m2 = s.match(/^([0-9]*)([0a-zA-Z{}%$\]])\$/)
  if (m0) {
    const dire = m0[2]
    const target = m0[3]
    if (target === '') {
      newStack = s
    } else if (dire === 'f') {
      move(dispatch, state, nextPos(state, target), 0)
    } else if (dire === 'F') {
      move(dispatch, state, nextPos(state, target, -1), 0)
    } else if (dire === 't') {
      move(
        dispatch,
        state,
        Math.max(nextPos(state, target) - 1, state.FieldContainer.px),
        0,
      )
    } else if (dire === 'T') {
      move(
        dispatch,
        state,
        Math.min(nextPos(state, target, -1) + 1, state.FieldContainer.px),
        0,
      )
    }
  } else if (m1) {
    const to = m1[3]
    if (to.length === 2) {
      if ('fFtTia'.indexOf(to[0]) > -1) {
        // bad
      } else {
        // to[1];
      }
    }
    if (to === '' || (to.length === 1 && 'fFtTia'.indexOf(to) > -1)) {
      newStack = s
    }
  } else if (m2) {
    const mount = parseInt(`0${m2[1]}`, 10) || 1
    const dire = m2[2]
    if (dire === 'h') {
      move(dispatch, state, -mount, 0)
    } else if (dire === 'l') {
      move(dispatch, state, mount, 0)
    } else if (dire === 'j') {
      move(dispatch, state, 0, mount)
    } else if (dire === 'k') {
      move(dispatch, state, 0, -mount)
    } else if (dire === '0') {
      move(dispatch, state, -100, 0)
    } else if (dire === '$') {
      move(dispatch, state, 100, 0)
    } else if (dire === 'w') {
      move(dispatch, state, nextToken(state), 0)
    } else if (dire === 'b') {
      move(dispatch, state, 0, 0)
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
      const { newStack } = vimParseRun(dispatch, state, state.Key.stack + e.key)
      if (state.Key.stack !== newStack) {
        dispatch(actions.updateStack(newStack))
      }
    }
  }
}
