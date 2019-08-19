import * as firebase from "firebase";
import config from "./keys";

// const config = {
//   apiKey: "AIzaSyC-DpAiKwifoqTj9f_QfFrPiJVMgJV-ZVk",
//   authDomain: "prop-list.firebaseapp.com",
//   databaseURL: "https://prop-list.firebaseio.com",
//   projectId: "prop-list",
//   storageBucket: "gs://prop-list.appspot.com/",
//   messagingSenderId: "48554466107",
//   appId: "1:48554466107:web:b9469cb59e9f14fb"
// };

firebase.initializeApp(config);

const database = firebase.database();
const storage = firebase.storage();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { firebase, googleAuthProvider, database as default, storage };
