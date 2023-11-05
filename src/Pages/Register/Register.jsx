import { Link } from "react-router-dom";
import img from "../../assets/Pictures/login.svg"
import UseAuth from "../../hooks/UseAuth";
const Register = () => {
    const {newUser} = UseAuth()

    const handleRegister = e => {
        e.preventDefault()
        const form = e.target 
        const email = form.email.value;
        const password = form.password.value 
        console.log(email, password);
        newUser(email, password)
        .then(result => {
            const user = result.user;
            console.log(user);
        })
        .catch(error => {
            console.error(error);
        })
    }

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
                defaultValue=""
                placeholder="name"
                className="input input-bordered"
                
              />
              <h2 className="my-2">Or give a link</h2>
              <input
                type="text"
                name="image"
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
                defaultValue="jahid@gmail.com"
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
            </div>
            <div className="form-control mt-6">
              <input className="btn bg-customOrange border-0 text-white" type="submit" value="Register" />
              <h3>Already a User? <Link className="text-customOrange hover:underline font-medium" to="/login">Login</Link></h3> 
            </div> 
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;