import AuthActionTypes from "./auth.types";

export const authToggle = (bool) => ({
    type: AuthActionTypes.AUTH_TOGGLE,
    payload: bool
});