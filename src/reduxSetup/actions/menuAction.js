import { requestProcessor } from "../../URLs/requestProcessor";
import { ALL_MENU, MENU_CATEGORY, POPULAR_MENU, SPECIAL_MENU } from "../constants";
import { loadingAction } from "./loadingAction";

const getMenuAction = (id) => (dispatch) =>
    new Promise(async (resolve, reject) => {
        dispatch(loadingAction(true));
        try {
            const response = await requestProcessor({
                method: 'GET',
                url: id ? `/menu?category=${id}` : '/menu',
                dispatch,
            });
            dispatch({
                type: ALL_MENU,
                payload: response.data.docs
            })
            resolve(response);
        } catch (error) {
            reject(error)

        }finally{
            dispatch(loadingAction(false));
        }
    })
export { getMenuAction };

const menuCategoryAction = (payload) => (dispatch) =>
new Promise(async(resolve, reject) => {
    dispatch(loadingAction(true));
    try {
        const response = await requestProcessor ({
            method: 'GET',
            url: '/categories',
            dispatch,  
        });
            dispatch({
                type: MENU_CATEGORY,
                payload: response.data
            })
            resolve(response);
    } catch (error) {
        reject(error)
    }
    finally{
        dispatch(loadingAction(false));
    }
})
export {menuCategoryAction};

const popularMenuAction = (payload) => (dispatch) =>
new Promise(async(resolve, reject) => {
    dispatch (loadingAction(true))
    try {
        const response = await requestProcessor ({
            method: 'GET',
            url: '/menu/getPopular',
            dispatch,  
        });
            dispatch({
                type: POPULAR_MENU,
                payload: response.data
            })
            resolve(response);
    } catch (error) {
        reject(error)
    }
    finally{
        dispatch(loadingAction(false));
    }
})
export {popularMenuAction};
const specialMenuAction = (payload) => (dispatch) =>
new Promise(async(resolve, reject) => {
    dispatch(loadingAction(true));
    try {
        const response = await requestProcessor ({
            method: 'GET',
            url: '/menu/getSpecial',
            dispatch,  
        });
            dispatch({
                type: SPECIAL_MENU,
                payload: response.data
            })
            resolve(response);
    } catch (error) {
        reject(error)    
    }
    finally{
        dispatch(loadingAction(false));
    }
})
export {specialMenuAction};