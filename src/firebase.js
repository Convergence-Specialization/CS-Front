import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

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

export const firebaseInstance = firebase;
export const db = firebase.firestore();
export const authService = firebase.auth();
export const dbInstance = firebase.firestore;
export const authInstance = firebase.auth;

export const dbService = firebase.firestore();
export const firestoreInstance = firebase.firestore;
