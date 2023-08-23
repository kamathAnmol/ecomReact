import { createSelector } from "reselect";
import { rootInterface } from "../root-reducer";

const userState = (state: rootInterface) => state.user.currentUser;

export const selectCurrentUser = createSelector(
  [userState],
  (currentUser) => currentUser
);
