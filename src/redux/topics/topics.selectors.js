import { createSelector } from "reselect";

export const topics = (state) => state.topics;

export const getTopicsList = createSelector(
  [topics],
  (topics) => topics.topics
);

export const selectLessons = topicName =>
  createSelector(
    [getTopicsList],
    topics => topics.filter(topic => topic.topic_name === topicName)
  );
