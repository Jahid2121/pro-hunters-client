
import Swal from "sweetalert2";
import UpdateJob from "../../UpdateJob/UpdateJob";

const Myjob = ({ job }) => {
  const {
    _id,
    bannerUrl,
    jobTitle,
    loggedInUserName,
    jobCategory,
    salaryRange,
    jobDescription,
    jobPostingDate,
    applicationDeadline,
    jobApplicantsNumber,
  } = job;

  const handleDelete = (_id) => {
    console.log(_id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/jobs/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });
            }
          });
      }
    });
  };

  return (
    <div className="overflow-x-auto">
      <table className="table">
        <tbody>
          {/* row 1 */}
          <tr>
            <th>
              <label>
                <input type="checkbox" className="checkbox" />
              </label>
            </th>
            <td>
              <div className="flex items-center space-x-3">
                <div className="avatar w-40">
                  <div className="rounded w-24 h-24">
                    <img src={bannerUrl} alt="" />
                  </div>
                </div>
                <div>
                  <div className="font-bold">{loggedInUserName} </div>
                  <div className="text-sm opacity-50">United States</div>
                </div>
              </div>
            </td>
            <td>
              Zemlak, Daniel and Leannon
              <br />
              <span className="badge badge-ghost badge-sm">
                Desktop Support Technician
              </span>
            </td>
            <button
              onClick={() => handleDelete(_id)}
              className="btn mt-9 bg-red-700 w-10 h-4 text-white  btn-square btn-outline"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            <th>
                {/* Open the modal using document.getElementById('ID').showModal() method */}
                <button
                  className="btn bg-customOrange text-white"
                  onClick={() =>
                    document.getElementById("my_modal_4").showModal()
                  }
                >
                Update
                </button>

               <UpdateJob  job={job}/>
            </th>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Myjob;
