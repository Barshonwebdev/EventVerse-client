import { FacebookAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { app } from "../firebase/firebase.config";
export const AuthContext=createContext(null);
const auth=getAuth(app);

const AuthProvider = ({children}) => {
    const [user,setUser]=useState([]);
    const [loading,setLoading]=useState(true);
    const googleProvider=new GoogleAuthProvider();
    const facebookProvider=new FacebookAuthProvider();

    const createUser=(email,pass)=>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth,email,pass);
    }

    const signInUser=(email,pass)=>{
        setLoading(true);
        return signInWithEmailAndPassword(auth,email,pass);
    }

    const googleSignIn=()=>{
        setLoading(true);
        return signInWithPopup(auth,googleProvider);
    }

    const facebookSignIn=()=>{
        setLoading(true);
        return signInWithPopup(auth,facebookProvider);
    }

    const userSignOut=()=>{
        return signOut(auth);
    }

    useEffect(()=>{
        const unSubscribe=onAuthStateChanged(auth,currentUser=>{
            if(currentUser){
                setUser(currentUser);
                setLoading(false);
                console.log(currentUser);
            }
            else {
                setUser('');
                setLoading(false);
            }
        })

        return ()=>{
            return unSubscribe();
        }
    },[])

    const AuthInfo={user,loading,createUser,signInUser,facebookSignIn,googleSignIn,userSignOut};
    return <AuthContext.Provider value={AuthInfo}>{children}</AuthContext.Provider>
};

export default AuthProvider;