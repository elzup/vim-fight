// @flow
import type { Action, Field } from '../../types'
import { Actions } from './actionTypes'
import { Actions as VimActions } from '../Vim/actionTypes'

export type State = Field

const initialState: State = {
  id: 0,
  code: '',
  title: '',
  squares: [],
  playersId: [],
  px: 0,
  py: 0,
}

export default function(state: State = initialState, action: Action): State {
  switch (action.type) {
    case Actions.RECEIVE_FIELD:
      return action.field
    case VimActions.MOVE: {
      return {
        ...state,
        squares: {
          ...state.squares,
          [state.py]: {
            ...state.squares[state.py],
            [state.py]: {
              ...state.squares[state.py][state.px],
              playersId: [],
            },
          },
          [action.ny]: {
            ...state.squares[action.ny],
            [action.nx]: {
              ...state.squares[action.ny][action.nx],
              playersId: [1],
            },
          },
        },
      }
    }

    default:
      return state
  }
}
