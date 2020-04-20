import AuthActionTypes from "./auth.types";

export const authToggle = (payload) => ({
    type: AuthActionTypes.AUTH_TOGGLE,
    payload
});

export const portal = (payload) => ({
    type: AuthActionTypes.PORTAL,
    payload
});

export const setLoading = (payload) => ({
    type: AuthActionTypes.LOADING,
    payload
});

export const setSignOutModal = (payload) => ({
    type: AuthActionTypes.SIGNOUT_MODAL,
    payload
});

export const setErrors = (payload) => ({
    type: AuthActionTypes.SET_ERROR,
    payload
});

export const signUpStart = (payload) => ({
    type: AuthActionTypes.SIGN_UP_START,
    payload
});

export const signUpSuccess = (payload) => ({
    type: AuthActionTypes.SIGN_UP_SUCCESS,
    payload
});

export const signInStart = payload => ({
    type: AuthActionTypes.SIGN_IN_START,
    payload
});

export const signInSuccess = payload => ({
    type: AuthActionTypes.SIGN_IN_SUCCESS,
    payload
});


export const setModal = (payload) => ({
    type: AuthActionTypes.SET_MODAL,
    payload
});

export const signOutStart = () => ({
type: AuthActionTypes.SIGN_OUT_START
});

export const signOutSuccess = () => ({
    type: AuthActionTypes.SIGN_OUT_SUCCESS
});

export const signOutFailure = () => ({
    type: AuthActionTypes.SIGN_OUT_FAILURE
});
