import { userReducerTypes } from "./user.types";

const initialState = {
  currentUser: null,
};

export const userReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case userReducerTypes.SET_CURRENT_USER:
      return {
        currentUser: payload,
      };
    default:
      return state;
  }
};
