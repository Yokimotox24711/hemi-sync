// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDtthUJ-yvvzRxm-sQlskFfPz4TKcoalkA",
  authDomain: "hemi-sync-6ecd1.firebaseapp.com",
  projectId: "hemi-sync-6ecd1",
  storageBucket: "hemi-sync-6ecd1.appspot.com",
  messagingSenderId: "1088533674807",
  appId: "1:1088533674807:web:2f323af6ef7222d3eef8b2",
  measurementId: "G-D7K4NGNV15"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

// FirestoreDB Getter
const firestoreDB: any = getFirestore(app);
export { firestoreDB };

