// @flow

import type { State } from '../../types'

export const getField = (state: State) => state.FieldContainer
export const getPlayersArray = (state: State) => Object.values(state.PlayerById)
