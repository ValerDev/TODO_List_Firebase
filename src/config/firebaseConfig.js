import firebase from 'firebase';
import 'firebase/firestore';
import 'firebase/auth';

var config = {
    apiKey: "AIzaSyCUXOtQeBtMY_FBJFF5F2ULj_h2O8hI1m8",
    authDomain: "todo-list-task-fc4bb.firebaseapp.com",
    projectId: "todo-list-task-fc4bb",
    storageBucket: "todo-list-task-fc4bb.appspot.com",
    messagingSenderId: "804027419899",
    appId: "1:804027419899:web:833b4e4505cf0ee2d0b45e",
    measurementId: "G-EN108WFD1D"
};

firebase.initializeApp(config);
firebase.firestore().settings({timestampsInSnapshots: true});

export default firebase;

