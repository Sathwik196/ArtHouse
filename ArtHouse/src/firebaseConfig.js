// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBtledgM3xNMOiwL-M-ZkURH7nKsTUF5sk",
    authDomain: "arthouse-bef11.firebaseapp.com",
    projectId: "arthouse-bef11",
    storageBucket: "arthouse-bef11.appspot.com",
    messagingSenderId: "612703844359",
    appId: "1:612703844359:web:61a1398bf081c3499152a2",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);

export { auth, app, firestore };
