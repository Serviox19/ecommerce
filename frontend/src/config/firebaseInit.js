import firebase from "firebase";
import "firebase/firestore";
import firebaseConfig from "./firebaseConfig.js";
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const storage = firebaseApp.storage();
const fieldValue = firebase.firestore.FieldValue;
const auth = firebase.auth();
const functions = firebase.functions();

export { db, storage, fieldValue, auth, functions };
