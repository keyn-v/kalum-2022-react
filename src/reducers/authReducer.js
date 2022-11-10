import { SET_CURRENT_USER } from '../actions/types';

const initialState = {user:{}, loggedIn:false};

export default function authReducer(state = initialState, action){
    const {type, payload} = action;

    switch (type) {
        case SET_CURRENT_USER:
            return {
                ...state,
                loggedIn: payload.loggedIn,
                user: payload.user
            }
        default:
            return state;
    }

}