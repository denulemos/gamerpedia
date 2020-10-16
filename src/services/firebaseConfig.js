import * as firebase from "firebase";
import "@firebase/auth";
import "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA6cU-Rp6N2l01oYlGl72YwQt1dpN61LCc",
  authDomain: "gamerpedia-49246.firebaseapp.com",
  databaseURL: "https://gamerpedia-49246.firebaseio.com",
  projectId: "gamerpedia-49246",
  storageBucket: "gamerpedia-49246.appspot.com",
  messagingSenderId: "988999698266",
  appId: "1:988999698266:web:62fcaa21b5513662df1563",
  measurementId: "G-451P5J27YV"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export {firebase};
