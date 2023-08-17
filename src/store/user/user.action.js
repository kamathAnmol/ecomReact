import { CreateAction } from "../../utils/reducers/reducer.util";
import { userReducerTypes } from "./user.types";

export const setCurrentUser = (user) => {
  return CreateAction(userReducerTypes.SET_CURRENT_USER, user);
};

export const checkUserSession = () =>
  CreateAction(userReducerTypes.CHECK_USER_SESSION);

export const googleSigninStart = () =>
  CreateAction(userReducerTypes.GOOGLE_SIGNIN_START);

export const emailSigninStart = (email, password) =>
  CreateAction(userReducerTypes.EMAIL_SIGNIN_START, { email, password });

export const signinSuccess = (user) =>
  CreateAction(userReducerTypes.SIGNIN_SUCCESS, user);

export const signInFail = (error) =>
  CreateAction(userReducerTypes.SIGNIN_FAILURE, error);

export const signupStart = (email, password, displayName) =>
  CreateAction(userReducerTypes.SIGNUP_START, { email, password, displayName });

export const signupSuccess = (user, additionalProps) =>
  CreateAction(userReducerTypes.SIGNUP_SUCCESS, { user, additionalProps });

export const signupFail = (error) =>
  CreateAction(userReducerTypes.SIGNUP_FAILURE, error);

export const signOutStart = () => CreateAction(userReducerTypes.SIGNOUT_START);

export const signOutSuccess = () =>
  CreateAction(userReducerTypes.SIGNOUT_SUCCESS);

export const signOutFail = (error) =>
  CreateAction(userReducerTypes.SIGNOUT_FAILURE, error);
