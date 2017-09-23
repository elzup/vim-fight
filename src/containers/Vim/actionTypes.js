// @flow
export const NONE: "Vim/NONE" = "Vim/NONE";
export const MOVE_LEFT: "Vim/MOVE_LEFT" = "Vim/MOVE_LEFT";
export const MOVE_RIGHT: "Vim/MOVE_RIGHT" = "Vim/MOVE_RIGHT";
export const MOVE_UP: "Vim/MOVE_UP" = "Vim/MOVE_UP";
export const MOVE_DOWN: "Vim/MOVE_DOWN" = "Vim/MOVE_DOWN";
export const MOVE: "Vim/MOVE" = "Vim/MOVE";

export const Actions = {
  NONE,
  MOVE_LEFT,
  MOVE_RIGHT,
  MOVE_UP,
  MOVE_DOWN,
  MOVE
};

export type None = {
  type: typeof NONE
};

export type MoveLeft = {
  type: typeof MOVE_LEFT
};
export type MoveRight = {
  type: typeof MOVE_RIGHT
};
export type MoveUp = {
  type: typeof MOVE_UP
};
export type MoveDown = {
  type: typeof MOVE_DOWN
};

export type Move = {
  type: typeof MOVE,
  nx: number,
  ny: number
};

export type Action = None | MoveLeft | MoveRight | MoveUp | MoveDown | Move;
