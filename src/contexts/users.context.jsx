import { createContext, useEffect, useReducer } from "react";
import {
  authState,
  createUserDoc,
  signOutUser,
} from "../utils/firebase/firebase";
import { CreateAction } from "../utils/reducers/reducer.util";
export const UserContext = createContext({
  currentUser: null,
  SetCurrentUser: () => null,
});

export const userReducerTypes = {
  SET_CURRENT_USER: `SET_CURRENT_USER`,
};

const userReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case userReducerTypes.SET_CURRENT_USER:
      return {
        currentUser: payload,
      };
    default:
      throw new Error("wrong type in user reducer");
  }
};
const initialState = {
  currentUser: null,
};
export const UserProvider = ({ children }) => {
  const [{ currentUser }, dispatch] = useReducer(userReducer, initialState);
  const setCurrentUser = (user) => {
    dispatch(CreateAction(userReducerTypes.SET_CURRENT_USER, user));
  };
  const value = { currentUser, setCurrentUser };
  useEffect(() => {
    signOutUser();
    const unsub = authState((user) => {
      if (user) {
        createUserDoc(user);
      }
      setCurrentUser(user);
    });
    return unsub;
  }, []);
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
