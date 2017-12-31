// @flow
import type { Action as FieldContainerAction } from "../containers/FieldContainer/actionTypes";
import type { Action as PlayerByIdAction } from "../containers/PlayerById/actionTypes";
import type { Action as VimAction } from "../containers/Vim/actionTypes";

export type Action = FieldContainerAction | PlayerByIdAction | VimAction;
