// @flow
import type { Action, KeyLog } from '../../types'
import { Actions } from '../FieldContainer/actionTypes'

export type State = { [id: number]: KeyLog, lastId: number }

const initialState: State = { lastId: 0 }

export default function(
  state: State = initialState,
  action: Action
): Exact<State> {
  switch (action.type) {
    case Actions.RECEIVE_KEY: {
      const id = state.lastId + 1
      const keyLog: KeyLog = {
        id,
        charactor: action.key,
        playerId: 0,
      }
      return { ...state, [id]: keyLog, lastId: state.lastId + 1 }
    }
    default:
      return state
  }
}
