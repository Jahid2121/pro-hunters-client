import { NavLink } from "react-router-dom";
import UseAuth from "../../hooks/UseAuth";
import loading from "../../assets/animation/icons8-search.json"
const ProtectedRoutes = ({children}) => {
    const {user, loading} = UseAuth()

    if(loading){
        return loading
    }

    if(user?.email){
        return children
    }
  return <NavLink to="/login"  replace/>
};

export default ProtectedRoutes;