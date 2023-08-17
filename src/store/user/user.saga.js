import { takeLatest, call, all, put } from "redux-saga/effects";

import { userReducerTypes } from "./user.types";

import {
  signinSuccess,
  signInFail,
  signupFail,
  signOutFail,
  signOutSuccess,
  signupSuccess,
} from "./user.action";

import {
  getCurrentUser,
  createUserDoc,
  popup,
  loginWithEmailPassword,
  emailPassword,
} from "../../utils/firebase/firebase";
import { signOutUser } from "../../utils/firebase/firebase";

export function* getSnapFromAuth(userAuth, additionalProps) {
  try {
    const userSnap = yield call(createUserDoc, userAuth, additionalProps);
    yield put(signinSuccess({ id: userSnap.id, ...userSnap.data() }));
  } catch (error) {
    yield put(signInFail(error));
  }
}

export function* isUserAuthentic() {
  try {
    const userAuth = yield call(getCurrentUser);
    if (!userAuth) return;
    yield call(getSnapFromAuth, userAuth);
  } catch (error) {
    yield put(signInFail(error));
  }
}

export function* signInWithGoogle() {
  try {
    const { user } = yield call(popup);
    yield call(getSnapFromAuth, user);
  } catch (error) {
    yield put(signInFail(error));
  }
}

export function* signInWithEmail({ payload: { email, password } }) {
  console.log("called");
  try {
    const { user } = yield call(loginWithEmailPassword, email, password);
    yield call(getSnapFromAuth, user);
  } catch (error) {
    yield put(signInFail(error));
  }
}

export function* signupAfter({ payload: { user, additionalProps } }) {
  yield call(getSnapFromAuth, user, additionalProps);
}

export function* signup({ payload: { email, password, displayName } }) {
  try {
    const { user } = yield call(emailPassword, email, password);
    yield put(signupSuccess(user, { displayName }));
  } catch (error) {
    yield put(signupFail(error));
  }
}
export function* signoutFunction() {
  try {
    yield call(signOutUser);
    yield put(signOutSuccess());
  } catch (error) {
    yield put(signOutFail(error));
  }
}

export function* onEmailSignInStart() {
  yield takeLatest(userReducerTypes.EMAIL_SIGNIN_START, signInWithEmail);
}

export function* onGooglSigninStart() {
  yield takeLatest(userReducerTypes.GOOGLE_SIGNIN_START, signInWithGoogle);
}

export function* onCheckUserSession() {
  yield takeLatest(userReducerTypes.CHECK_USER_SESSION, isUserAuthentic);
}

export function* onSignupStart() {
  yield takeLatest(userReducerTypes.SIGNUP_START, signup);
}
export function* onSignupSuccess() {
  yield takeLatest(userReducerTypes.SIGNUP_SUCCESS, signupAfter);
}

export function* onSignOut() {
  yield takeLatest(userReducerTypes.SIGNOUT_START, signoutFunction);
}

export function* userSaga() {
  yield all([
    call(onCheckUserSession),
    call(onGooglSigninStart),
    call(onEmailSignInStart),
    call(onSignupStart),
    call(onSignupSuccess),
    call(onSignOut),
  ]);
}
