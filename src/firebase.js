import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
// import firebase from 'firebase/app';
import 'firebase/storage';
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyA8Ka7hcb4paa48NLAz3ZJJc4SA0ZmtPlg",
    authDomain: "hotstar-clone-30f93.firebaseapp.com",
    projectId: "hotstar-clone-30f93",
    storageBucket: "hotstar-clone-30f93.appspot.com",
    messagingSenderId: "465243646640",
    appId: "1:465243646640:web:3e48b25bf66771ac282975",
    measurementId: "G-QERQJVDH4Q"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db= firebaseApp.firestore();
  const auth= firebaseApp.auth();
  const provider = new firebase.auth.GoogleAuthProvider();
  const storage = getStorage(firebaseApp);
  // const storageRef = firebase.storage().ref();

  export {auth, provider, storage};
  export default db;