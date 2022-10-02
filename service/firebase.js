// Import the functions you need from the SDKs you need
import firebase  from "firebase/app";
import "firebase/auth";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAEyOKY7XCamgpcoxnsHyCv237tyj2HuD4",
  authDomain: "flagapp-fa424.firebaseapp.com",
  databaseURL: "https://flagapp-fa424-default-rtdb.firebaseio.com",
  projectId: "flagapp-fa424",
  storageBucket: "flagapp-fa424.appspot.com",
  messagingSenderId: "60619447166",
  appId: "1:60619447166:web:f3071c443ce1ef0a05312f",
  measurementId: "G-WR3HZN10BR"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

const analytics = getAnalytics(app);
export default (firebase, auth, app);
