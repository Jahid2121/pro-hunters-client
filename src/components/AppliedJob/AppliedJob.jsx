import { Link } from "react-router-dom";

const AppliedJob = ({ appliedjob }) => {
  const {
    name,
    email,
    jobTitle,
    jobCategory,
    AppliedDate,
    logoImage,
  } = appliedjob;
  return (
    <div className="overflow-x-auto">
      <table className="table">

        <tbody>
          {/* row 1 */}
          <tr>
            <th>
              <label>
              </label>
            </th>
            <td>
              <div className="flex items-center space-x-3">
                <div className="avatar">
                <div className="rounded relative w-24 h-24">
                    <img className="absolute -top-4 -left-6"
                      src={logoImage}
                      alt=""
                    />
                  </div>
                </div>
                <div>
                  <div className="font-bold">{jobTitle} </div>
                </div>
              </div>
            </td>
            <td>
              <span className="badge badge-ghost badge-sm">
                {jobCategory}
              </span>
            </td>
            <td>Apply {AppliedDate}</td>
            <th>
             {/* <Link> <button className="btn btn-ghost bg-customOrange text-white btn-xs">details</button></Link> */}
            </th>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default AppliedJob;
