import firebase from "firebase/app";
import "firebase/firestore";
const API_KEY = process.env.REACT_APP_API_KEY;
const AuthDom = process.env.REACT_APP_AUTH_DOM;
const DataBaseUrl = process.env.REACT_APP_DATABASE_URL;
const ProjectId = process.env.REACT_APP_PROJECT_ID;
const Stroage = process.env.REACT_APP_STORGE;
const SenderId = process.env.REACT_APP_SENDER_ID;
const AppId = process.env.REACT_APP_APP_ID;
const MeasureId = process.env.REACT_APP_MEASURE_ID;

const firebaseConfig = firebase.initializeApp({
  apiKey: API_KEY,
  authDomain: AuthDom,
  databaseURL: DataBaseUrl,
  projectId: ProjectId,
  storageBucket: Stroage,
  messagingSenderId: SenderId,
  appId: AppId,
  measurementId: MeasureId,
});

export { firebaseConfig as firebase };
