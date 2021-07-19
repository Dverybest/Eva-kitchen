import { IS_AUTHENTICATED,LOG_OUT } from "../constants";
import { requestProcessor } from "../../URLs/requestProcessor";
import { loadingAction } from "./loadingAction";

export const signInAction = (payload) => (dispatch) =>
    new Promise(async (resolve, reject) => {
        dispatch(loadingAction(true));
        try {
            const response = await requestProcessor({
                method: 'post',
                url:'/auth/login',
                payload,
                dispatch,
            });
            dispatch({
                type: IS_AUTHENTICATED,
                payload: response.data
            })
            resolve(response);
        } catch (error) {
            reject(error)

        }finally{
            dispatch(loadingAction(false));
        }
    })

export const logOutAction=()=>{
    return {type:LOG_OUT,payload:null}
}