import { Link, useLocation, useNavigate } from "react-router-dom";
import img from "../../assets/Pictures/login.svg";
import UseAuth from "../../hooks/UseAuth";
import { useState } from "react";
import axios from "axios";
import { AiOutlineGoogle } from "react-icons/ai";


const Login = () => {
  const { signIn, googleLogin } = UseAuth();
  const [error, setError] = useState("");

  const [success, setSuccess] = useState("");
  const location = useLocation()
const navigate = useNavigate()

  const handleGoogleLogin = () => {
    googleLogin()
    .then(result => {
      console.log(result.user);
      navigate(location?.state ? location.state : '/')
    })
    .catch(error => {
      console.error(error);
    })
  }

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    setError("");
    setSuccess("");


    signIn(email, password)
      .then((result) => {
        const loggedInUser = result.user;
        console.log(loggedInUser);
        const user = {email }

        // access token
        axios.post('http://localhost:5000/jwt',user,
         {withCredentials: true})
        .then(res => {
          console.log(res.data);
          if(res.data.success){
            // navigate 
          }
        })

        setSuccess('Logged in successfully')
      })
      .catch((error) => {
        console.log(error);
        setError('Password/email does not match')
      });
  };

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col gap-8 lg:flex-row-reverse">
        <div className="mt-36">
          <img className="w-[500px] " src={img} alt="" />
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleLogin} className="card-body">
            <h2 className="text-center font-bold text-2xl">Login</h2>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                defaultValue={"micro@soft.com"}
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                defaultValue={"micro@soft.com"}
                name="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
              <span onClick={handleGoogleLogin}><button className='hover:bg-custom-yellow p-3 mt-8 mr-5 border text-2xl rounded-full'><AiOutlineGoogle/> </button></span>
              {error && (
                <p className="text-red-950  flex items-center first-letter:text-5xl">
                  <span className="h-5 w-5 rounded-full text-2xl ">!</span>{" "}
                  {error}
                </p>
              )}
              {success && <p className="text-green-800">{success}</p>}
            </div>
            <div className="form-control mt-6">
              <input
                className="btn bg-customOrange border-0 text-white"
                type="submit"
                value="Login"
              />
              <h3>
                New to be hunt? register here{" "}
                <Link
                  className="text-customOrange font-medium hover:underline "
                  to="/register"
                >
                  Register
                </Link>
              </h3>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
