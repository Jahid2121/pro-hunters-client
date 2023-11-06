import axios from "axios";
import "../AddProduct/AddProduct.css";

const AddProduct = () => {
  const handleAddProduct = (e) => {
    e.preventDefault();
    const form = e.target;
    const bannerPhoto = form.bannerImg.value;
    const title = form.jobTitle.value;
    const name = form.name.value;
    const category = form.category.value;
    const salary = form.salaryRanger.value;
    const responsibility = form.responsibility.value;
    const requirement = form.requirement.value;
    const jobPostingDate = form.jobPostingDate.value;
    const Deadline = form.applicationDeadline.value;
    const jobApplicantsNumber = form.jobApplicantsNumber.value;
    const job = {
      bannerUrl: bannerPhoto,
      jobTitle: title,
      loggedInUserName: name,
      jobCategory: category,
      salaryRange: salary,
      jobDescription: [
        {
          responsibility: responsibility, 
          requirement: requirement
        
        }
      ],
      jobPostingDate: jobPostingDate,
      applicationDeadline: Deadline,
      jobApplicantsNumber: jobApplicantsNumber,
    };
    axios.post("http://localhost:5000/jobs", job)
    .then(res => {
      console.log(res.data);
    })
    
  };

  return (
    <div>
      <h2 className="text-center my-9 font-bold text-4xl text-customOrange">Add a Product</h2>
      <form onSubmit={handleAddProduct} className="card-body">
    {/* img */}
        <div className="form-control ">
          <label className="label ">
            <span className="label-text required">Banner Image</span>
          </label>
          <input
            type="text"
            name="bannerImg"
            placeholder="Image URL"
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
            placeholder="Job title"
            className="input input-bordered"
            required
          />
        </div>

        {/* name */}
        <div className="form-control">
          <label className="label">
            <span className="required label-text">Name</span>
          </label>
          <input type="text" placeholder="name" name="name" className="input input-bordered" required />
        </div>
    {/* job category */}
        <div className="form-control">
          <label className="label">
            <span className="required label-text">Job Category</span>
          </label>
          <select name="category" className="input input-bordered" required>
            <option value="Onsite">Onsite</option>
            <option value="Remote">Remote</option>
            <option value="Hybrid">Hybrid</option>
            <option value="Part time">Part time</option>
          </select>
        </div>

      {/* salaryRange */}
        <div className="form-control">
          <label className="label">
            <span className="required label-text">Salary range</span>
          </label>
          <input
            type="text"
            name="salaryRanger"
            placeholder="Salary range"
            className="input input-bordered"
            required
          />
        </div>
        
      {/* jobDescription */}
        <div className="form-control">
          <label className="label">
            <span className="required label-text"> Job Description</span>
          </label>
          <textarea
            required
            draggable="false"
            placeholder="responsibility"
            name="responsibility"
            id=""
            cols="30"
            rows="10"
            className="input input-bordered"
          ></textarea>
          <textarea
            required
            draggable="false"
            placeholder="requirement"
            name="requirement"
            id=""
            cols="30"
            rows="10"
            className="input input-bordered"
          ></textarea>
        </div>

      {/* jobPostingDate */}
        <div className="form-control">
          <label className="label">
            <span className="required label-text">job Posting Date</span>
          </label>
          <input
            required
            draggable="false"
            placeholder="jobPostingDate"
            name="jobPostingDate"
            className="input input-bordered"
          ></input>
        </div>

      {/* applicationDeadline */}
        <div className="form-control">
          <label className="label">
            <span className="required label-text"> applicationDeadline</span>
          </label>
          <input
            required
            placeholder="applicationDeadline"
            name="applicationDeadline"
            id=""
            className="input input-bordered"
          ></input>
        </div>

        <div className="form-control">
          <label className="label">
            <span className="required label-text"> Job Applicants Number</span>
          </label>
          <select defaultValue={0} className="input input-bordered" name="jobApplicantsNumber" required>
            <option value="0">0</option>
          </select>
        </div>

        <div className="form-control mt-6">
          <button type="submit" className="btn bg-customOrange text-white">
            Add Product
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddProduct;
