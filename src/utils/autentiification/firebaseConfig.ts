import { initializeApp } from 'firebase/app';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { UserCredential, User } from 'firebase/auth/cordova';
import { FirebaseError } from 'firebase/app';
import { signInWithEmailAndPassword } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyBXGAcFyO4yWey26BgEkqAoeEq4rVA5e7k",
  authDomain: "books-31eba.firebaseapp.com",
  databaseURL: "https://books-31eba-default-rtdb.firebaseio.com",
  projectId: "books-31eba",
  storageBucket: "books-31eba.appspot.com",
  messagingSenderId: "436605099313",
  appId: "1:436605099313:web:810f388c2c04c5fd786410"
};
const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth();

export const SignUpWithEmail = async (email: string, password: string): Promise<User> => {
  try {
    const userCredential: UserCredential = await createUserWithEmailAndPassword(auth, email, password);
    return userCredential.user
  } catch (error: unknown) {
    if (error instanceof FirebaseError) {
      throw error;
    } else {
      throw error;
    }
  }
};

export const signInWithEmail = async (email: string, password: string): Promise<User> => {
  try {
    const userCredential: UserCredential = await signInWithEmailAndPassword(auth, email, password);
    return userCredential.user;
  } catch (error: unknown) {
    if (error instanceof FirebaseError) {
      throw error;
    } else {
      throw error;
    }
  }
};
