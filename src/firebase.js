import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB2S5A0Lu5Svd9NI95D7mSZl9glc-4pVPQ",
  authDomain: "linkedin-clone-a520d.firebaseapp.com",
  projectId: "linkedin-clone-a520d",
  storageBucket: "linkedin-clone-a520d.appspot.com",
  messagingSenderId: "567066372053",
  appId: "1:567066372053:web:1bc761d30b436ce8fd7f5c",
  measurementId: "G-9QK6DKYBNY"
};

const firebaseApp = firebase.initializeApp( firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();


export { db, auth };