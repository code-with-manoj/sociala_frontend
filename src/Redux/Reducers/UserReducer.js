import { PROFILE, PROFILE_FAIL, PROFILE_SUCCESS } from "../Actions/ActionTypes";
let initialState = {
  loading: false,
  profile: {},
};

const UserReducer = (state = initialState, actions) => {
  switch (actions.type) {
    // PROFILE
    case PROFILE:
      return { ...state, loading: true };

    case PROFILE_SUCCESS:
      return { ...state, profile: actions.payload, loading: false };

    case PROFILE_FAIL:
      return { ...state, loading: false };

    default:
      return state;
  }
};

export default UserReducer;
