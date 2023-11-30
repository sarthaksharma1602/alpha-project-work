import { getApp, getApps, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDvYOEv-vlrs7jojYxHLVzGF_-yQzfKn8g",
    authDomain: "giphy-project-b7f76.firebaseapp.com",
    projectId: "giphy-project-b7f76",
    storageBucket: "giphy-project-b7f76.appspot.com",
    messagingSenderId: "154623858898",
    appId: "1:154623858898:web:e3168d4013cffcbda7350b"
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore();
const auth = getAuth();

export { app, db, auth };