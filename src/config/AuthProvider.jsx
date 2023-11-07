import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "./firebase.cofig";

export const AuthContext = createContext()
const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    const [userName, setUserName ] = useState('')
    const [logo, setLogo] = useState('')
    const newUser = (email, passsword) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, passsword)
    }

    const signIn = (email, passsword) => {
        return signInWithEmailAndPassword(auth, email, passsword)
    }

    const logOut = () => {
        return signOut(auth)
    }



    useEffect(() => {
        const unsubscribe =  onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            console.log('current User', currentUser);
            setUserName(currentUser.displayName)
            setLogo(currentUser.photoURL)
            
            
            setLoading(false)
        })
        return () => {
            unsubscribe()
        }
    },[])

    const AuthData = {
        newUser,
        signIn,
        logOut,
        user, 
        loading,
        userName,
        logo,
    }

  return (
    <AuthContext.Provider value={AuthData}>
    {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;