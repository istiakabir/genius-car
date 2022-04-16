// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCuCaDjrwwtcARJRQc5ZQUeTlmD3FkQxiI",
  authDomain: "genius-car-cd895.firebaseapp.com",
  projectId: "genius-car-cd895",
  storageBucket: "genius-car-cd895.appspot.com",
  messagingSenderId: "984272914036",
  appId: "1:984272914036:web:4379f7cd1685bdf531f321"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

export default auth;

