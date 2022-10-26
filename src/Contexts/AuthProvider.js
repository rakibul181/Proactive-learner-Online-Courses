import React from 'react';
import { createContext } from 'react';
import {getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup} from 'firebase/auth'
import app from '../firebase/firebase.config';
import { useState } from 'react';
import { useEffect } from 'react';
import { current } from 'daisyui/src/colors';


export const AuthContext = createContext()
const auth = getAuth(app)

const AuthProvider = ({children}) => {

    const[user, setUser] = useState()
   

    const userSignInwithProvider = (provider)=>{
        return signInWithPopup(auth, provider)
    }

    const signInWithEmail =(email, password)=>{
        return signInWithEmailAndPassword(auth, email, password)
    }

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth,(currentUser)=>{
            setUser(currentUser)
        })
        return ()=> unsubscribe()
    },[])




    const authInfo={
        user,
        userSignInwithProvider,
        signInWithEmail
    }
    return (
         <AuthContext.Provider value = {authInfo}>
            {children}
         </AuthContext.Provider>
    );
};

export default AuthProvider;
