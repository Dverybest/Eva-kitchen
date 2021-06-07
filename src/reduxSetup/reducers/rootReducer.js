import { combineReducers } from "redux";
import { menuReducer } from "./popularMenuReducer";
const RootReducer = combineReducers ({
    meals: menuReducer,
    // specials: menuReducer
})
export default RootReducer;
