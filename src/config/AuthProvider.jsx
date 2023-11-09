import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "./firebase.cofig";

export const AuthContext = createContext()
const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    const [userName, setUserName ] = useState('')
    const [logo, setLogo] = useState('')
    const [myJobs, setMyJobs] = useState([])
    console.log(userName);
    const googleProvider = new GoogleAuthProvider()

    const newUser = (email, passsword) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, passsword)
    }

    const signIn = (email, passsword) => {
        return signInWithEmailAndPassword(auth, email, passsword)
    }

    const googleLogin = () => {
        return signInWithPopup(auth, googleProvider)
    }

    const logOut = () => {
        return signOut(auth)
    }

    
    useEffect(() => {
      fetch(`http://localhost:5000/jobs?loggedInUserName=${userName}`,{withcreadential: 'true'})
      .then(res => res.json())
      .then(data => setMyJobs(data))
    },[])



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
        myJobs,
        logo,
        googleLogin
    }

  return (
    <AuthContext.Provider value={AuthData}>
    {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;