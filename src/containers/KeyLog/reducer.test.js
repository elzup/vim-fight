// @flow
import reducer from './reducer'
import * as actions from '../FieldContainer/actions'

import { initialState } from './reducer'

test('RECEIVE_KEY', () => {
  expect(reducer(initialState, actions.receiveKey('a'))).toEqual({
    '1': {
      id: 1,
      charactor: 'a',
      playerId: 0,
    },
  })
})

test('RECEIVE_KEY append', () => {
  expect(
    reducer(
      {
        '1': {
          id: 1,
          charactor: 'a',
          playerId: 0,
        },
      },
      actions.receiveKey('b'),
    ),
  ).toEqual({
    '1': {
      id: 1,
      charactor: 'a',
      playerId: 0,
    },
    '2': {
      id: 2,
      charactor: 'b',
      playerId: 0,
    },
  })
})
