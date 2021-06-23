import { ADD_TO_CART, ITEMS_IN_CART} from "../constants";
const initialState = {addToCart: [], cartCount:""}
export const addToCartReducer = (state= initialState, action)=>{ 
    switch (action.type) {
        case ADD_TO_CART:
            return{...state, addToCart: action.payload};
        case ITEMS_IN_CART:
            return{...state, cartCount:action.payload};
        default:
            return state;
    }
}