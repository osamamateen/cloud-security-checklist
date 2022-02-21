import { useState } from "react"

import {
  getAuth,
  isSignInWithEmailLink,
  signInWithEmailLink,
  sendSignInLinkToEmail,
} from "firebase/auth"

import { db } from "../firbase-config"
import { collection, addDoc } from "firebase/firestore"

function useAuth() {
  const auth = getAuth()

  return {
    createUser: async (user) => {
      const usersCollectionRef = collection(db, "users")
      await addDoc(usersCollectionRef, {
        name: user.name,
        email: user.email,
        organization: user.organization,
        phone: user.phone,
      })
      try {
        await sendSignInLinkToEmail(auth, user.email, {
          url: "http://localhost:3000/?",
          handleCodeInApp: true,
        })
        window.localStorage.setItem("emailForSignIn", user.email)
      } catch (error) {
        console.log(error)
      }
    },
    isSignedIn: (auth) => {
      return isSignInWithEmailLink(auth, window.location.href)
    },
    signInWithEmailLink: (email) => {
      signInWithEmailLink(auth, email, window.location.href)
    },
  }
}

export default useAuth
