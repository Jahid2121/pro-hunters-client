import axios from "axios";
import { useEffect } from "react";
import UseAuth from "./UseAuth";
import auth from "../config/firebase.cofig";
import { useNavigate } from "react-router-dom";

const axisoSecure = axios.create({
  baseURL: "https://pro-hunters-server.vercel.app",
  withCredentials: true,
});

const UseAxiosSecure = () => {
    const navigate = useNavigate()
  const { logOut } = UseAuth();
  useEffect(() => {
    axisoSecure.interceptors.response.use(
      (res) => {
        return res;
      },
      (error) => {
        console.log("error tracked in the interceptor", error.response);
        if (error.response.status === 401 || error.response.status === 403) {
          console.log("LogOut the user");
          logOut()
            .then(() => {
                navigate('/login')
            })
            .catch((error) => {
              console.error(error);
            });
        }
      }
    );
  }, []);

  return axisoSecure;
};

export default UseAxiosSecure;
