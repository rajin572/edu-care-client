// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCa6vHa5nIGCt5Lwak6p6AjwAqFXlB8PoE",
  authDomain: "edu-care-client.firebaseapp.com",
  projectId: "edu-care-client",
  storageBucket: "edu-care-client.appspot.com",
  messagingSenderId: "520189616027",
  appId: "1:520189616027:web:0ad4747f7e43884f534b3e"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
export default firebaseApp