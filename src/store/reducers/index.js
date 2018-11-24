import { combineReducers } from "redux";
import userReduser from "./userReduser";
import registerReducer from "./registerReducer";

export default combineReducers({
  userReduser,
  registerReducer
});
