import { combineReducers } from "redux";
import gasSlice from "../modules/GasChart/gasSlice";

const createRootReducer = () =>
  combineReducers({
  gas:gasSlice
  });

export default createRootReducer;
