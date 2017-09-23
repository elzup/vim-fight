// @flow
import type { State as CartContainer } from "../containers/CartContainer/reducer";
import type { State as FieldContainer } from "../containers/FieldContainer/reducer";
import type { State as ProductById } from "../containers/ProductById/reducer";
import type { State as ProductsContainer } from "../containers/ProductsContainer/reducer";

export type State = {
  CartContainer: CartContainer,
  FieldContainer: FieldContainer,
  ProductById: ProductById,
  ProductsContainer: ProductsContainer
};
