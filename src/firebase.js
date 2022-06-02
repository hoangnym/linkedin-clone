import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBeJbgUqnJwstFoHAF0Qs9u_mw0AaDmw0U",
    authDomain: "linkedin-clone-7c5a7.firebaseapp.com",
    projectId: "linkedin-clone-7c5a7",
    storageBucket: "linkedin-clone-7c5a7.appspot.com",
    messagingSenderId: "430805057758",
    appId: "1:430805057758:web:e78d38c169c028f582c24f"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };