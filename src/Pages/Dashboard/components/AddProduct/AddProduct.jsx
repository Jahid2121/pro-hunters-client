import axios from "axios";
import "../AddProduct/AddProduct.css";
import  { useEffect, useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import UseAuth from "../../../../hooks/UseAuth";
import toast from "react-hot-toast";



const AddProduct = () => {
  const {logo, userName} = UseAuth()
  const [startDate, setStartDate] = useState(new Date());
  const [formattedDate, setFormattedDate] = useState(null);

  useEffect(() => {
    // Format the current date
    const currentDate = new Date();
    const formattedDate = formatDate(currentDate);
    setFormattedDate(formattedDate);
  }, []);

  function formatDate(date) {
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    return `${month}/${day}/${year}`;
  }

  

  
  const handleAddProduct = (e) => {
    e.preventDefault();
    const form = e.target;
    const bannerPhoto = form.bannerImg.value;
    const logoImage = form.logoImg.value
    const title = form.jobTitle.value;
    const name = form.name.value;
    const category = form.category.value;
    const salary = form.salaryRanger.value;
    const responsibility = form.responsibility.value;
    const requirement = form.requirement.value;
    const jobPostingDate = form.jobPostingDate.value;
    const Deadline = form.applicationDeadline.value;
    const jobApplicantsNumber = parseInt(form.jobApplicantsNumber.value);
    const job = {
      bannerUrl: bannerPhoto,
      jobTitle: title,
      loggedInUserName: name,
      jobCategory: category,
      salaryRange: salary,
      logoImage: logoImage,
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
    console.log(job);
    axios.post("https://pro-hunters-server-m77bccise-jahids-projects-c60982d1.vercel.app/jobs", job)
    .then(res => {
      const data = res.data;
      console.log(data);
      if(data.insertedId){
        toast.success("Job Added Successfully")
      }
    })
    
  };

  return (
    <div>
      <h2 className="text-center my-9 font-bold text-4xl text-customOrange">Add a Product</h2>
      <form onSubmit={handleAddProduct} className="card-body">

        {/* name */}
        <div className="form-control">
          <label className="label">
            <span className="required label-text">Name</span>
          </label>
          <input type="text" placeholder="name"
          defaultValue={userName}
          disabled
          name="name" className="input input-bordered" required />
        </div>

    {/*banner img */}
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
    {/*logo img */}
        <div className="form-control ">
          <label className="label ">
            <span className="label-text required">Logo</span>
          </label>
          <input
            type="text"
            name="logoImg"
            defaultValue={logo}
            disabled
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

    {/* job category */}
        <div className="form-control">
          <label className="label">
            <span className="required label-text">Job Category</span>
          </label>
          <select name="category" className="input input-bordered" required>
            <option value="onsite">Onsite</option>
            <option value="remote">Remote</option>
            <option value="hybrid">Hybrid</option>
            <option value="part time">Part time</option>
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
            defaultValue={formattedDate}
            disabled
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
          <DatePicker
           selected={startDate}
           name="applicationDeadline"
          //  minDate={new Date()}
            onChange={(date) => setStartDate(date)}
          />

         
        </div>

      {/* job applicants number */}
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
