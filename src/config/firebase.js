// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyA-Op-lfhZqbBj0k_xYRrvF4qiPYT_npr0',
  authDomain: 'simple-oauth-f.firebaseapp.com',
  projectId: 'simple-oauth-f',
  storageBucket: 'simple-oauth-f.appspot.com',
  messagingSenderId: '1021184492745',
  appId: '1:1021184492745:web:05666ce36684055c653918',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
