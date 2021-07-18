import { IS_AUTHENTICATED} from "../constants";
const initialState = {isAuthenticated:false,userDetail:null}
export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case IS_AUTHENTICATED:
            return{...state, isAuthenticated:true,userDetail: action.payload};
        default:
            return state;
    }
};