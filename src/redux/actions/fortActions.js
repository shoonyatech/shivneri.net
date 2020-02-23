import * as types from "./actionTypes";
import * as fortApi from "../../api/fortApi";
import { beginApiCall, apiCallError } from "./apiStatusActions";

export function loadFortSuccess(forts) {
    return { type: types.LOAD_FORTS_SUCCESS, forts };
}

export function loadForts() {
    return function (dispatch) {
        dispatch(beginApiCall());
        return fortApi
            .getForts()
            .then(forts => {
                dispatch(loadFortSuccess(forts));
            })
            .catch(error => {
                dispatch(apiCallError(error));
                throw error;
            });
    };
}