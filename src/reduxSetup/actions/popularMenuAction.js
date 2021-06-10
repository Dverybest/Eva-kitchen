import { requestProcessor } from "../../URLs/requestProcessor";
import { POPULAR_MENU, } from "../constants";
import { loadingAction } from "./loadingAction";
const popularMenuAction = (payload) => (dispatch) =>
new Promise(async(resolve, reject) => {
    dispatch (loadingAction(true))
    try {
        const response = await requestProcessor ({
            method: 'GET',
            url: '/menu/getPopular',
            dispatch,  
        });
        if (response.success) {
            dispatch(loadingAction(false));
            dispatch({
                type: POPULAR_MENU,
                payload: response.data
            })
            resolve(response);
        }
    } catch (error) {
        reject(error)
        
    }
})
export {popularMenuAction};