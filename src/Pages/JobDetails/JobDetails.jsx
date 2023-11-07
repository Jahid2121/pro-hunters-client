import { useLoaderData } from "react-router-dom";
import Modal from "../../components/Modal/Modal";
import UseAuth from "../../hooks/UseAuth";
import { useEffect, useState } from "react";

const JobDetails = () => {
  function formatDate(date) {
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = date.getFullYear();
    return `${month}/${day}/${year}`;
  }

  const currentDate = new Date();
  const formattedDate = formatDate(currentDate);
  console.log(formattedDate); 

  const [error, setError] = useState("");
  const { userName } = UseAuth();
  const job = useLoaderData();
  const {
    _id,
    bannerUrl,
    jobTitle,
    loggedInUserName,
    logoImage,
    jobCategory,
    salaryRange,
    jobDescription,
    jobPostingDate,
    applicationDeadline,
    jobApplicantsNumber,
  } = job;

  const isDeadlineOver = applicationDeadline < formattedDate

  
  console.log("deadline", applicationDeadline);
  console.log('deadline over', isDeadlineOver);
  // startdate console = Tue Nov 07 2023 18:31:35 GMT+0600 (Bangladesh Standard Time)
  // applicationDeadline console =

  //   handling modal visibility based on user
  const isUserJobOwner = loggedInUserName === userName;
  useEffect(() => {
    if (isUserJobOwner) {
      setError("You can't apply");
    } else {
      setError("");
    }
  }, [isUserJobOwner]);

  return (
    <div>
      <div className="flex flex-col mx-auto items-center   ">
        <img className="w-[900px]" src={bannerUrl} alt="" />
      </div>
      <div className=" min-h-screen flex flex-col mx-auto top-16 w-[900px] h-[1000px]">
        <div className="flex ">
          <div className="flex flex-grow relative">
            <img className="w-32  h-32" src={logoImage} alt="" />
            <p className="mt-5  left-32 absolute rounded-lg text-customOrange p-1 bg-orange-100">
              {jobCategory}
            </p>
            <div>
              <h2 className="mt-14 font-bold text-2xl">{jobTitle}</h2>
              <p className="text-customGray">Posted By:{loggedInUserName}</p>
            </div>
          </div>

          <div>
            <div className="mt-8">
              {!isUserJobOwner ? (
                <Modal job={job} />
              ) : (
                <button
                  disabled
                  className="btn disabled bg-customOrange text-white"
                >
                  {error}
                </button>
              )}
            </div>
            <p className="text-xs text-customGray">
              Application deadline: {applicationDeadline}
            </p>
            <p className="text-customOrange text-xs">
              Applicants : {jobApplicantsNumber}
            </p>
          </div>
          {/* <div>
            {
                jobDescription?.map(desc => p)
            }
        </div> */}
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
