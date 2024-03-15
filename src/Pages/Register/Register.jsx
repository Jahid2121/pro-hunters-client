import { Link, useNavigate } from "react-router-dom";
import img from "../../assets/Pictures/login.svg";
import UseAuth from "../../hooks/UseAuth";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { updateProfile } from "firebase/auth";
const Register = () => {
  const { newUser, googleLogin } = UseAuth();
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [ShowPassword, setShowPassword] = useState(false)
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

  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const photo = form.image.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(name, photo, email, password);

    setError("");
    setSuccess("");

    if (password.length < 6) {
      setError("password should be longer than 6 characters");
      return;
    } else if (!/[A-Z]/.test(password)) {
      setError("Include  at least one Uppercase letter");
      return;
    } else if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
      setError("Must include a special character");
      return;
    }

    newUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        setSuccess("User created successfully");

        updateProfile(user,  {
          displayName: name,
          photoURL: photo
        })
        .then(()=> console.log('profile Update'))
        .catch(error => {
          console.error(error);
        })
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col-reverse  lg:flex-row">
        <div className="mt-36">
          <img className="w-[700px] " src={img} alt="" />
        </div>
        <div className="card flex-shrink-0 w-full max-w-xl shadow-2xl bg-base-100">
          <form onSubmit={handleRegister} className="card-body">
            <h2 className="text-center font-bold text-2xl">Register</h2>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo</span>
              </label>
              <input
                type="file"
                accept="image/*"
                name="imageFile"
                placeholder="name"
                className="input input-bordered"
              />
              <h2 className="my-2">Or give a link</h2>
              <input
                type="text"
                name="image"
                placeholder="photo URL"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email address"
                className="input input-bordered"
                required
              />
              
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <div className=" relative">
              <input
                type={ShowPassword ? 'text' : 'password'}
                name="password"
                placeholder="password"
                className="input btn-block  input-bordered"
                required
              />
               <span className='absolute right-4 top-3'  onClick={() => setShowPassword(!ShowPassword)}>
              {
                ShowPassword ? <FaEyeSlash/> : <FaEye />  
              }
            </span>
              </div>
            </div>
             <span onClick={handleGoogleLogin}>
  <button className='hover:bg-gradient-to-r from-blue-500 via-green-500 to-red-500 flex items-center gap-4 p-3 mt-8 mr-5 border text-2xl w-14 rounded-full'>
    <img src="https://i.ibb.co/ydH0LHr/google.png" alt="" /> 
    <span style={{color: '#4285F4'}}>G</span>
    <span style={{color: '#EA4335'}}>o</span>
    <span style={{color: '#FBBC05'}}>o</span>
    <span style={{color: '#4285F4'}}>g</span>
    <span style={{color: '#34A853'}}>l</span>
    <span style={{color: '#EA4335'}}>e</span>
  </button>
</span>
            <div className="form-control mt-6">
              <input
                className="btn bg-customOrange border-0 text-white"
                type="submit"
                value="Register"
              />
              <h3>
                Already a User?{" "}
                <Link
                  className="text-customOrange hover:underline font-medium"
                  to="/login"
                >
                  Login
                </Link>
              </h3>
            </div>
            {error && <p className="text-red-950  flex items-center first-letter:text-5xl"><span className="h-5 w-5 rounded-full text-2xl ">!</span> {error}</p>}
            {success && <p className="text-green-800">{success}</p>}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
