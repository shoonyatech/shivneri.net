import * as types from "../actions/actionTypes";
import initialState from "./initialState";

export default function fortReducer(state = initialState.forts, action) {
    switch (action.type) {
        case types.LOAD_FORTS_SUCCESS:
            return action.forts;
        default:
            return state;
    }
}
