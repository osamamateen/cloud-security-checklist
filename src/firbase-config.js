import { initializeApp } from "firebase/app"
import { getFirestore } from "@firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyDFTNDREkvDs0riXMu_NNFhgqHBzaFzVhw",
  authDomain: "security-checklist-81ece.firebaseapp.com",
  projectId: "security-checklist-81ece",
  storageBucket: "security-checklist-81ece.appspot.com",
  messagingSenderId: "309266868205",
  appId: "1:309266868205:web:87795c9fd3655355a269e4",
  measurementId: "G-MEHD7WVM5X",
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)

export const db = getFirestore(app)
