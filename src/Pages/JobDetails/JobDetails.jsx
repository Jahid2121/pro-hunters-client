import { useLoaderData } from "react-router-dom";
import Modal from "../../components/Modal/Modal";

const JobDetails = () => {
    const job = useLoaderData()
    const {_id,bannerUrl,jobTitle,loggedInUserName,jobCategory,salaryRange,jobDescription,jobPostingDate,applicationDeadline,jobApplicantsNumber} = job;
  return (
    <div>
   <div className="flex flex-col mx-auto items-center   ">
   <img className="w-[900px]" src={bannerUrl} alt="" />
   </div>
    <div className=" min-h-screen flex flex-col mx-auto top-16 w-[900px] h-[1000px]">
        <div className="flex ">
        <div className="flex flex-grow relative">
        <img className="w-32  h-32" src={'https://i.ibb.co/WtgrLP3/icons8-vk-48.png'} alt="" />
        <p className="mt-5  left-32 absolute rounded-lg text-customOrange p-1 bg-orange-100">{jobCategory}</p>
        <div>
        <h2 className="mt-14 font-bold text-2xl">{jobTitle}</h2>
        <p className="text-customGray">Posted By:{loggedInUserName}</p>
        </div>
        
        </div>

        <div>
        <div className="mt-8">
        <Modal></Modal>
        </div>
        <p className="text-xs text-customGray">Application deadline: {applicationDeadline}</p>
        <p className="text-customOrange text-xs">Applicants : {jobApplicantsNumber}</p>
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