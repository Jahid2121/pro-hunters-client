import { useContext } from "react";
import { AuthContext } from "../config/AuthProvider";

const UseAuth = () => {
  return useContext(AuthContext)
};

export default UseAuth;