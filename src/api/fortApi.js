import { handleResponse, handleError } from "./apiUtils";
const baseUrl = process.env.API_URL + "/forts/";

export function getForts() {
    debugger
    console.log(baseUrl)
    return fetch(baseUrl)
        .then(handleResponse)
        .catch(handleError);
}