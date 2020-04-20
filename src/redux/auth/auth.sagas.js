import { takeLatest, all, call, put, select } from "redux-saga/effects";
import AuthActionTypes from "./auth.types";
import { setErrors, signUpSuccess, setLoading, setModal, signInSuccess, signOutSuccess, portal, signOutFailure } from "./auth.actions";
import { registerUser, loginUser, signOut } from "./auth.utils";
import { token } from "./auth.selectors"


//AuthToggle__Start
export function* setSignUpStart({payload}) {
 
  try{
    const data = yield registerUser(payload)
     
      yield put(signUpSuccess(data.data.data));
      yield put(setModal(true));
      yield put(setLoading(false));
      yield put(portal(true))
   
     
  }
  catch (err) {
      yield put(setErrors([{message: err.message }]));
      yield put(setLoading(false));
  };

};
export function* onSignUpStart() {
  yield takeLatest(AuthActionTypes.SIGN_UP_START, setSignUpStart);
};
//AuthToggle__End

export function* setSignInStart({payload}) {
  try{
  const data = yield loginUser(payload);
     
    if ( data.data.data ) {
    
      yield put(signInSuccess(data.data.data));
      yield put(setLoading(false));
    } else {
      yield put(setErrors([{message: data.data.message}]));
      yield put(setLoading(false));
    }
      
    
  
  } catch (err) {
      yield put(setErrors([{message: err.message}]));
      yield put(setLoading(false));
  };
}

export function* onSignInStart() {
  yield takeLatest(AuthActionTypes.SIGN_IN_START, setSignInStart)
}

export function* setSignOutStart() {
try{
  const auth_token = yield select(token)
  const response = yield signOut(auth_token);
  
    yield put(signOutSuccess());
    
} catch(err) {
  yield put(signOutFailure());
}
}

export function* onSignOutStart() {
  yield takeLatest(AuthActionTypes.SIGN_OUT_START, setSignOutStart)
}

//Auth__Root__Saga
export function* authSagas() {
  yield all([call(onSignUpStart), call(onSignInStart), call(onSignOutStart)]);
};

