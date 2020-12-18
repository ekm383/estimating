import firebase from "firebase";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyA9GaZuE2NWjVHhQgjHir0PtoU-84TKhoA",
  authDomain: "ecommerce-f9a02.firebaseapp.com",
  projectId: "ecommerce-f9a02",
  storageBucket: "ecommerce-f9a02.appspot.com",
  messagingSenderId: "469401385152",
  appId: "1:469401385152:web:896e841939bd1e9f3c1525",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
