import { combineReducers } from "redux";
import { cartReducer } from "./orderMenuReducer";
import { loaderReducer } from "./loaderReducer";
import { menuReducer } from "./menuReducer";

const RootReducer = combineReducers ({
    meals: menuReducer,
    loader: loaderReducer,
    cart: cartReducer,
})
export default RootReducer;
