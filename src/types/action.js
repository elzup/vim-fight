// @flow
import type { Action as CartContainerAction } from "../containers/CartContainer/actionTypes";
import type { Action as FieldContainerAction } from "../containers/FieldContainer/actionTypes";
import type { Action as ProductsContainerAction } from "../containers/ProductsContainer/actionTypes";
import type { Action as VimAction } from "../containers/Vim/actionTypes";

export type Action =
  | CartContainerAction
  | FieldContainerAction
  | ProductsContainerAction
  | VimAction;
