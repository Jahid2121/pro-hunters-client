import { useLoaderData } from "react-router-dom";

const JobDetails = () => {
    const job = useLoaderData()
    const {_id,bannerUrl,jobTitle,loggedInUserName,jobCategory,salaryRange,jobDescription,jobPostingDate,applicationDeadline,jobApplicantsNumber} = job;
  return (
    <div>
   <div className="">
   <div className="flex flex-col mx-auto items-center   ">
   <img className="w-[900px]" src={bannerUrl} alt="" />
   </div>
    <div className="bg-orange-50 min-h-screen flex flex-col mx-auto top-16 w-[900px] h-[1000px]">
        {/* <img src={user.image} alt="" /> */}
        
    </div>
   </div>
    </div>
  );
};

export default JobDetails;