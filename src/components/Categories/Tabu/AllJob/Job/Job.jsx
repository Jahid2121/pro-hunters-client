const Job = ({ job }) => {
  const {
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
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <a href="#">
        <img className="rounded-t-lg w-[350px]  h-60" src={bannerUrl} alt="" />
      </a>
      <p>{jobCategory}</p>
      <div className="p-5">
        <a href="#">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {jobTitle}
          </h5>
          <div className="flex gap-3 mb-3">
            <p>Posted by : {loggedInUserName}</p>
            <p>{jobPostingDate}</p>
          </div>
          <p>DeadLine : {applicationDeadline}</p>
        </a>
        <p className="text-gray-700 dark:text-gray-400">{salaryRange}</p>
        <p>Total Applicants : {jobApplicantsNumber}</p>
        <a
          href="#"
          className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-customOrange rounded-lg hover:bg-customOrange focus:ring-4 focus:outline-none focus:ring-customOrange dark:bg-customOrange dark:hover:bg-customOrange dark:focus:ring-customOrange"
        >
          View Details
          <svg
            className="w-3.5 h-3.5 ml-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </a>
      </div>
    </div>
  );
};

export default Job;
