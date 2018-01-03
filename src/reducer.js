// @flow
import { combineReducers } from "redux";
import FieldContainer from "./containers/FieldContainer/reducer";
import KeyInfo from "./containers/KeyInfo/reducer";
import KeyLog from "./containers/KeyLog/reducer";
import PlayerById from "./containers/PlayerById/reducer";

export default combineReducers({
  FieldContainer,
  KeyInfo,
  KeyLog,
  PlayerById
});
