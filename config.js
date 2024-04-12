import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyB-opLoH3_ET4tNDeDLqkN0OUuhbtjCa24",
  authDomain: "quiz-68953.firebaseapp.com",
  projectId: "quiz-68953",
  storageBucket: "quiz-68953.appspot.com",
  messagingSenderId: "1067005762665",
  appId: "1:1067005762665:web:c2889f2266267c80a416f8",
  measurementId: "G-L2WXVKP1HT"
};

if (!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
}

export { firebase }