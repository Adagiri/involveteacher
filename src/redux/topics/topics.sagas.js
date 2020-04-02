import { takeLatest, all, call, put } from "redux-saga/effects";
import TopicActionTypes from "./topics.types";
import { fetchTopics } from "./topics.utils";
import {  fetchTopicsFailure, fetchTopicsSuccess } from "./topics.actions";

export function* setFetchTopicsStart({payload}) {
 try{
const data = yield fetchTopics(payload);
yield put(fetchTopicsSuccess(data));
 } catch(err) {
  yield put(fetchTopicsFailure(err));
  console.log(err);
 }
};

export function* onFetchTopicsStart() {
  yield takeLatest(TopicActionTypes.FETCH_TOPICS_START, setFetchTopicsStart)
};

//topics__Root__Saga
export function* topicsSagas() {
  yield all([call(onFetchTopicsStart)]);
};

