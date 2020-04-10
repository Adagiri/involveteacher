import { createSelector } from "reselect";

export const topics = (state) => state.topics;

export const getTopicsList = createSelector(
  [topics],
  (topics) => topics.topics
);
