import firebase from 'firebase/app'
import 'firebase/storage'

var firebaseConfig = {
    apiKey: "AIzaSyBBuf6aU_X7IeCuVw8CFic70HzQCfPQXX8",
    authDomain: "sheslaughingagain.firebaseapp.com",
    databaseURL: "https://sheslaughingagain.firebaseio.com",
    projectId: "sheslaughingagain",
    storageBucket: "sheslaughingagain.appspot.com",
    messagingSenderId: "239912740370",
    appId: "1:239912740370:web:7822a3d57b76f4a35c5acb",
    measurementId: "G-LWV2KYK7XG"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const storage = firebase.storage();
  //refrences
  const storageRef = storage.ref()
  const imagesRef = storageRef.child('Images');
  const songsRef = storageRef.child('songs');
  const videoRef = storageRef.child('video/0 (1).mp4');


  export {storage,imagesRef,songsRef,videoRef,firebase as default}