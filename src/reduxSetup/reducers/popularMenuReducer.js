import { POPULAR_MENU } from "../constants";
const initialState = {popularMenu: null}
export const popularMenuReducer = (state = initialState, action) => {
    switch (action.type) {
        case POPULAR_MENU:
            return{...state, popularMenu: action.payload};    
        default:
            return state;
    }
};