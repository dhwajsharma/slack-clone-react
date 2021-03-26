import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyBY7KMjeOdgyQHIcCRASnMlkH0f6CcQxxU",
    authDomain: "slack-clone-e352f.firebaseapp.com",
    projectId: "slack-clone-e352f",
    storageBucket: "slack-clone-e352f.appspot.com",
    messagingSenderId: "776865532902",
    appId: "1:776865532902:web:8564a2523113f209bf6427"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider, db }