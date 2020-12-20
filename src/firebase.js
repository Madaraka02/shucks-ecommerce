import firebase from "firebase";

  const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyA19_G_73rvU3VBO3y_w-WNtOsOifhVbMo",
    authDomain: "shucks-589fa.firebaseapp.com",
    databaseURL: "https://shucks-589fa.firebaseio.com",
    projectId: "shucks-589fa",
    storageBucket: "shucks-589fa.appspot.com",
    messagingSenderId: "985598751892",
    appId: "1:985598751892:web:b73a1f52fa36faa1fd3081",
    measurementId: "G-KQWBC06SYV"
  
  });

  const db = firebaseApp.firestore();

  export default db;