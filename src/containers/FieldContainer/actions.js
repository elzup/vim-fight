// @flow
import type { Field } from "../../types";

import { RECEIVE_FIELD, RECEIVE_KEY, UPDATE_STACK } from "./actionTypes";
import type { ReceiveField, ReceiveKey, UpdateStack } from "./actionTypes";

export function receiveField(field: Field): ReceiveField {
  return {
    type: RECEIVE_FIELD,
    field
  };
}
export function receiveKey(key: string): ReceiveKey {
  return {
    type: RECEIVE_KEY,
    key
  };
}
export function updateStack(stack: string): UpdateStack {
  return {
    type: UPDATE_STACK,
    stack
  };
}
