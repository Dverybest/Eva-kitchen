import { requestProcessor } from "../../URLs/requestProcessor";
import { ALL_MENU } from "../constants";
import { loadingAction } from "./loadingAction";

const getMenuAction = ( id) => (dispatch) =>
new Promise(async(resolve, reject) => {
    dispatch (loadingAction(true));
    try {
        const response = await requestProcessor ({
            method: 'GET',
            url: id? `/menu?category=${id}`:'/menu' ,
            dispatch,  
        });
        if (response.success) {
            dispatch(loadingAction(false));
            dispatch({
                type: ALL_MENU,
                payload: response.data.docs
            })
            resolve(response);
        }
    } catch (error) {
        reject(error)
        
    }
})
export {getMenuAction};