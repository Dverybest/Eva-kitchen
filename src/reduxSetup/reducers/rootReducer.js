import { combineReducers } from "redux";
import { cartReducer } from "./orderMenuReducer";
import { loaderReducer } from "./loaderReducer";
import { menuReducer } from "./menuReducer";
import { authReducer } from "./authReducer";

const RootReducer = combineReducers ({
    meals: menuReducer,
    loader: loaderReducer,
    cart: cartReducer,
    auth:authReducer
})
export default RootReducer;
