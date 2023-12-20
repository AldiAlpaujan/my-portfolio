import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB3rMiHZdnKTdSbfaZLGTumvyd2TKJMYbU",
  authDomain: "portfolio-d051d.firebaseapp.com",
  projectId: "portfolio-d051d",
  storageBucket: "portfolio-d051d.appspot.com",
  messagingSenderId: "1098048343228",
  appId: "1:1098048343228:web:c4d79b90edc9b7351b54b9",
};

const firebaseApp = initializeApp(firebaseConfig);
export const dbFirestore = getFirestore(firebaseApp);
