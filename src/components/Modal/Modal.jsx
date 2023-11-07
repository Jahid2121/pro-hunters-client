import axios from "axios";
import UseAuth from "../../hooks/UseAuth";

const Modal = ({_id}) => {
    const {user} = UseAuth()
    const handleApply = e => {
        e.preventDefault()
        const form = e.target;
        const name = form.name.value
        const email = form.email.value
        const resume = form.resume.value
        const appliedJob = {
            _id: _id,
            name: name,
            email: email,
            resume: resume
        }
        console.log(appliedJob);
        axios.post("http://localhost:5000/appliedJobs", appliedJob )
        .then(res => {
            console.log(res.data);
        })
    }
  return (
    <div className="">
      {/* You can open the modal using document.getElementById('ID').showModal() method */}
      <button
        className="btn bg-customOrange text-white"
        onClick={() => document.getElementById("my_modal_3").showModal()}
      >
        Apply Now
      </button>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
          <form className="mb-9 p-3" method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 bg-customOrange text-white ">
              ✕
            </button>
          </form>
          <form onSubmit={handleApply}>
            <div className="form-control">
              <input
                type="text"
                name="name"
                defaultValue={"Jahid Sarkar"}
                placeholder=""
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control mt-5">
              <input
                type="email"
                name="email"
                defaultValue={user.email}
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Submit your Resume</span>
              </label>
              <input
                type="text"
                name="resume"
                placeholder="Resume Link"
                className="input input-bordered"
                required
              />
            </div>
            <button className="btn btn-block bg-customOrange text-white mt-4">Submit Application</button>
          </form>
        </div>
      </dialog>
    </div>
  );
};

export default Modal;
