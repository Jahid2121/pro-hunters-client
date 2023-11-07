import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "./firebase.cofig";
import DatePicker from "react-datepicker";

export const AuthContext = createContext()
const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    const [userName, setUserName ] = useState('')
    const [logo, setLogo] = useState('')
    const [currentDate, setCurrentDate] = useState(new Date());
    console.log(currentDate);
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

    <DatePicker selected={currentDate} onChange={(date) => setCurrentDate(date)}
    minDate={new Date()}
    maxDate={new Date()}
    />

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
        currentDate
    }

  return (
    <AuthContext.Provider value={AuthData}>
    {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;