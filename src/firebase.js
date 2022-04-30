import { initializeApp } from 'firebase/app';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { getFirestore, collection, getDoc, getDocs } from 'firebase/firestore'

//const from the firebase ac every account has a different one so don't copy this thing if you want to  use it in future in some different project 

const firebaseApp =  initializeApp({
    apiKey: "AIzaSyBcKkkIxAEh-XiHCd9g4D1VHxVNSY2XY0E",
  authDomain: "xperience-c90a9.firebaseapp.com",
  projectId: "xperience-c90a9",
  storageBucket: "xperience-c90a9.appspot.com",
  messagingSenderId: "15711810074",
  appId: "1:15711810074:web:a2d4c85e7d2606951497a3",
  measurementId: "G-5J2P16TV0P"
})

const auth =  getAuth(firebaseApp);
const db = getFirestore(firebaseApp);
db.collection('todos').getDocs();
const todosCol = collection(db, 'todos');
const snapshot = await getDocs

// Detect authentication State

onAuthStateChanged(auth, user => {
    if(user !=  null) {
        console.log('Logged in!');
    } else {
        console.log('No user')
    }
})