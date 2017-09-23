// @flow
import _fizzbuzz from './fields.json'

const TIMEOUT = 100

export function getFields(cb: Function, timeout: number = TIMEOUT) {
  setTimeout(() => {
    cb(_fizzbuzz)
  }, timeout)
}
