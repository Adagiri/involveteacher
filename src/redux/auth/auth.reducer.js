import AuthActionTypes from "./auth.types";
const initialAuth = {
    auth_toggled: "false"
}

export const auth_reducer = (state=initialAuth, action) => {
    switch(action.type) {
        case AuthActionTypes.AUTH_TOGGLE:
            return {
                ...state,
                auth_toggled: action.payload
            };

            default:
                return state
    }
}