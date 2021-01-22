import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import * as firebaseui from "firebaseui";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
  measurementId: process.env.REACT_APP_MEASUREMENT_ID,
};




firebase.initializeApp(firebaseConfig);

export const ui = new firebaseui.auth.AuthUI(firebase.auth());
export const firebaseInstance = firebase;
export const db = firebase.firestore();
export const authService = firebase.auth();


export const dbService = firebase.firestore();