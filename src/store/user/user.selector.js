import { createSelector } from "reselect";

const userState = (state) => state.user.currentUser;

export const selectCurrentUser = createSelector(
  [userState],
  (currentUser) => currentUser
);
