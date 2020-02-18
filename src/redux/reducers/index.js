import { combineReducers } from "redux";
import forts from "./fortReducer";
import apiCallsInProgress from "./apiStatusReducer";

const rootReducer = combineReducers({
    forts,
    apiCallsInProgress
});

export default rootReducer;
