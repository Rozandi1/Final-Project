// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyANLlue6AqdYwE-ZS14h6vRRkxm86VMEDk",
  authDomain: "visitsumbawaisland.firebaseapp.com",
  projectId: "visitsumbawaisland",
  storageBucket: "visitsumbawaisland.appspot.com",
  messagingSenderId: "165043267920",
  appId: "1:165043267920:web:8f144f8c3f78e34869a455",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
