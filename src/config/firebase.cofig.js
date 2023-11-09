// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAX3-kDgFHKU6_ta9vplRwi_Rxe1rEw89g",
  authDomain: "pro-hunters.firebaseapp.com",
  projectId: "pro-hunters",
  storageBucket: "pro-hunters.appspot.com",
  messagingSenderId: "127048206223",
  appId: "1:127048206223:web:8b6e3b3ef23686d49dadfa"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export default auth;

