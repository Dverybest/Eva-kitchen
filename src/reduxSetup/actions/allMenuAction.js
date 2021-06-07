import { requestProcessor } from "../../URLs/requestProcessor";
import { ALL_MENU } from "../constants";

const getMenuAction = ( id) => (dispatch) =>
new Promise(async(resolve, reject) => {
    try {
        const response = await requestProcessor ({
            method: 'GET',
            url: id? `/menu?category=${id}`:'/menu' ,
            dispatch,  
        });
        if (response.success) {
            dispatch({
                type: ALL_MENU,
                payload: response.data
            })
            resolve(response);
        }
    } catch (error) {
        reject(error)
        
    }
})
export {getMenuAction};