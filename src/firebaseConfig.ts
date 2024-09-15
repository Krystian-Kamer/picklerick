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

const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);

