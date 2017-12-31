// @flow
import reducer from './reducer'
import * as actions from '../FieldContainer/actions'

import { initialState } from './reducer'

test('RECEIVE_KEY', () => {
  expect(reducer(initialState, actions.receiveKey('a'))).toEqual({
    lastId: 1,
    stack: '',
    history: 'a',
  })
})

test('RECEIVE_KEY append', () => {
  expect(
    reducer(
      {
        lastId: 1,
        stack: '',
        history: 'a',
      },
      actions.receiveKey('b'),
    ),
  ).toEqual({
    lastId: 2,
    stack: '',
    history: 'ba',
  })
})
