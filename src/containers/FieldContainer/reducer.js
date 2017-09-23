// @flow
import type { Action, Field } from '../../types'
import { Actions } from './actionTypes'

export type State = Field

const initialState: State = {
  id: 0,
  code: '',
  title: '',
  squares: [],
  playersId: [],
}

export default function(state: State = initialState, action: Action): State {
  switch (action.type) {
    case Actions.RECEIVE_FIELD:
      return action.field
    default:
      return state
  }
}
