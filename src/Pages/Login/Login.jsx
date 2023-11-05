import { Link } from "react-router-dom";
import img from "../../assets/Pictures/login.svg"
import UseAuth from "../../hooks/UseAuth";

const Login = () => {
    const {signIn} = UseAuth()


    const handleLogin = e => {
        e.preventDefault()
        const form = e.target 
        const email = form.email.value;
        const password = form.password.value 
        console.log(email, password);
        signIn(email, password)
        .then(result => {
            const user = result.user;
            console.log(user);
        })
        .catch(error => {
            console.log(error);
        })
    }

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
                defaultValue={"jahid@gmail.com"}
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
                defaultValue={123456}
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
            </div>
            <div className="form-control mt-6">
              <input className="btn bg-customOrange border-0 text-white" type="submit" value="Login" />
              <h3>New to be hunt? register here <Link className="text-customOrange font-medium hover:underline " to="/register">Register</Link></h3>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
