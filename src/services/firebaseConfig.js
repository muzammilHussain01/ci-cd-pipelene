// Import the function
// ons you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCrcizxWNW5TO0ZTiuQOpfnzxq7MY_nGRE",
    authDomain: "muzammil-test-01.firebaseapp.com",
    projectId: "muzammil-test-01",
    storageBucket: "muzammil-test-01.firebasestorage.app",
    messagingSenderId: "922267625113",
    appId: "1:922267625113:web:44c994365763154a863a08",
    measurementId: "G-34LFS3GZ9P"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);