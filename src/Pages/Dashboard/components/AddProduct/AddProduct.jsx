import "../AddProduct/AddProduct.css"
const AddProduct = () => {

  return (
    <div>
        <h2 className="text-center  my-9 font-bold text-4xl text-customOrange">Add a Product</h2>
         <form className="card-body">

        <div className="form-control">
          <label className="label">
            <span className="required label-text">Name</span>
          </label>
          <input type="text" placeholder="name" className="input input-bordered" required />
        </div>
        <div className="form-control ">
          <label className="label ">
            <span className="label-text required">Banner Image</span>
          </label>
          <input type="text" placeholder="Image URL" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="required label-text">Job Title</span>
          </label>
          <input type="text" placeholder="Job title" className="input input-bordered" required />

        </div>
        <div className="form-control">
          <label className="label">
            <span className="required label-text">Job Category</span>
          </label>
          <select name="" id="">
            <option value="Onsite">Onsite</option>
            <option value="Remote">Remote</option>
            <option value="Hybrid">Hybrid</option>
            <option value="Part time">Part time</option>
          </select>

        </div>
        <div className="form-control">
          <label className="label">
            <span className="required label-text">Salary range</span>
          </label>
          <input type="text" placeholder="Salary range" className="input input-bordered" required />
        </div>

        {/* Job description */}
        <div className="form-control">
          <label className="label">
            <span className="required label-text"> Job Description</span>
          </label>
          <textarea required draggable="false" placeholder=" Job Description" name="" id="" cols="30" rows="10"></textarea>
        </div>
        {/*  Application Deadline */}
        <div className="form-control">
          <label className="label">
            <span className="required label-text">Application Deadline </span>
          </label>
          <input type="text" placeholder="Application Deadline " className="input input-bordered" required />
        </div>
        {/*   Job Applicants Number */}
        <div className="form-control">
          <label className="label">
            <span className="required label-text"> Job Applicants Number</span>
          </label>
          <select defaultValue={0} name="" id="">
            <option value="0">0</option>
          </select>
        </div>

        <div className="form-control mt-6">
          <button className="btn bg-customOrange text-white">Add Product</button>
        </div>
      </form>
    </div>
  );
};

export default AddProduct;