// @flow
import {
  NONE,
  MOVE_LEFT,
  MOVE_RIGHT,
  MOVE_UP,
  MOVE_DOWN,
  MOVE
} from "./actionTypes";
import type {
  None,
  MoveLeft,
  MoveRight,
  MoveUp,
  MoveDown,
  Move
} from "./actionTypes";

export function none(): None {
  return {
    type: NONE
  };
}
export function moveLeft(): MoveLeft {
  return {
    type: MOVE_LEFT
  };
}
export function moveRight(): MoveRight {
  return {
    type: MOVE_RIGHT
  };
}
export function moveUp(): MoveUp {
  return {
    type: MOVE_UP
  };
}
export function moveDown(): MoveDown {
  return {
    type: MOVE_DOWN
  };
}
export function move(nx: number, ny: number): Move {
  return {
    type: MOVE,
    nx,
    ny
  };
}
