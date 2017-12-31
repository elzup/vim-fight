// @flow
import type { Player } from "../../types";

import { ADD_PLAYER } from "./actionTypes";
import type { AddPlayer } from "./actionTypes";

export function addPlayer(player: Player): AddPlayer {
  return {
    type: ADD_PLAYER,
    player
  };
}
