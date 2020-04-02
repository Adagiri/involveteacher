import TopicActionTypes from "./topics.types";

export const fetchTopicsStart = (payload) => ({
    type: TopicActionTypes.FETCH_TOPICS_START,
    payload
});

export const fetchTopicsSuccess  = (payload) => ({
    type: TopicActionTypes.FETCH_TOPICS_SUCCESS,
    payload
});

export const fetchTopicsFailure = (payload) => ({
    type: TopicActionTypes.FETCH_TOPICS_FAILURE,
    payload
});

