import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
const firebaseConfig = firebase.initializeApp({
    apiKey: "AIzaSyDi8c2eXJDhk8SOQTNQTAXNbxljABFAA0Q",
    authDomain: "todoist-clone-4d690.firebaseapp.com",
    databaseURL: "https://todoist-clone-4d690-default-rtdb.firebaseio.com",
    projectId: "todoist-clone-4d690",
    storageBucket: "todoist-clone-4d690.appspot.com",
    messagingSenderId: "480454250750",
    appId: "1:480454250750:web:b8f57bbc0b01c90d3cd5af"
});

export {
    firebaseConfig as firebase
};