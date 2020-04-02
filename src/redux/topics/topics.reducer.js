import TopicActionTypes from "./topics.types";
const initialAuth = {
 topics: [],
 errors: null
};

export const topics_reducer = (state = initialAuth, action) => {
  switch (action.type) {
    case TopicActionTypes.FETCH_TOPICS_START:
      return {
        ...state,
        errors: null
      };

      case TopicActionTypes.FETCH_TOPICS_SUCCESS:
        return {
          ...state,
          errors: null,
          topics: action.payload
        };

        case TopicActionTypes.FETCH_TOPICS_FAILURE:
        return {
          ...state,
          errors: action.payload
        };

    default:
      return state;
  }
};
