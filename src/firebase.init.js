 
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBdINgcYwCuPj9gqw4iqvXAP6dVqQFMVnA",
  authDomain: "bikestore-different-brand.firebaseapp.com",
  projectId: "bikestore-different-brand",
  storageBucket: "bikestore-different-brand.appspot.com",
  messagingSenderId: "276065755023",
  appId: "1:276065755023:web:5a79d2c7f9df1034bff5fa"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;