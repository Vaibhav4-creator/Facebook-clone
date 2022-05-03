import firebase from "firebase"
import "firebase/storage"

const firebaseConfig = {
    apiKey: "AIzaSyA7SkFspTZST3YtVCjeSy3sNE5OsoY5M4U",
    authDomain: "facebook-2-6cb08.firebaseapp.com",
    projectId: "facebook-2-6cb08",
    storageBucket: "facebook-2-6cb08.appspot.com",
    messagingSenderId: "227991536476",
    appId: "1:227991536476:web:f4db1bac0775f14cb6f799"
  };

  const app = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app()

  const db = app.firestore()
  const storage = firebase.storage()

  export { db, storage }