// @flow
import reducer from './reducer'
import * as actions from './actions'
import type { Player } from '../../types'

import { initialState } from './reducer'

test('provide the initial state', () => {
  // $FlowFixMe
  expect(reducer(undefined, {})).toEqual(initialState)
})

const p: Player = { id: 10 }
test('handle ADD_PLAYER', () => {
  expect(reducer(initialState, actions.addPlayer(p))).toEqual({
    '10': { id: 10 },
  })
})
