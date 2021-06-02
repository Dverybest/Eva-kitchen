import { axios } from " axios ";
import { BASEURL } from "./config";
import {  } from "module";

axios.defaults.baseURL = BASEURL;
const requestProcessor = async({
    method, url, payload, dispatch,
});
try {
    const result = await axios ({
        method,
        url,
        data:payload,
    }),
    return{status: result.status, ...result.data};
}
catch(error){
    if (error?.response) {
        return{status: error.response.status, ...error.response.data};
    }
    return error;
}