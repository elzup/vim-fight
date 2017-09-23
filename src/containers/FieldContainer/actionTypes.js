// @flow
import type { Field } from "../../types";

export const RECEIVE_FIELD: "FieldContainer/RECEIVE_FIELD" =
  "FieldContainer/RECEIVE_FIELD";
export const RECEIVE_KEY: "FieldContainer/RECEIVE_KEY" =
  "FieldContainer/RECEIVE_KEY";

export const Actions = {
  RECEIVE_FIELD,
  RECEIVE_KEY
};

export type ReceiveField = {
  type: typeof RECEIVE_FIELD,
  field: Field
};

export type ReceiveKey = {
  type: typeof RECEIVE_KEY,
  key: string
};

export type Action = ReceiveField | ReceiveKey;
