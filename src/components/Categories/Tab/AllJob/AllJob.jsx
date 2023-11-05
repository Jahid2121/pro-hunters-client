// import { useEffect, useState } from "react";
import Lottie from "lottie-react";
import Job from "./Job/Job";
import { useQuery } from "@tanstack/react-query";
import Loading from "../../../../assets/animation/icons8-search.json"
import UseJobs from "../../../../hooks/UseJobs/UseJobs";
const AllJob = () => {
    // const [allJob, setAllJob] = useState()

    // useEffect(()=> {
    //     fetch('http://localhost:5000/jobs')
    //     .then(res => res.json())
    //     .then(data => setAllJob(data))
    // },[])

    const {isPending, isError, error, allJob} = UseJobs()

    if(isPending){
        return <Lottie className="w-20" animationData={Loading}></Lottie>
    }

    if(isError){
        return <p>{error.message}</p>
    }

  return (
    <div className="grid grid-cols-3 mx-auto gap-1">
    {allJob?.map(job => <Job key={job._id} job={job}></Job>)}
    
    </div>
  );
};

export default AllJob;