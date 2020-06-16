import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCNDommGuj0FmAPgp_3WUjcQKNh6MZyed8",
    authDomain: "crown-db-5af1b.firebaseapp.com",
    databaseURL: "https://crown-db-5af1b.firebaseio.com",
    projectId: "crown-db-5af1b",
    storageBucket: "crown-db-5af1b.appspot.com",
    messagingSenderId: "639942098765",
    appId: "1:639942098765:web:887078aa827ad872ef0104",
    measurementId: "G-YPPC5S39QW"
  };

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;