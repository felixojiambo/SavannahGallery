import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth';
//import { getAnalytics } from 'firebase/analytics';

const firebaseConfig = {
  apiKey: "AIzaSyAnbqjegnbrC40mj9MmCgkmQ5avl59CwcM",
  authDomain: "savn-7cd95.firebaseapp.com",
  projectId: "savn-7cd95",
  storageBucket: "savn-7cd95.appspot.com",
  messagingSenderId: "557613247996",
  appId: "1:557613247996:web:73b839ae54889e979dd679",
  measurementId: "G-LL6SW0D6M3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

// Sign in with Google
const signInWithGoogle = () => {
  return signInWithPopup(auth, provider);
};

// Sign out
const signOutUser = () => {
  return signOut(auth);
};

export { auth, signInWithGoogle, signOutUser };
