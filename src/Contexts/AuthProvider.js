import React from 'react';
import { createContext } from 'react';
import {getAuth} from 'firebase/auth'


export const AuthContext = createContext()
const auth = getAuth()

const AuthProvider = ({children}) => {


    const authInfo={}
    return (
         <AuthContext.Provider value = {authInfo}>
            {children}
         </AuthContext.Provider>
    );
};

export default AuthProvider;
