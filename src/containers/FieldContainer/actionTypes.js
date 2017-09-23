// @flow
import type { Field } from "../../types";

export const RECEIVE_FIELD: "FieldContainer/RECEIVE_FIELD" =
  "FieldContainer/RECEIVE_FIELD";

export const Actions = {
  RECEIVE_FIELD
};

export type ReceiveField = {
  type: typeof RECEIVE_FIELD,
  field: Field
};

export type Action = ReceiveField;
