import { axios } from " axios ";
import { BASEURL } from "./config";
import {  } from "module";

axios.defaults.baseURL = BASEURL;
axios.interceptors.request.use(config=>{
    const result = getStorage();
    config.headers = {
        'c-auth-token': result.auth.token,
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'Access-Contron-Allow-Origin': '*',
    }
    return config;
},
(error)=> {
    Promise.reject(error);
},
);
