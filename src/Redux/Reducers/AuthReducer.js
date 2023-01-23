import {
  FORGOT,
  FORGOT_FAIL,
  FORGOT_SUCCESS,
  LOGIN,
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  REGISTER,
  REGISTER_FAIL,
  REGISTER_SUCCESS,
  RESET,
  RESET_FAIL,
  RESET_SUCCESS,
} from "../Actions/ActionTypes";
let initialState = {
  loading: false,
};

const AuthReducer = (state = initialState, actions) => {
  switch (actions.type) {
    // REGISTER
    case REGISTER:
      return { ...state, loading: true };

    case REGISTER_SUCCESS:
      return { ...state, loading: false };

    case REGISTER_FAIL:
      return { ...state, loading: false };

    // LOGIN
    case LOGIN:
      return { ...state, loading: true };

    case LOGIN_SUCCESS:
      return { ...state, loading: false };

    case LOGIN_FAIL:
      return { ...state, loading: false };

    // FORGOT
    case FORGOT:
      return { ...state, loading: true };

    case FORGOT_SUCCESS:
      return { ...state, loading: false };

    case FORGOT_FAIL:
      return { ...state, loading: false };

    // RESET
    case RESET:
      return { ...state, loading: true };

    case RESET_SUCCESS:
      return { ...state, loading: false };

    case RESET_FAIL:
      return { ...state, loading: false };

    default:
      return state;
  }
};

export default AuthReducer;
