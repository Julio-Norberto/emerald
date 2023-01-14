// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from 'firebase/database'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCEpDsziC29Ou7-gK5CZuyF9ppVCcyQ1zM",
  authDomain: "personal-projects-dc579.firebaseapp.com",
  projectId: "personal-projects-dc579",
  storageBucket: "personal-projects-dc579.appspot.com",
  messagingSenderId: "358983932560",
  appId: "1:358983932560:web:08d7df3aa743e8a5ae1615",
  measurementId: "G-E9KL3H1SNC",
  databaseURL: 'https://personal-projects-dc579-default-rtdb.firebaseio.com'
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const analytics = getAnalytics(app);

export { app }
