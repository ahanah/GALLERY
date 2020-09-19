import * as firebase from "firebase/app";
import "firebase/storage";
import "firebase/firestore";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyAhVzZ8JK6jqBtqkIdJx6HkIiz63PItcPM",
  authDomain: "firegram-98f24.firebaseapp.com",
  databaseURL: "https://firegram-98f24.firebaseio.com",
  projectId: "firegram-98f24",
  storageBucket: "firegram-98f24.appspot.com",
  messagingSenderId: "288945106525",
  appId: "1:288945106525:web:246b25370dd29783c1a7b4",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();

const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };
