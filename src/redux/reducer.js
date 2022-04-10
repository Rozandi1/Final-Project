import { combineReducers } from "redux";
import wisataReducer from "./wisata/reducer";
import authReducer from "./auth/reducer";

const rootReducer = combineReducers({
  wisata: wisataReducer,
  auth: authReducer,
});

export default rootReducer;
