import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDlA7P5OSWEsisyZN_1jP0cthH9Xk8lID8",
  authDomain: "final-project-cae71.firebaseapp.com",
  projectId: "final-project-cae71",
  storageBucket: "final-project-cae71.appspot.com",
  messagingSenderId: "416549838334",
  appId: "1:416549838334:web:039bcf23ae3a1ca7b934af",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();

export { app, auth };
