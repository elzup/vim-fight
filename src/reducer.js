// @flow
import { combineReducers } from "redux";
import FieldContainer from "./containers/FieldContainer/reducer";
import Key from "./containers/Key/reducer";
import PlayerById from "./containers/PlayerById/reducer";

export default combineReducers({
  FieldContainer,
  Key,
  PlayerById
});
