import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
  apiKey: 'AIzaSyCrGCzXIVcRHfC5fzMBWOm-qxUZCZ9ua34',
  authDomain: 'picklerick-base.firebaseapp.com',
  databaseURL:
    'https://picklerick-base-default-rtdb.europe-west1.firebasedatabase.app',
  projectId: 'picklerick-base',
  storageBucket: 'picklerick-base.appspot.com',
  messagingSenderId: '978781793518',
  appId: '1:978781793518:web:4d939e109dbfab26a397ff',
  measurementId: 'G-B91P5EYSY2',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);

// const firebaseConfig = {
//   apiKey: 'AIzaSyCrGCzXIVcRHfC5fzMBWOm-qxUZCZ9ua34',
//   authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
//   databaseURL: import.meta.env.VITE_FIREBASE_DATABASE_URL,
//   projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
//   storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
//   messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
//   appId: import.meta.env.VITE_FIREBASE_APP_ID,
//   measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID,
// };
