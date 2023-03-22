import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";
import "firebase/compat/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAqSM6AWCy2BQQgCd7FSOCUTcgzj8WQd3Q",
  authDomain: "twitter-clone-c4af4.firebaseapp.com",
  projectId: "twitter-clone-c4af4",
  storageBucket: "twitter-clone-c4af4.appspot.com",
  messagingSenderId: "173472157353",
  appId: "1:173472157353:web:0364acc3633ae99e9623b8",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider, storage };

export default db;