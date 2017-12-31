// @flow
import type { State as FieldContainer } from "../containers/FieldContainer/reducer";
import type { State as Key } from "../containers/Key/reducer";
import type { State as PlayerById } from "../containers/PlayerById/reducer";

export type State = {
  FieldContainer: FieldContainer,
  Key: Key,
  PlayerById: PlayerById
};
