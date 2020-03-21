import { takeLatest, all, call } from "redux-saga/effects";
import AuthActionTypes from "./auth.types";


//AuthToggle__Start
export function* setAuthChange() {
 console.log('nothing yet');
}
export function* onAuthToggle() {
  yield takeLatest(AuthActionTypes.AUTH_TOGGLE, setAuthChange);
}
//AuthToggle__End

//Auth__Root__Saga
export function* authSagas() {
  yield all([call(onAuthToggle)]);
}
