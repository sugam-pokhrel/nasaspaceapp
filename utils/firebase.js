// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAA_SIbv3rVy6ox1bHIdc-0aUkzGUiiZH4",
  authDomain: "mywebpage-e428b.firebaseapp.com",
  projectId: "mywebpage-e428b",
  storageBucket: "mywebpage-e428b.appspot.com",
  messagingSenderId: "949414412413",
  appId: "1:949414412413:web:8ceb9873ed0e5a6bddb114",
  measurementId: "G-ZBCBZJHRRW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);