import { all, call} from 'redux-saga/effects';
import { authSagas } from "./auth/auth.sagas";

export function* root_saga() {
    yield all([
        call(authSagas)
    ])
}