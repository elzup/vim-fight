// @flow
import type { Player } from "../../types";

export const ADD_PLAYER: "PlayerById/ADD_PLAYER" = "PlayerById/ADD_PLAYER";

export const Actions = {
  ADD_PLAYER
};

export type AddPlayer = {
  type: typeof ADD_PLAYER,
  player: Player
};

export type Action = AddPlayer;
