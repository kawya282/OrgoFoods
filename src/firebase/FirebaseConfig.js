// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAmfXtlC8KmyHapMyIYcKUxM-MM8abBpw0",
  authDomain: "orgofoods-c442a.firebaseapp.com",
  projectId: "orgofoods-c442a",
  storageBucket: "orgofoods-c442a.appspot.com",
  messagingSenderId: "584986096448",
  appId: "1:584986096448:web:425e11c40a4571914f40a5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const orgoDB = getFirestore(app);
const auth = getAuth(app)
export {orgoDB,auth } ;