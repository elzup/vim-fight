// @flow
import type { Action, KeyLog } from '../../types'
import { Actions } from '../FieldContainer/actionTypes'

export type State = {
  [id: number]: KeyLog,
  lastId: number,
  history: string,
  stack: string,
}

const initialState: State = { lastId: 0, stack: '', history: '' }

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
      const newHistory = action.key + state.history
      return {
        ...state,
        [id]: keyLog,
        lastId: state.lastId + 1,
        history: newHistory.substring(0, 20),
      }
    }
    case Actions.UPDATE_STACK: {
      return { ...state, stack: action.stack }
    }
    default:
      return state
  }
}
