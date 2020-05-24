// import * as firebase from 'firebase'
import firebase from '@firebase/app';

{/* <script src="https://www.gstatic.com/firebasejs/6.1.1/firebase-app.js"></script>
<script src="https://www.gstatic.com/firebasejs/6.1.1/firebase-auth.js"></script>
<script src="https://www.gstatic.com/firebasejs/6.1.1/firebase-database.js"></script> */}

  // Your web app's Firebase configuration
  const config = {
    apiKey: "AIzaSyBk7kXZPUBUqLRyIULqj1NgWgO_n0n6OkY",
    authDomain: "weather-app-a07f3.firebaseapp.com",
    databaseURL: "https://weather-app-a07f3.firebaseio.com",
    projectId: "weather-app-a07f3",
    storageBucket: "weather-app-a07f3.appspot.com",
    messagingSenderId: "480436789041",
    appId: "1:480436789041:web:97a41fed4cc43ef53a1a10",
    measurementId: "G-GCRLEDWDZW"
  };

  
  function fire(props) {
    // Initialize Firebase  
    const Fire = firebase.initializeApp(config);
    return Fire
  }
  export default fire;

//////////////////////////////////////////////////////////

// import firebase from 'firebase';

// const config = {
//   apiKey: "AIzaSyBk7kXZPUBUqLRyIULqj1NgWgO_n0n6OkY",
//   authDomain: "weather-app-a07f3.firebaseapp.com",
//   databaseURL: "https://weather-app-a07f3.firebaseio.com",
//   projectId: "weather-app-a07f3",
//   storageBucket: "weather-app-a07f3.appspot.com",
//   messagingSenderId: "480436789041",
//   appId: "1:480436789041:web:97a41fed4cc43ef53a1a10",
//   measurementId: "G-GCRLEDWDZW"
// };
// const fire = firebase.initializeApp(config);
// firebase.analytics();
// export default fire;



{/* <script src="https://www.gstatic.com/firebasejs/7.14.5/firebase-app.js"></script>
<script src="https://www.gstatic.com/firebasejs/7.14.5/firebase-analytics.js"></script>
   */}
