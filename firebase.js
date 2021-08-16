import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyCr3N3AJdLd06WZfU489K1QLkcG1kfyvfo",
    authDomain: "whatsapp-2-2963a.firebaseapp.com",
    projectId: "whatsapp-2-2963a",
    storageBucket: "whatsapp-2-2963a.appspot.com",
    messagingSenderId: "972395611985",
    appId: "1:972395611985:web:c0d77273409e24c2fc7570"
  };

const app = !firebase.apps.length ? 
firebase.initializeApp(firebaseConfig)
: firebase.app();

const db = app.firestore();
const auth = app.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export {db, auth, provider};