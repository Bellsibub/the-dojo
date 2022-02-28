import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/storage'

const firebaseConfig = {
  apiKey: 'AIzaSyBvVPF4D6hiNsM_9eMRjPOT4fZU_gDXgFo',
  authDomain: 'dojosite-68d83.firebaseapp.com',
  projectId: 'dojosite-68d83',
  storageBucket: 'dojosite-68d83.appspot.com',
  messagingSenderId: '28935596470',
  appId: '1:28935596470:web:697e6051fd23780f8b7917',
};

// init firebase
firebase.initializeApp(firebaseConfig);

// init services
const db = firebase.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

// timestamp
const timestamp = firebase.firestore.Timestamp;

export { db, auth, storage, timestamp };
