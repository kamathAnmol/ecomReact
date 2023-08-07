import { CreateAction } from "../../utils/reducers/reducer.util";
import { userReducerTypes } from "./user.types";
export const setCurrentUser = (user) => {
  return CreateAction(userReducerTypes.SET_CURRENT_USER, user);
};
