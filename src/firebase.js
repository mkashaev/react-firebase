import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'
import 'firebase/storage'


var config = {
  apiKey: "AIzaSyAKijIwU_tP7vHuiyWCqUwkZ77hQGq5stg",
  authDomain: "react-firebase-new-messenger.firebaseapp.com",
  databaseURL: "https://react-firebase-new-messenger.firebaseio.com",
  projectId: "react-firebase-new-messenger",
  storageBucket: "react-firebase-new-messenger.appspot.com",
  messagingSenderId: "437615893929"
};
firebase.initializeApp(config)

export default firebase