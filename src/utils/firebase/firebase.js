import { initializeApp } from "firebase/app";
import {
  GoogleAuthProvider,
  signInWithPopup,
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import {
  doc,
  getDoc,
  setDoc,
  getFirestore,
  collection,
  writeBatch,
  query,
  getDocs,
} from "firebase/firestore";
import data from "../../assets/db.json";
const firebaseConfig = {
  apiKey: "AIzaSyCp3thBwYQtdIWIMYSoRbZ45FUVl6FYUUI",

  authDomain: "react-ecommerce-c9f76.firebaseapp.com",

  projectId: "react-ecommerce-c9f76",

  storageBucket: "react-ecommerce-c9f76.appspot.com",

  messagingSenderId: "816503196387",

  appId: "1:816503196387:web:1245754cf4869842a893d6",
};
// eslint-disable-next-line
const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  propmt: "select_account",
});

export const auth = getAuth();
export const popup = () => signInWithPopup(auth, provider);
export const emailPassword = async (email, password) => {
  if (!email || !password) return;
  return await createUserWithEmailAndPassword(auth, email, password);
};
export const loginWithEmailPassword = async (email, password) => {
  if (!email || !password) return;
  return await signInWithEmailAndPassword(auth, email, password);
};
export const db = getFirestore();
export const createUserDoc = async (userAuth, additional) => {
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
        ...additional,
      });
    } catch (error) {
      console.log(error);
    }
  }
  return userDocRef;
};
export const signOutUser = async () => await signOut(auth);
export const authState = (callback) => onAuthStateChanged(auth, callback);

export const addToDb = async () => {
  const collectionRef = collection(db, "products");
  const batch = writeBatch(db);
  data.products.forEach((product) => {
    const docRef = doc(collectionRef, `${product.id}_${product.category}`);
    batch.set(docRef, product);
  });
  await batch.commit();
  console.log("added to db");
};

export const getProducts = async () => {
  const collectionRef = collection(db, "products");
  const q = query(collectionRef);
  const querySnap = await getDocs(q);
  const productsArray = [];
  querySnap.forEach((doc) => {
    if (doc.exists()) {
      // The `doc.data()` method returns the document data as an object.
      const productData = doc.data();
      // Assuming each product document has a unique identifier, you can also include it in the object.
      const productObject = { id: doc.id, ...productData };
      productsArray.push(productObject);
    }
  });
  return productsArray;
};
