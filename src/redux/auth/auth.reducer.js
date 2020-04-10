import AuthActionTypes from "./auth.types";
const initialAuth = {
  auth_toggled: "false",
  loading: false,
  error_messages: [],
  user: null,
  set_modal: false,
  portal: false
};

export const auth_reducer = (state = initialAuth, action) => {
  switch (action.type) {
    case AuthActionTypes.AUTH_TOGGLE:
      return {
        ...state,
        auth_toggled: action.payload,
        error_messages: [],
        loading: false,
      };

    case AuthActionTypes.LOADING:
      return {
        ...state,
        loading: action.payload
      };

    case AuthActionTypes.SET_ERROR:
      return {
        ...state,
        error_messages: action.payload
      };

      case AuthActionTypes.PORTAL:
      return {
        ...state,
        portal: action.payload
      };

    case AuthActionTypes.SIGN_UP_START:
      return {
        ...state
      };

    case AuthActionTypes.SIGN_UP_SUCCESS:
      return {
        ...state,
        user: action.payload
      };

    case AuthActionTypes.SET_MODAL:
      return {
        ...state,
        set_modal: action.payload
      };
    case AuthActionTypes.SIGN_IN_START:
      return {
        ...state,
        
      };
    case AuthActionTypes.SIGN_IN_SUCCESS:
      return {
        ...state,
        user: action.payload,
       
      };

      case AuthActionTypes.SIGN_OUT_START:
        return {
          ...state
        }

      case AuthActionTypes.SIGN_OUT_SUCCESS:
        return {
          ...state,
          user: null,
          signedup_user: null
        }

    default:
      return state;
  }
};
