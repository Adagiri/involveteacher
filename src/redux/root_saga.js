import { all, call} from 'redux-saga/effects';
import { authSagas } from "./auth/auth.sagas";
import { topicsSagas } from "./topics/topics.sagas";

export function* root_saga() {
    yield all([
        call(authSagas),
        call(topicsSagas)
    ])
}