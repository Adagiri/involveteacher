import UserActionTypes from "./user.types";

// export const fetchUserProfileStart = () => ({
//     type: UserActionTypes.FETCH_USER_PROFILE_START
// });

// export const fetchUserProfileSuccess = (payload) => ({
//     type: UserActionTypes.FETCH_USER_PROFILE_SUCCESS,
//     payload
// });

// export const fetchUserProfileFailure = (payload) => ({
//     type: UserActionTypes.UPDATE_USER_PROFILE_FAILURE,
//     payload
// });

export const updateUserProfileStart = (payload) => ({
    type: UserActionTypes.UPDATE_USER_PROFILE_START,
    payload
});

export const updateUserProfileSuccess = (payload) => ({
    type: UserActionTypes.UPDATE_USER_PROFILE_SUCCESS,
    payload
});

export const updateUserProfileFailure = (payload) => ({
    type: UserActionTypes.UPDATE_USER_PROFILE_FAILURE,
    payload
});

export const  setUpdateInfoLoading = payload => ({
    type: UserActionTypes.SET_UPDATE_INFO_LOADING,
    payload
});

export const  setUpdateInfoError = payload => ({
    type: UserActionTypes.SET_UPDATE_INFO_ERRORS,
    payload
});