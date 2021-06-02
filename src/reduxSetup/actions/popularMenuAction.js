import { requestProcessor } from "../../URLs/requestProcessor";
import { POPULAR_MENU } from "../constants";
// import { Dispatch } from "react";
const popularMenuAction = (payload) => (dispatch) =>
new Promise(async(resolve, reject) => {
    try {
        console.log("here?");
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
            console.log("you here?", response);
        }
    } catch (error) {
        reject(error)
        
    }
})
export {popularMenuAction};