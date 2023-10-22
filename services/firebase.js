import { initializeApp, getApp, getApps } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyByNrdqrqruqCnfffUaqoJ2Y8Hzu7atnP0",
  authDomain: "appfirebasenovograd.firebaseapp.com",
  projectId: "appfirebasenovograd",
  storageBucket: "appfirebasenovograd.appspot.com",
  messagingSenderId: "123643583814",
  appId: "1:123643583814:web:87a686506cba4d98e6d947",
  measurementId: "G-L0J8QCQYE3",
  databaseURL:
    "https://appfirebasenovograd-default-rtdb.europe-west1.firebasedatabase.app",
};

let app = null;
let database = null;

if (getApps().length) {
  app = getApp();
  database = getDatabase(app);
} else {
  app = initializeApp(firebaseConfig);
  database = getDatabase(app);
}

export default app;
