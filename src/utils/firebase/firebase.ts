import { initializeApp } from "firebase/app";
import {
  GoogleAuthProvider,
  signInWithPopup,
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  updateProfile,
  UserInfo,
  User,
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
import { productInterface } from "../../store/products/products.reducer";
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
export const emailPassword = async (
  email: string,
  password: string,
  displayName: string
) => {
  if (!email || !password) return;
  const result = await createUserWithEmailAndPassword(auth, email, password);
  await updateProfile(result.user, { displayName: displayName });
  return result;
};
export const loginWithEmailPassword = async (
  email: string,
  password: string
) => {
  if (!email || !password) return;
  return await signInWithEmailAndPassword(auth, email, password);
};
export const db = getFirestore();
export const createUserDoc = async (
  userAuth: UserInfo | any,
  additional?: {}
) => {
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
export const authState = (callback: (user: User | null) => void) =>
  onAuthStateChanged(auth, callback);

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
  const productsArray: productInterface[] = [];
  querySnap.forEach((doc) => {
    if (doc.exists()) {
      // The `doc.data()` method returns the document data as an object.
      const productData = doc.data();
      // Assuming each product document has a unique identifier, you can also include it in the object.
      const productObject: productInterface = {
        id: doc.id,
        ...productData,
        price: productData.price,
        thumbnail: productData.thumbnail,
        title: productData.title,
        quantity: 0,
      };
      productsArray.push(productObject);
    }
  });
  return productsArray;
};
