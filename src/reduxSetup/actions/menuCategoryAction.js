import { requestProcessor } from "../../URLs/requestProcessor";
import { MENU_CATEGORY } from "../constants";
const menuCategoryAction = (payload) => (dispatch) =>
new Promise(async(resolve, reject) => {
    try {
        const response = await requestProcessor ({
            method: 'GET',
            url: '/categories',
            dispatch,  
        });
        if (response.success) {
            dispatch({
                type: MENU_CATEGORY,
                payload: response.data
            })
            resolve(response);
        }
    } catch (error) {
        reject(error)
        
    }
})
export {menuCategoryAction};