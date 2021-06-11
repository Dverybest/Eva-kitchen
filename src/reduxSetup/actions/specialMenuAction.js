import { requestProcessor } from "../../URLs/requestProcessor";
import { SPECIAL_MENU } from "../constants";
import { loadingAction } from "./loadingAction";
const specialMenuAction = (payload) => (dispatch) =>
new Promise(async(resolve, reject) => {
    dispatch(loadingAction(true));
    try {
        const response = await requestProcessor ({
            method: 'GET',
            url: '/menu/getSpecial',
            dispatch,  
        });
        if (response.success) {
            dispatch(loadingAction(false));
            dispatch({
                type: SPECIAL_MENU,
                payload: response.data
            })
            resolve(response);
        }
    } catch (error) {
        reject(error)    
    }
})
export {specialMenuAction};