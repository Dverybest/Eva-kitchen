import { requestProcessor } from "../../URLs/requestProcessor";
import { MENU_CATEGORY } from "../constants";
import { loadingAction } from "./loadingAction";
const menuCategoryAction = (payload) => (dispatch) =>
new Promise(async(resolve, reject) => {
    dispatch(loadingAction(true));
    try {
        const response = await requestProcessor ({
            method: 'GET',
            url: '/categories',
            dispatch,  
        });
        
        if (response.success) {
            dispatch(loadingAction(false));
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