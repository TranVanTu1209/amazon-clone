import firebase from 'firebase';
// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyC-wgj3T8eu_uq_dIs6iFBZU_nSWK2IgQk",
  authDomain: "clone-8df07.firebaseapp.com",
  databaseURL: "https://clone-8df07.firebaseio.com",
  projectId: "clone-8df07",
  storageBucket: "clone-8df07.appspot.com",
  messagingSenderId: "759524714907",
  appId: "1:759524714907:web:710c98cf458cd940a7993e",
  measurementId: "G-K6LWRJTYZY"
};
// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };