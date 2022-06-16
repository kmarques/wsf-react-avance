// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBitcDmyYXB86Bg7ml2sOKHTcC5Adn5SyY",
  authDomain: "wsf-react.firebaseapp.com",
  projectId: "wsf-react",
  storageBucket: "wsf-react.appspot.com",
  messagingSenderId: "624968010050",
  appId: "1:624968010050:web:1b7f3a068e5ce85fcb60db",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

export { app, auth };
