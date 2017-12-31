// @flow
import { combineReducers } from "redux";
import CartContainer from "./containers/CartContainer/reducer";
import FieldContainer from "./containers/FieldContainer/reducer";
import Key from "./containers/Key/reducer";
import PlayerById from "./containers/PlayerById/reducer";
import ProductById from "./containers/ProductById/reducer";
import ProductsContainer from "./containers/ProductsContainer/reducer";

export default combineReducers({
  CartContainer,
  FieldContainer,
  Key,
  PlayerById,
  ProductById,
  ProductsContainer
});
