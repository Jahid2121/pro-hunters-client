const SingleJob = ({ job }) => {
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
  return (
    <div className="overflow-x-auto">
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th>
              <label>
                <input type="checkbox" className="checkbox" />
              </label>
            </th>
            <th>Name</th>
            <th>Job</th>
            <th>Favorite Color</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {/* row 1 */}
          <tr>
            <th>
              <label>
                <input type="checkbox" className="checkbox" />
              </label>
            </th>
            <td>
                <div className="avatar w-40">
                  <div className="rounded w-24 h-24">
                    <img className=""
                      src={bannerUrl}
                      alt="Avatar Tailwind CSS Component "
                    />
                  </div>
                </div>
                <div>
                  <div className="font-bold">{name} </div>
                  <div className="text-sm opacity-50">United States</div>
                </div>
            </td>
            <td>
              Zemlak, Daniel and Leannon
              <br />
              <span className="badge badge-ghost badge-sm">
                Desktop Support Technician
              </span>
            </td>
            <td>Purple</td>
            <th>
              <button className="btn btn-ghost btn-xs">details</button>
            </th>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default SingleJob;
