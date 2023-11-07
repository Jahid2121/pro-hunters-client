import UseAppliedJobs from "../../hooks/UseAppliedJobs";
import AppliedJob from "../../components/AppliedJob/AppliedJob";
const AppliedJobs = () => {
    const { isError, error, appliedJobs} = UseAppliedJobs()
    console.log(appliedJobs);




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