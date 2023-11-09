import axios from "axios";

import toast from "react-hot-toast";

const UpdateJob = ({job}) => {

    const {
        _id,
        bannerUrl,
        jobTitle,
        loggedInUserName,
        jobCategory,
        salaryRange,
      } = job;

      const handleUpdate = (e) => {
        e.preventDefault();
        const form = e.target;
        const bannerPhoto = form.bannerImg.value;
        const title = form.jobTitle.value;
        const salary = form.salaryRange.value;
    
        const jobUpdate = {
          bannerUrl: bannerPhoto,
          jobTitle: title,
          salaryRange: salary,
        };
    
        axios
          .put(`https://pro-hunters-server-m77bccise-jahids-projects-c60982d1.vercel.app/jobs/${_id}`, jobUpdate)
          .then((res) => {
            const data = res.data;
            if (data.modifiedCount) {
              toast.success("Job Updated Successfully");
            } else {
              toast.error("Failed to update job");
            }
          })
          .catch((error) => {
            console.error("Error updating job:", error);
            // Handle errors, e.g., show an error message to the user
            toast.error("Failed to update job");
          });
      };


  



  return (
    <div className="">
      {/* You can open the modal using document.getElementById('ID').showModal() method */}
      
      <dialog id="my_modal_4" className="modal">
        <div className="modal-box">
          <form className="mb-9 p-3"  method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 bg-customOrange text-white ">
              ✕
            </button>
          </form>
          <div>
      <h2 className="text-center my-9 font-bold text-4xl text-customOrange">Update a Job</h2>
      <form  onSubmit={handleUpdate} className="card-body">


    {/*banner img */}
        <div className="form-control ">
          <label className="label ">
            <span className="label-text required">Banner Image</span>
          </label>
          <input
            type="text"
            name="bannerImg"
            defaultValue={bannerUrl}
            className="input input-bordered"
            required
          />
        </div>

        
    {/* job title */}
        <div className="form-control">
          <label className="label">
            <span className="required label-text">Job Title</span>
          </label>
          <input
            type="text"
            name="jobTitle"
            defaultValue={jobTitle}
            className="input input-bordered"
            required
          />
        </div>

    {/* job category */}
        {/* <div className="form-control">
          <label className="label">
            <span className="required label-text">Job Category</span>
          </label>
          <select name="category" className="input input-bordered" required>
            <option value="onsite">Onsite</option>
            <option value="remote">Remote</option>
            <option value="hybrid">Hybrid</option>
            <option value="part time">Part time</option>
          </select>
        </div> */}

        <input
  type="text"
  name="salaryRange"
  defaultValue={salaryRange}
  className="input input-bordered"
  required
/>
        
     




        <div className="form-control mt-6">
          <button type="submit" className="btn bg-customOrange text-white">
            Update Product
          </button>
        </div>
      </form>
    </div>
        </div>
      </dialog>
    </div>
  );
};

export default UpdateJob;



