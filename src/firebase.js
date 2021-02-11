import firebase from 'firebase'


const firebaseConfig = {
    apiKey: "AIzaSyBQuCpWHTjB_dHjxs0XQpy2j56LeYiH1EE",
    authDomain: "clone-431b1.firebaseapp.com",
    projectId: "clone-431b1",
    storageBucket: "clone-431b1.appspot.com",
    messagingSenderId: "303571668280",
    appId: "1:303571668280:web:615d89a6d2e7363efc45cd"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig)
  const db = firebaseApp.firestore()
  const auth = firebase.auth()
  const provider = new firebase.auth.GoogleAuthProvider();

  export {db, auth, provider};