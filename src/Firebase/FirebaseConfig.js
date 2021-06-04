import firebase from 'firebase/app'
import  'firebase/storage'
import  'firebase/firestore'



const firebaseConfig = {
    apiKey: "AIzaSyDn1QRN-35KyIScNEQ3sMD0Z9WApq2y66w",
    authDomain: "fire-goo-55f96.firebaseapp.com",
    projectId: "fire-goo-55f96",
    storageBucket: "fire-goo-55f96.appspot.com",
    messagingSenderId: "665649498099",
    appId: "1:665649498099:web:ab0ed1cbeeda46530d7486"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const projectStorage=firebase.storage();
  const projectFirestore=firebase.firestore();
  const timestamp=firebase.firestore.FieldValue.serverTimestamp;
  export {projectFirestore,projectStorage,timestamp};