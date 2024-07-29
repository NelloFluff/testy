import { initializeApp } from 'firebase/app';
import { getDatabase, ref, set, onValue } from 'firebase/database';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCTjNBHFQiMZQ2w-Ib02deuMGmr6RRA7Tw",
  authDomain: "testy-b080b.firebaseapp.com",
  projectId: "testy-b080b",
  storageBucket: "testy-b080b.appspot.com",
  messagingSenderId: "201544227519",
  appId: "1:201544227519:web:86165a3e7b20228fb9040a",
  measurementId: "G-03M1RV1L60"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

function listenForMessages() {
  const messagesRef = ref(database, 'messages');
  onValue(messagesRef, (snapshot) => {
    const messages = snapshot.val();
    // Update your chat UI with the messages
    console.log(messages);
  });
}

function sendMessage(sender, text) {
  const messageRef = ref(database, 'messages');
  const newMessageRef = push(messageRef);
  set(newMessageRef, {
    sender: sender,
    text: text,
    timestamp: Date.now()
  });
}

