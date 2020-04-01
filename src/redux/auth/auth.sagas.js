import { takeLatest, all, call, put } from "redux-saga/effects";
import AuthActionTypes from "./auth.types";
import axios from "axios";
import { setErrors, signUpSuccess, setLoading, setModal, signInSuccess, signOutSuccess } from "./auth.actions";
import { registerUser } from "./auth.utils"


//AuthToggle__Start
export function* setSignUpStart({payload}) {
 
  try{
    const data = yield registerUser(payload)
     
      yield console.log(data);
      // yield localStorage.setItem('user', JSON.stringify(object) );
      // yield localStorage.setItem('token', data.data.data.token);
      // yield put(signUpSuccess(data));
      // yield put(setModal(true));
      // yield put(setLoading(false));
   
    
    
  }
  catch (err) {
      yield put(setErrors([{message: err.message }]));
      console.log(err)
      yield put(setLoading(false));
  };

};
export function* onSignUpStart() {
  yield takeLatest(AuthActionTypes.SIGN_UP_START, setSignUpStart);
};
//AuthToggle__End

export function* setSignInStart({payload}) {
  try{
    const data = yield axios({
      method: 'post',
      url: 'https://api.involveteacher.space/v2/login',
      data: payload
    });

    const object = data.data.data;
   
    if (object) {
      yield localStorage.setItem('user', JSON.stringify(object) );
      yield localStorage.setItem('token', object.auth.token);
    
      yield put(signInSuccess(object));
      yield put(setLoading(false));
    } else {
      yield put(setErrors([{message: data.data.message}]));
      yield put(setLoading(false));
    }
  
  }
  catch (err) {
      yield put(setErrors([{message: err.message}]));
      yield put(setLoading(false));
  };
}

export function* onSignInStart() {
  yield takeLatest(AuthActionTypes.SIGN_IN_START, setSignInStart)
}

export function* setSignOutStart() {
try{
    yield localStorage.removeItem('token');
    yield localStorage.removeItem('user');
    yield put(signOutSuccess());
} catch(err) {
  console.error(err.message);
}
}

export function* onSignOutStart() {
  yield takeLatest(AuthActionTypes.SIGN_OUT_START, setSignOutStart)
}

//Auth__Root__Saga
export function* authSagas() {
  yield all([call(onSignUpStart), call(onSignInStart), call(onSignOutStart)]);
};

