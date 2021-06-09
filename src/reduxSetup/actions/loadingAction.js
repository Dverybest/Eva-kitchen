import { LOADING } from "../constants";
const loadingAction = (payload)=>(dispatch)=>{
    dispatch({
        type: LOADING,
        payload:payload
    })
    
    return{type: LOADING, payload}
}
export {loadingAction}