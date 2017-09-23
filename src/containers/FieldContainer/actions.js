// @flow
import type { Field } from "../../types";

import { RECEIVE_FIELD, RECEIVE_KEY } from "./actionTypes";
import type { ReceiveField, ReceiveKey } from "./actionTypes";

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
