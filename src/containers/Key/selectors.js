// @flow
import type { State } from '../../types'

export const getKey = (state: State) => state.Key
export const getStack = (state: State) => state.Key.stack
export const getHistory = (state: State) => state.Key.history
