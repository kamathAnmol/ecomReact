import { userReducerTypes } from "./user.types";

const initialState = {
  currentUser: null,
  isLoading: false,
  error: null,
};

export const userReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case userReducerTypes.SIGNIN_SUCCESS:
      return {
        ...state,
        currentUser: payload,
      };
    case userReducerTypes.SIGNOUT_SUCCESS:
      return {
        ...state,
        currentUser: null,
      };
    case userReducerTypes.SIGNIN_FAILURE:
    case userReducerTypes.SIGNUP_FAILURE:
    case userReducerTypes.SIGNOUT_FAILURE:
      return {
        ...state,
        error: payload,
      };
    default:
      return state;
  }
};
