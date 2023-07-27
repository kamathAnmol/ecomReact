import { createContext, useState, useEffect } from "react";
import {
  authState,
  createUserDoc,
  signOutUser,
} from "../utils/firebase/firebase";
export const UserContext = createContext({
  currentUser: null,
  SetCurrentUser: () => null,
});
export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
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
