import { combineReducers } from "redux";
import { menuReducer } from "./menuReducer";

const RootReducer = combineReducers ({
    meals: menuReducer,
})
export default RootReducer;
