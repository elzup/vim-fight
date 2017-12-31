// @flow
import { combineReducers } from "redux";
import FieldContainer from "./containers/FieldContainer/reducer";
import Key from "./containers/Key/reducer";
import KeyInfo from "./containers/KeyInfo/reducer";
import PlayerById from "./containers/PlayerById/reducer";

export default combineReducers({
  FieldContainer,
  Key,
  KeyInfo,
  PlayerById
});
