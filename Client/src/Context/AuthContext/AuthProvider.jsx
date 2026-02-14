import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import { auth } from '../../Firebase/firebase.init';

const AuthProvider = ({ children }) => {
    const [loading, SetLoading] = useState(true);
    const [user,setUser]=useState(null);


    const provider = new GoogleAuthProvider();

    const createUser = (email, password) => {
        SetLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const loginUser = (email, password) => {
           return signInWithEmailAndPassword(auth,email,password)
    }

    const logOut=()=>{
        return signOut(auth)
    }
    const signInWithGoogle=()=>{
        return signInWithPopup(auth,provider)
    }

    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth,currentUser=>{
            setUser(currentUser)
            SetLoading(false);
            console.log("user in the auth state changed", currentUser);
            
        })
        return ()=>{
            unSubscribe();
        }
    },[])









    const authInfo = {
        loading,
        user,
        createUser,
        loginUser,
        signInWithGoogle,
        logOut
    }


    return (
        <AuthContext value={authInfo}>
            {
                children
            }
        </AuthContext>
    );
};

export default AuthProvider;