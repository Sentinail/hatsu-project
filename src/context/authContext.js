import React, { createContext, useContext, useEffect, useState } from 'react'
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../firebase-config/firebaseConfig';

const authContext = createContext()

export const useAuth = () => {
    return useContext(authContext)
}

const AuthProvider = ({ children }) => {
    const [ user, setUser ] = useState()

    const signUp = (email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                console.log(userCredential, "INFOOOOO")
            })
            .catch((error) => {
                alert(error.code)
            })
    }

    const signIn = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                console.log(userCredential, "INFOOOOO")
            })
            .catch((error) => {
                alert(error.code)
            })
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (userInfo) => {
            console.log(userInfo, "User Info")
            setUser(userInfo)
        })

        return unsubscribe
    })

    const value = {
        user,
        signIn,
        signUp
    }

    return (
        <authContext.Provider value={value}> {children} </authContext.Provider>
    )
}

export default AuthProvider