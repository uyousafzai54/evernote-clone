import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
const firebase = require('firebase');
require('firebase/firestore'); 
// Your web app's Firebase configuration
firebase.initializeApp({
  apiKey: "AIzaSyCc-ojDdlACrWrO6gTyvfTn8BDxcMfGoF8",
  authDomain: "evernote-clone-1f2de.firebaseapp.com",
  databaseURL: "https://evernote-clone-1f2de.firebaseio.com",
  projectId: "evernote-clone-1f2de",
  storageBucket: "evernote-clone-1f2de.appspot.com",
  messagingSenderId: "596762468305",
  appId: "1:596762468305:web:ac1b6c5fd1cc7497818af0",
  measurementId: "G-79MX022Y71"
});
firebase.analytics();
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('evernote-container')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
