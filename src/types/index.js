// @flow
import type { Store as ReduxStore, Dispatch as ReduxDispatch } from 'redux'
import type { Action as _Action } from './action'
import type { State as _State } from './state'

export type State = _State
export type Action = _Action

export type GetState = () => State

export type ThunkAction = (
  dispatch: Dispatch,
  getState: GetState,
) => void | Promise<void>

type ThunkDispatch<A> = ThunkAction => A

export type Dispatch = ReduxDispatch<Action> & ThunkDispatch<Action>
export type Store = ReduxStore<State, Action, Dispatch>

export type Square = {
  charactor: string,
  playersId: number[],
}

export type Player = {
  id: number,
}

export type Square2D = Array<Array<Square>>

export type Field = {
  id: number,
  title: string,
  code: string,
  squares: Square2D,
  px: number,
  py: number,
}

export type KeyLog = {
  id: number,
  playerId: number,
  charactor: string,
}

export type KeyInfo = {
  lastId: number,
  history: string,
  stack: string,
}

export type VIM_OP_DELETE = 'vim/op/d'
export type VIM_OP_LEFT = 'vim/op/h'
export type VIM_OP_RIGHT = 'vim/op/l'
export type VIM_OP_UP = 'vim/op/k'
export type VIM_OP_DOWN = 'vim/op/j'

export type VimOperator =
  | VIM_OP_DELETE
  | VIM_OP_LEFT
  | VIM_OP_RIGHT
  | VIM_OP_UP
  | VIM_OP_DOWN
