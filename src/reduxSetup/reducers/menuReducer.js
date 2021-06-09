import { ALL_MENU, LOADING, MENU_CATEGORY, POPULAR_MENU, SPECIAL_MENU } from "../constants";
const initialState = {popularMenu: null, specialMenu:null, menuCategory: [], allMenu:[],}
export const menuReducer = (state = initialState, action) => {
    switch (action.type) {
        case ALL_MENU:
            return{...state, allMenu:action.payload};
        case POPULAR_MENU:
            return{...state, popularMenu: action.payload};
        case SPECIAL_MENU:
            return{...state, specialMenu: action.payload};
        case MENU_CATEGORY:
            return{...state, menuCategory:action.payload};
        default:
            return state;
    }
};
