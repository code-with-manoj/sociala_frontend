import AuthReducer from "./AuthReducer";
import UserReducer from "./UserReducer"
import { combineReducers } from "redux";

const Reducer = combineReducers({ AuthReducer,UserReducer });

export default Reducer;
