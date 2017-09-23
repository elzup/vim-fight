// @flow
import * as game from '../../api/game'
import type { ThunkAction, BaseField } from '../../types'
import * as actions from './actions'

export function loadFields(): ThunkAction {
  return dispath => {
    game.getFields((fields: BaseField[]) => {
      dispath(actions.receiveField(fields[0]))
    })
  }
}
