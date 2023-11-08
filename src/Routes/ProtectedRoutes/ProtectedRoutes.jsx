import { NavLink, Navigate, useLocation } from "react-router-dom";
import UseAuth from "../../hooks/UseAuth";
import Loading from "../../assets/animation/icons8-search.json"
import Lottie from "lottie-react";
const ProtectedRoutes = ({children}) => {
    const {user, loading} = UseAuth()
    const location = useLocation()

    if(loading){
        return ( <div className="flex justify-center  items-center mt-20">
            <Lottie style={{width: "100px"}} animationData={Loading}></Lottie>
        </div>
        )
    }

    if(user?.email){
        return children
    }
  return <Navigate state={location.pathname} to="/login"  replace/>
};

export default ProtectedRoutes;