import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "./firebase.cofig";

export const AuthContext = createContext()
const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    const newUser = (email, passsword) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, passsword)
    }

    const signIn = (email, passsword) => {
        return signInWithEmailAndPassword(auth, email, passsword)
    }

    useEffect(() => {
        const unsubscribe =  onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            console.log('current User', currentUser);
            setLoading(false)
        })
        return () => {
            unsubscribe()
        }
    },[])

    const AuthData = {
        newUser,
        signIn
    }

  return (
    <AuthContext.Provider value={AuthData}>
    {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;