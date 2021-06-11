import axios from "axios";
import { BASEURL } from "./config";

axios.defaults.baseURL = BASEURL;
export const requestProcessor = async({
    method,
    url, 
    payload, 
})=>{;
try {
    const result = await axios ({
        method,
        url,
        data:payload,
    })
    return {status: result.status, ...result.data};
}
catch(error){
    if (error?.response) {
        return{status: error.response.status, ...error.response.data};
    }
    return error;
}
}