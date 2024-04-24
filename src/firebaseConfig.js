import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
export const firebaseConfig = {
  apiKey: "AIzaSyCA9hR4Oo25IVE5yCsp6j-NbVH8W85NVOw",
  authDomain: "login-86660.firebaseapp.com",
  projectId: "login-86660",
  storageBucket: "login-86660.appspot.com",
  messagingSenderId: "237210672222",
  appId: "1:237210672222:web:e28bc7ab9b45791d1628cf",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
