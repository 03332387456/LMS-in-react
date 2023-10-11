// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDRpcLbjR6k7CYQJIxm3Gtrw5Db7cVnzcU",
  authDomain: "lms-in-react-e43e4.firebaseapp.com",
  projectId: "lms-in-react-e43e4",
  storageBucket: "lms-in-react-e43e4.appspot.com",
  messagingSenderId: "748382316550",
  appId: "1:748382316550:web:18716fc981a1aae9d4bb87",
  measurementId: "G-L2F8G1DG0N"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);