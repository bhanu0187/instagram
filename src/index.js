import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import FirebaseContext from './context/firebase';
import { db, app, auth, arrayRemove, arrayUnion } from './lib/firebase';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // eslint-disable-next-line react/jsx-no-constructed-context-values
  <FirebaseContext.Provider value={{ app, db, auth, arrayRemove, arrayUnion }}>
    <App />
  </FirebaseContext.Provider>
);
