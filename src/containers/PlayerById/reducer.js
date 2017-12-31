// @flow
import type { Action, Player } from '../../types'
import { Actions } from './actionTypes'

export type State = { [id: number | string]: Player }

export const initialState: State = {}

export default function(
  state: State = initialState,
  action: Action,
): Exact<State> {
  switch (action.type) {
    case Actions.ADD_PLAYER:
      return {
        ...state,
        ...{ [action.player.id]: action.player },
      }
    default:
      return state
  }
}
