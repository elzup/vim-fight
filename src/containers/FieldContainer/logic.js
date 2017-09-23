// @flow
import * as game from '../../api/game'
import type { ThunkAction, BaseField, Field, Square } from '../../types'
import * as actions from './actions'

function codeToSquares(code): Array<Array<Square>> {
  return code.split('\n').map(line =>
    line.split('').map(c => ({
      charactor: c,
      playersId: [],
    }))
  )
}

export function loadFields(): ThunkAction {
  return dispath => {
    game.getFields((fields: BaseField[]) => {
      const rawFiled = fields[0]
      const field: Field = {
        squares: codeToSquares(rawFiled.code),
        ...rawFiled,
      }
      dispath(actions.receiveField(field))
    })
  }
}
