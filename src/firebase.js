import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = firebase.initializeApp({
  apiKey: "AIzaSyCQ6qoHtn7LOQdnlJ8dJCuukZ_cuFWMWgY",
  authDomain: "todoist-clone-9859c.firebaseapp.com",
  databaseURL: "https://todoist-clone-9859c.firebaseio.com",
  projectId: "todoist-clone-9859c",
  storageBucket: "todoist-clone-9859c.appspot.com",
  messagingSenderId: "209176575669",
  appId: "1:209176575669:web:5321b53e7dbac9bb4508fc",
});

export { firebaseConfig as firebase };
