import Lottie from "lottie-react";
import UseAppliedJobs from "../../hooks/UseAppliedJobs";
import Loading from "../../assets/animation/icons8-search.json"
import AppliedJob from "../../components/AppliedJob/AppliedJob";
const AppliedJobs = () => {
    const {isPending, isError, error, appliedJobs} = UseAppliedJobs()
    console.log(appliedJobs);


    if(isPending){
      return <Lottie className="w-20" animationData={Loading}></Lottie>
  }

  if(isError){
      return <p>{error.message}</p>
  }
  return (
    <div>
      {
        appliedJobs?.map(appliedjob => <AppliedJob key={appliedJobs._id} appliedjob={appliedjob}></AppliedJob>)
      }
    </div>
  );
};

export default AppliedJobs;