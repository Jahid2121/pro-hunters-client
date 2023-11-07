import { Link } from "react-router-dom";
import img from "../../assets/Pictures/login.svg";
import UseAuth from "../../hooks/UseAuth";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { updateProfile } from "firebase/auth";
const Register = () => {
  const { newUser } = UseAuth();
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [ShowPassword, setShowPassword] = useState(false)
  

  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const photo = form.photoURL.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

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
      <div className="hero-content flex-col-reverse gap-8 lg:flex-row">
        <div className="mt-36">
          <img className="w-[500px] " src={img} alt="" />
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleRegister} className="card-body">
            <h2 className="text-center font-bold text-2xl">Register</h2>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                name="name"
                defaultValue="M Jahid"
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
                name="image"
                placeholder="name"
                className="input input-bordered"
              />
              <h2 className="my-2">Or give a link</h2>
              <input
                type="text"
                name="photoURL"
                defaultValue="https://i.ibb.co/j37x2DC/c05817991.jpg"
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
                defaultValue="jahidsarkar2121@gmail.com"
                placeholder="email adress"
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
                defaultValue={123456}
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
