// Import the functions you need from the SDKs you need
import { getAnalytics } from "firebase/analytics";
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBRzJbF4JpQLsfh0x-8K-5VHwOpJkUFR3k",
    authDomain: "car-makalick.firebaseapp.com",
    projectId: "car-makalick",
    storageBucket: "car-makalick.appspot.com",
    messagingSenderId: "381763766195",
    appId: "1:381763766195:web:d329272188229f12de2dc6",
    measurementId: "G-9D13BMQ2YQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const auth = getAuth(app)
export default auth;