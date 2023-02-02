import { combineReducers } from "redux";

import userRducer from "./userReducer";


export default combineReducers({
  user: userRducer,
});
