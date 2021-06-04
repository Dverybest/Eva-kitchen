import { combineReducers } from "redux";
import { popularMenuReducer } from "./popularMenuReducer";
const RootReducer = combineReducers ({
    menu: popularMenuReducer
})
export default RootReducer;
