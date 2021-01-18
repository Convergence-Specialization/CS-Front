import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import * as firebaseui from "firebaseui";

const firebaseConfig = {
  apiKey: "AIzaSyB4rSyilZm4TRYSyGIyR-RsUrkQSMTuISw",
  authDomain: "convergence-2021.firebaseapp.com",
  projectId: "convergence-2021",
  storageBucket: "convergence-2021.appspot.com",
  messagingSenderId: "509227287726",
  appId: "1:509227287726:web:91a9499949101e8ee2993f",
  measurementId: "G-9B1G516JQ6",
};

firebase.initializeApp(firebaseConfig);

export const ui = new firebaseui.auth.AuthUI(firebase.auth());
export const firebaseInstance = firebase;
export const db = firebase.firestore();
export const authService = firebase.auth();
