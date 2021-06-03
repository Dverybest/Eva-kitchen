import { requestProcessor } from "../../URLs/requestProcessor";
import { POPULAR_MENU } from "../constants";
const popularMenuAction = (payload) => (dispatch) =>
new Promise(async(resolve, reject) => {
    try {
        const response = await requestProcessor ({
            method: 'GET',
            url: '/menu/getPopular',
            dispatch,  
        });
        if (response.success) {
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