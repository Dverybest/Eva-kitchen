import axios from "axios";
import { getStorage } from "../utils/storage";
import { BASEURL } from "./config";

axios.defaults.baseURL = BASEURL;
axios.interceptors.request.use(config => {
    const result = getStorage();
    config.headers = {
      'x-auth-token': result?.auth?.userDetail?.authToken,
      Accept: 'application/json',
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
    };
    return config;
  },
  (error) => {
    Promise.reject(error);
  },
);
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
        throw {status: error.response.status, ...error.response.data};
    }
    throw {message:error.message};
}
}