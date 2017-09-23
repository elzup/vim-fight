import * as game from '../../api/game'
import type {
  State,
  ThunkAction,
  BaseField,
  Field,
  Square,
  GetState,
} from '../../types'
import * as actions from './actions'
import { Actions as VimActions } from '../Vim/actionTypes'

function codeToSquares(code): Array<Array<Square>> {
  let i = -1
  return code.split('\n').map(line =>
    line.split('').map(c => {
      i += 1
      return {
        id: i,
        charactor: c,
        playersId: [],
      }
    })
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

const whileListKey =
  'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890'

type parseResult = {
  actionType: VimActions,
  newStack: string,
}

function vimParse(s: string): parseResult {
  return {
    actionType: VimActions.NONE,
    newStack: s,
  }
}

export function gameSetup(): ThunkAction {
  return (dispath, getState: GetState) => {
    window.onkeydown = e => {
      if (whileListKey.indexOf(e.key) > -1) {
        const { stack } = getState().Key
        dispath(actions.receiveKey(e.key))
        const { newStack, actionType } = vimParse(stack + e.key)
        if (actionType != VimActions.NONE) {
          dispath(actions.updateStack(newStack))
        }
      }
    }
  }
}
