// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCayx_JYb2cqNmLUiQvxc2wwDsQ0FBtoVI',
  authDomain: 'netflix-clone-1c7e2.firebaseapp.com',
  projectId: 'netflix-clone-1c7e2',
  storageBucket: 'netflix-clone-1c7e2.appspot.com',
  messagingSenderId: '330137166306',
  appId: '1:330137166306:web:2026d384e3ffd0d25719bb',
}

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore()
const auth = getAuth()

export default app
export { auth, db }
