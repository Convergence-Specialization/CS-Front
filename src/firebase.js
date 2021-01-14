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
export const auth = firebase.app().auth();
// export const ga = ReactGA;

// functions.useEmulator("192.168.1.37", 5001);

// const firebaseUiOption = {
//   callbacks: {
//     // Called when the user has been successfully signed in.
//     signInSuccessWithAuthResult: function (authResult, redirectUrl) {
//       if (authResult.user) {
//         handleSignedInUser(authResult.user);
//       }
//       if (authResult.additionalUserInfo) {
//         console.log("새로운 유저인가?", authResult.additionalUserInfo);
//         // document.getElementById("is-new-user").textContent = authResult
//         //   .additionalUserInfo.isNewUser
//         //   ? "New User"
//         //   : "Existing User";
//       }
//       // Do not redirect.
//       return false;
//     },
//   },
//   // Opens IDP Providers sign-in flow in a popup.
//   signInFlow: "popup",
//   signInOptions: [
//     // TODO(developer): Remove the providers you don't need for your app.
//     {
//       provider: firebase.auth.GoogleAuthProvider.PROVIDER_ID,
//       // Required to enable ID token credentials for this provider.
//       clientId: CLIENT_ID,
//     },
//     // {
//     //   provider: firebase.auth.FacebookAuthProvider.PROVIDER_ID,
//     //   scopes: ["public_profile", "email", "user_likes", "user_friends"],
//     // },
//     // firebase.auth.TwitterAuthProvider.PROVIDER_ID,
//     firebase.auth.GithubAuthProvider.PROVIDER_ID,
//     // {
//     //   provider: firebase.auth.EmailAuthProvider.PROVIDER_ID,
//     //   // Whether the display name should be displayed in Sign Up page.
//     //   requireDisplayName: true,
//     //   signInMethod: getEmailSignInMethod(),
//     // },
//     // {
//     //   provider: firebase.auth.PhoneAuthProvider.PROVIDER_ID,
//     //   recaptchaParameters: {
//     //     size: getRecaptchaMode(),
//     //   },
//     // },
//     // {
//     //   provider: "microsoft.com",
//     //   loginHintKey: "login_hint",
//     // },
//     // {
//     //   provider: "apple.com",
//     // },
//     // firebaseui.auth.AnonymousAuthProvider.PROVIDER_ID,
//   ],
//   // Terms of service url.
//   tosUrl: "https://www.google.com",
//   // Privacy policy url.
//   privacyPolicyUrl: "https://www.google.com",
//   //   credentialHelper:
//   //     CLIENT_ID && CLIENT_ID != "YOUR_OAUTH_CLIENT_ID"
//   //       ? firebaseui.auth.CredentialHelper.GOOGLE_YOLO
//   //       : firebaseui.auth.CredentialHelper.NONE,
// };
