// @flow
import type { Product } from "../../types";

export const NONE: "Vim/NONE" = "Vim/NONE";
export const MOVE_FOWARD: "Vim/MOVE_FOWARD" = "Vim/MOVE_FOWARD";

export const Actions = {
  NONE,
  MOVE_FOWARD
};

export type None = {
  type: typeof NONE
};

export type MoveFoward = {
  type: typeof MOVE_FOWARD
};

export type Action = None | MoveFoward;
