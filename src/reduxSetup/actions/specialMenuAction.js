import { requestProcessor } from "../../URLs/requestProcessor";
import { SPECIAL_MENU } from "../constants";
const specialMenuAction = (payload) => (dispatch) =>
new Promise(async(resolve, reject) => {
    try {
        const response = await requestProcessor ({
            method: 'GET',
            url: '/menu/getSpecial',
            dispatch,  
        });
        if (response.success) {
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