import React, { createContext, useContext, useEffect, useState } from 'react'
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { auth } from '../firebase-config/firebaseConfig';
import { getUserBookmarks } from '../utilities/firestoreDB';
import { toast } from 'react-toastify';

const authContext = createContext()

export const useAuth = () => {
    return useContext(authContext)
}

const AuthProvider = ({ children }) => {
    const [ user, setUser ] = useState()
    const [ loading , setLoading ] = useState(true)

    const signUp = (email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                toast.success("Registered!")
            })
            .catch((error) => {
                switch(error.code) {
                    case "auth/invalid-password":
                        toast.error("Oops, make your password longer!")
                        break;
                    case "auth/invalid-email":
                        toast.error("Oops, make your email valid!")
                        break;
                    default:
                        toast.error("Something went wrong!")
                }
            })
    }

    const signIn = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                toast.success("Welcome user!")
            })
            .catch((error) => {
                switch(error.code) {
                    case "auth/wrong-password":
                        toast.error("Oops, wrong password!")
                        break;
                    case "auth/user-not-found":
                        toast.error("Oops, user not found!")
                        break;
                    default:
                        toast.error("Something went wrong!")
                }
            })
    }

    const logout = () => {
        signOut(auth)
            .then(() => {
                toast.success("Logout complete, see you again!")
            })
            .catch((error) => {
                switch(error.code) {
                    default:
                        toast.error("Something went wrong!")
                }
            })
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (userInfo) => {
            setLoading(false)
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
              localStorage.setItem("user_bookmarks", JSON.stringify(userBookmarks))
            }
      
            getBookmarks()
        }
    }, [user])

    return (
        <authContext.Provider value={value}>
             { !loading && children} 
        </authContext.Provider>
    )
}

export default AuthProvider