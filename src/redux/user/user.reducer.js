import  UserActionTypes from "./user.types";
const initialUser = {
  update_info_loading: false,
   update_info_errors: [],
};

export const user_reducer = (state = initialUser, action) => {
  switch (action.type) {

      case UserActionTypes.UPDATE_USER_PROFILE_START:
      return {
        ...state,
        update_info_loading: true,
        update_info_errors: []
      };

      case UserActionTypes.UPDATE_USER_PROFILE_SUCCESS:
        return {
          ...state,
          update_info_loading: false,
          update_info_errors: []
        };

        case UserActionTypes.UPDATE_USER_PROFILE_FAILURE:
        return {
          ...state,
          update_info_loading: false,
          update_info_errors: [{message: action.payload}]
        };

        case UserActionTypes.SET_LOADING:
          return {
            ...state,
            update_info_loading: action.payload,
            update_info_errors: []
          };
    
          case UserActionTypes.SET_ERROR:
            return {
              ...state,
              update_info_loading: false,
              update_info_errors: [{message: action.payload}]
            };
  
    default:
      return state;
  }
};
