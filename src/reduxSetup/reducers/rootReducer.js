import { combineReducers } from "redux";
import { popularMenuReducer, specialMenuReducer } from "./popularMenuReducer";
const RootReducer = combineReducers ({
    menu: popularMenuReducer,
    specials: specialMenuReducer
})
export default RootReducer;
