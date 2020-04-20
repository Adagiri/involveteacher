import { takeLatest, all, call, put, select } from "redux-saga/effects";
import UserActionTypes from "./user.types";
import { updateUserProfileStart, updateUserProfileSuccess, updateUserProfileFailure } from "./user.actions";
import { updateProfile } from "./user.utils";
import { token } from "../auth/auth.selectors";

//FetchUserProfile
// export function* setFetchUserProfileStart() {

//   try {
//     const auth_token = yield select(token);
//     const profile = yield fetchProfile(auth_token);
//     yield console.log(profile);
//     yield put(fetchUserProfileSuccess(profile));
//   } catch(err) {
//     yield put(fetchUserProfileFailure(err));
//   }
// }

// export function* onFetchUserProfile() {
// yield takeLatest(UserActionTypes.FETCH_USER_PROFILE_START, setFetchUserProfileStart)
// }
//FetchUserProfile


//UpdateUserProfile
export function* setUpdateUserProfile({payload}) {
  try{
    const auth_token = yield select(token);
    const response = yield updateProfile(payload, auth_token)
    yield console.log(response);
    yield put(updateUserProfileSuccess(response));
  //  yield put(fetchUserProfileStart());
  } catch(err) {
     yield put(updateUserProfileFailure(err))
  }
}

export function* onUpdateUserProfile() {
  yield takeLatest(UserActionTypes.UPDATE_USER_PROFILE_START, setUpdateUserProfile)
}
//UpdateUserProfile

//Auth__Root__Saga
export function* userProfileSagas() {
  yield all([call(onUpdateUserProfile)])
};

