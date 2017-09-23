// @flow
import type { Field } from "../../types";

export const RECEIVE_FIELD: "FieldContainer/RECEIVE_FIELD" =
  "FieldContainer/RECEIVE_FIELD";
export const RECEIVE_KEY: "FieldContainer/RECEIVE_KEY" =
  "FieldContainer/RECEIVE_KEY";
export const UPDATE_STACK: "FieldContainer/UPDATE_STACK" =
  "FieldContainer/UPDATE_STACK";

export const Actions = {
  RECEIVE_FIELD,
  RECEIVE_KEY,
  UPDATE_STACK
};

export type ReceiveField = {
  type: typeof RECEIVE_FIELD,
  field: Field
};

export type ReceiveKey = {
  type: typeof RECEIVE_KEY,
  key: string
};

export type UpdateStack = {
  type: typeof UPDATE_STACK,
  stack: string
};

export type Action = ReceiveField | ReceiveKey | UpdateStack;
