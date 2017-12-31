// @flow
import type { Action, KeyInfo } from '../../types'
import { Actions } from '../FieldContainer/actionTypes'

export type State = KeyInfo

export const initialState: State = { lastId: 0, stack: '', history: '' }

export default function(
  state: State = initialState,
  action: Action,
): Exact<State> {
  switch (action.type) {
    case Actions.RECEIVE_KEY: {
      const history = (action.key + state.history).substring(0, 20)
      return {
        ...state,
        lastId: state.lastId + 1,
        history,
      }
    }
    case Actions.UPDATE_STACK: {
      return { ...state, stack: action.stack }
    }
    default:
      return state
  }
}
