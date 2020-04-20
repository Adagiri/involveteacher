import AuthActionTypes from "./auth.types";
const initialAuth = {
  auth_toggled: "false",
  loading: false,
  error_messages: [],
  user: null,
  set_modal: false,
  portal: false,
  signoutModal: false
};

export const auth_reducer = (state = initialAuth, action) => {
  switch (action.type) {
    case AuthActionTypes.AUTH_TOGGLE:
      return {
        ...state,
        auth_toggled: action.payload,
        error_messages: [],
        loading: false,
        token: null,
        signoutModal: false
      };

    case AuthActionTypes.LOADING:
      return {
        ...state,
        loading: action.payload
      };

      case AuthActionTypes.SIGNOUT_MODAL:
        return {
          ...state,
          signoutModal: action.payload,
          error_messages: []
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
        user: action.payload,
        token: action.payload.token,
        loading: false,
        error_messages: []
      };

    case AuthActionTypes.SET_MODAL:
      return {
        ...state,
        set_modal: action.payload,
        loading: false
      };
    case AuthActionTypes.SIGN_IN_START:
      return {
        ...state,
        
      };
    case AuthActionTypes.SIGN_IN_SUCCESS:
      return {
        ...state,
        user: action.payload,
       token: action.payload.auth.token,
       loading: false,
       error_messages: []
      };

      case AuthActionTypes.SIGN_OUT_START:
        return {
          ...state,
          error_messages: [],
          loading: true
        }

      case AuthActionTypes.SIGN_OUT_SUCCESS:
        return {
          ...state,
          user: null,
          error_messages: [],
          token: null,
          loading: false,
          signoutModal: false
        }

        case AuthActionTypes.SIGN_OUT_FAILURE:
        return {
          ...state,
          error_messages: ["Network Error"],
          loading: false
        }

    default:
      return state;
  }
};
