import { createSelector } from "reselect";


export const topics = state => state.topics;

 export const getTopics = createSelector(
    [topics],
    (topics) => auth.topics
);
