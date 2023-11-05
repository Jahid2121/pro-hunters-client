import { createUserWithEmailAndPassword } from "firebase/auth";
import { createContext } from "react";
import auth from "./firebase.cofig";

export const AuthContext = createContext()
const AuthProvider = ({children}) => {

    const newUser = (email, passsword) => {
        return createUserWithEmailAndPassword(auth, email, passsword)
    }

    const AuthData = {
        newUser
    }

  return (
    <AuthContext.Provider value={AuthData}>
    {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;