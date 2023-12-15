// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyB0NLVreec9w6i4Pf-BuWhb-NEILkhKwq8",
    authDomain: "e-shop-vid-ff956.firebaseapp.com",
    projectId: "e-shop-vid-ff956",
    storageBucket: "e-shop-vid-ff956.appspot.com",
    messagingSenderId: "14490378611",
    appId: "1:14490378611:web:d51cd09cbe02021b856506"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

export default firebaseApp