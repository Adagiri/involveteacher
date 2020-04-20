import { takeLatest, all, call, put, select } from "redux-saga/effects";
import TopicActionTypes from "./topics.types";
import { fetchTopics } from "./topics.utils";
import {  fetchTopicsFailure, fetchTopicsSuccess } from "./topics.actions";
import { token } from "../auth/auth.selectors";

export function* setFetchTopicsStart() {
 try{
   const auth_token = yield select(token);
const data = yield fetchTopics(auth_token);
yield put(fetchTopicsSuccess(data.data.data));
 } catch(err) {
  yield put(fetchTopicsFailure(err));
 }
};

export function* onFetchTopicsStart() {
  yield takeLatest(TopicActionTypes.FETCH_TOPICS_START, setFetchTopicsStart)
};

//topics__Root__Saga
export function* topicsSagas() {
  yield all([call(onFetchTopicsStart)]);
};

