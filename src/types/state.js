// @flow
import type { State as FieldContainer } from "../containers/FieldContainer/reducer";
import type { State as KeyInfo } from "../containers/KeyInfo/reducer";
import type { State as KeyLog } from "../containers/KeyLog/reducer";
import type { State as PlayerById } from "../containers/PlayerById/reducer";

export type State = {
  FieldContainer: FieldContainer,
  KeyInfo: KeyInfo,
  KeyLog: KeyLog,
  PlayerById: PlayerById
};
