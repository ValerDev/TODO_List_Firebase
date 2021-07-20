import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import authReducer from "./reducers/authReducer";
import todoReducer from "./reducers/todoReducer";
import thunk from 'redux-thunk';
import { reduxFirestore, getFirestore, firestoreReducer } from "redux-firestore";
import { reactReduxFirebase, getFirebase, firebaseReducer } from "react-redux-firebase";
import firebaseConfig from "../config/firebaseConfig";
const reducers = combineReducers({
    auth: authReducer,
    todo: todoReducer,
    firestore: firestoreReducer,
    firebase: firebaseReducer,
});

const store = createStore(reducers,
    compose(
        applyMiddleware(thunk.withExtraArgument({ getFirebase, getFirestore })),
        reduxFirestore(firebaseConfig),
        reactReduxFirebase(firebaseConfig, {
            userProfile: 'users',
            useFirestoreForProfile: true,
            updateProfileOnLogin: false,
            attachAuthIsReady: true,
        }),
    )
);

export default store;
