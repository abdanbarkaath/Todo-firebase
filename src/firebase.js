// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBXAZqvkJDfmbJhhRKZ0Jo9LAdpEr2fWT8",
  authDomain: "todo-app-b0412.firebaseapp.com",
  databaseURL: "https://todo-app-b0412-default-rtdb.firebaseio.com",
  projectId: "todo-app-b0412",
  storageBucket: "todo-app-b0412.appspot.com",
  messagingSenderId: "962210965967",
  appId: "1:962210965967:web:74f7cc83005b28bedbcaba",
  measurementId: "G-HNHQJ9SWKM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
export const auth = getAuth();
