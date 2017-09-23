// @flow
import type { Field } from "../../types";

import { RECEIVE_FIELD } from "./actionTypes";
import type { ReceiveField } from "./actionTypes";

export function receiveField(field: Field): ReceiveField {
  return {
    type: RECEIVE_FIELD,
    field
  };
}
