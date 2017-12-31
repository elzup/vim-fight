// @flow
import type { Action, KeyLog } from '../../types'
import { Actions } from '../FieldContainer/actionTypes'

export type State = {
  [id: number | string]: KeyLog,
}

export const initialState: State = {}

export default function(
  state: State = initialState,
  action: Action,
): Exact<State> {
  switch (action.type) {
    case Actions.RECEIVE_KEY: {
      const id = Object.keys(state).length + 1
      const keyLog: KeyLog = {
        id,
        charactor: action.key,
        playerId: 0,
      }
      return {
        ...state,
        [id]: keyLog,
      }
    }
    default:
      return state
  }
}
