import { combineReducers } from "redux";
import { addToCartReducer } from "./orderMenuReducer";
import { loaderReducer } from "./loaderReducer";
import { menuReducer } from "./menuReducer";

const RootReducer = combineReducers ({
    meals: menuReducer,
    loader: loaderReducer,
    addItem: addToCartReducer,
})
export default RootReducer;
