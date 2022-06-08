// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD6wjvDKnLaD06y2iosAGWscD5oJNLz4Fo",
  authDomain: "hino-9ac1a.firebaseapp.com",
  projectId: "hino-9ac1a",
  storageBucket: "hino-9ac1a.appspot.com",
  messagingSenderId: "453319165807",
  appId: "1:453319165807:web:fbdf40942d1cf3556e0a9a",
  measurementId: "G-LKQZ9DPWD6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

 const db = getFirestore(app);
  export default db
