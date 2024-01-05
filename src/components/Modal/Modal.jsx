import axios from "axios";
import UseAuth from "../../hooks/UseAuth";
import { useRef } from "react";
import toast from "react-hot-toast";
// import emailjs from '@emailjs/browser';
const Modal = ({job, formattedDate}) => {
  const {userName} = UseAuth()
  const {
    _id,
    jobTitle,
    logoImage,
    jobCategory,
  } = job;
    const {user} = UseAuth()
    const sendEmail = useRef()
    const handleApply = e => {
        e.preventDefault()
        const form = e.target;
        const name = form.name.value
        const email = form.email.value
        const resume = form.resume.value
        const appliedJob = {
            name: name,
            email: email,
            jobTitle:jobTitle,
            jobCategory:jobCategory,
            AppliedDate: formattedDate,
            logoImage:logoImage,
            resume: resume,

        }
        console.log(appliedJob);
        axios.post("http://localhost:5000/appliedJobs", appliedJob )
        .then(res => {
            console.log(res.data);
            toast.success('Applied Successfully.')
          })

          // const templateParams = {
          //   email_to: 'jahidhasan20u@gmail.com', // Replace this with the actual recipient's email address
          //   // ... other template parameters
          // };

      //     emailjs.sendForm('service_ut9ajug', 'template_aayrs7s', templateParams, 'ksdc3y5Y5pnwnthEu')
      // .then((result) => {
      //     console.log(result.text);
      // }, (error) => {
      //     console.log(error.text);
      // });
          
    }

    const handleIncrement = () => {
      // Increment jobApplicantsNumber and  on successful application submission
            axios
            .patch(`http://localhost:5000/jobs/${_id}`)
            .then((response) => {
              console.log(response.data);
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
          <form ref={sendEmail} onSubmit={handleApply}>
            <div className="form-control">
              <input
                type="text"
                name="name"
                defaultValue={userName}
                disabled
                
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control mt-5">
              <input
                type="email"
                name="email"
                defaultValue={user.email}
                disabled
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
            <button onClick={handleIncrement} className="btn btn-block bg-customOrange text-white mt-4">Submit Application</button>
          </form>
        </div>
      </dialog>
    </div>
  );
};

export default Modal;
