// @flow
import type { Product } from "../../types";

import { NONE, MOVE_FOWARD } from "./actionTypes";
import type { None, MoveFoward } from "./actionTypes";

export function none(): None {
  return {
    type: NONE
  };
}
export function moveFoward(): MoveFoward {
  return {
    type: MOVE_FOWARD
  };
}
