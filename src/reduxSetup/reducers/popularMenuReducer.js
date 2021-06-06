import { POPULAR_MENU, SPECIAL_MENU } from "../constants";
const initialState = {popularMenu: null, specialMenu:null}
export const menuReducer = (state = initialState, action) => {
    switch (action.type) {
        case POPULAR_MENU:
            return{...state, popularMenu: action.payload};
        case SPECIAL_MENU:
            return{...state, specialMenu: action.payload};   
        default:
            return state;
    }
};
