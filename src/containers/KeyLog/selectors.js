// @flow
import type { State } from '../../types'

export const getKey = (state: State) => state.KeyLog
export const getStack = (state: State) => state.KeyInfo.stack
export const getHistory = (state: State) => state.KeyInfo.history
