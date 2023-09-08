import React, { createContext, useContext, useEffect, useState } from 'react'
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { auth } from '../firebase-config/firebaseConfig';
import { getUserBookmarks } from '../utilities/firestoreDB';

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

    const logout = () => {
        signOut(auth)
            .then(() => {
                alert("Sign Out Complete")
            })
            .catch((error) => {
                console.log(error)
            })
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (userInfo) => {
            setUser(userInfo)
        })

        return unsubscribe
    }, [])

    const value = {
        user,
        signIn,
        signUp,
        logout
    }

    useEffect(() => {
        if (user) {
            const getBookmarks = async () => {
              const userBookmarks = await getUserBookmarks("user_bookmarks", user.uid)
              alert(JSON.stringify(userBookmarks))
              localStorage.setItem("user_bookmarks", JSON.stringify(userBookmarks))
            }
      
            getBookmarks()
        }
    }, [user])

    return (
        <authContext.Provider value={value}> {children} </authContext.Provider>
    )
}

export default AuthProvider