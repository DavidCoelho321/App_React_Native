import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBfwsUb6DPklKbBx3rPZo7paxXnBIAfpM0",
    authDomain: "app-react-a3187.firebaseapp.com",
    projectId: "app-react-a3187",
    storageBucket: "app-react-a3187.appspot.com",
    messagingSenderId: "257619889853",
    appId: "1:257619889853:web:e86b6332af50aebfe8b1d4"
  };

  const app = initializeApp(firebaseConfig);
  export const auth = getAuth (app);