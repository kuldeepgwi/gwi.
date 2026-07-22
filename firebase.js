import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyDzbOFb6rgGO2H2Tgh0WpfSWvqTwLSkho8",
  authDomain: "growth-with-india-34032.firebaseapp.com",
  databaseURL: "https://growth-with-india-34032-default-rtdb.firebaseio.com",
  projectId: "growth-with-india-34032",
  storageBucket: "growth-with-india-34032.firebasestorage.app",
  messagingSenderId: "239083092040",
  appId: "1:239083092040:web:6aefd9027be53bbc79007d",
  measurementId: "G-XZ2R23SWH7"
};

const app = initializeApp(firebaseConfig);

export const db = getDatabase(app);
