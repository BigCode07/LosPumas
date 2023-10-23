// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDMgMmLJ3LMTHxqd61VKgZeTQitB7yJFYw",
  authDomain: "productospumas-c1fd1.firebaseapp.com",
  projectId: "productospumas-c1fd1",
  storageBucket: "productospumas-c1fd1.appspot.com",
  messagingSenderId: "974425726604",
  appId: "1:974425726604:web:f5578e63ee79903b7565a9",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
