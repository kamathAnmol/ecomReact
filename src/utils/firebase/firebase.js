import { initializeApp } from "firebase/app";
import {
  GoogleAuthProvider,
  signInWithPopup,
  signInWithRedirect,
  getAuth,
} from "firebase/auth";
import { doc, getDoc, setDoc, getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCp3thBwYQtdIWIMYSoRbZ45FUVl6FYUUI",

  authDomain: "react-ecommerce-c9f76.firebaseapp.com",

  projectId: "react-ecommerce-c9f76",

  storageBucket: "react-ecommerce-c9f76.appspot.com",

  messagingSenderId: "816503196387",

  appId: "1:816503196387:web:1245754cf4869842a893d6",
};

const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  propmt: "select_account",
});

export const auth = getAuth();
export const popup = () => signInWithPopup(auth, provider);
export const db = getFirestore();
export const createUserDoc = async (userAuth) => {
  const userDocRef = doc(db, "user", userAuth.uid);
  const userSnap = await getDoc(userDocRef);
  if (!userSnap.exists()) {
    const { displayName, email } = userAuth;
    const date = new Date();
    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        date,
      });
    } catch (error) {
      console.log(error);
    }
  }
  return userDocRef;
};
