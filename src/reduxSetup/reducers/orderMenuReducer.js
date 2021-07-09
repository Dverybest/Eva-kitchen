import { ADD_TO_CART, DECREMENT, INCREMENT, ITEMS_IN_CART} from "../constants";
const initialState = {cartItem: [], cartCount:0}
export const cartReducer = (state= initialState, action)=>{ 
    switch (action.type) {
        case ADD_TO_CART:
            return{...state, cartItem: action.payload};
        case ITEMS_IN_CART:
            return{...state, cartCount:action.payload};
        case INCREMENT:
            return {...state, cartItem: action.payload}
        case DECREMENT:
            return {...state, cartItem: action.payload}        
        default:
            return state;
    }
}