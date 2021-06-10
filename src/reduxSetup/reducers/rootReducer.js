import { combineReducers } from "redux";
import { loaderReducer } from "./loaderReducer";
import { menuReducer } from "./menuReducer";

const RootReducer = combineReducers ({
    meals: menuReducer,
    loader: loaderReducer,
})
export default RootReducer;
