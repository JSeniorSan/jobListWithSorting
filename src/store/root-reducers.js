import { combineReducers } from "redux";
import { positionReducer } from "./positiions/positions-reducer";
import { filterReducer } from "./filter/filter-reducers";
export const rootReducer = combineReducers({
  positions: positionReducer,
  filter: filterReducer,
});
