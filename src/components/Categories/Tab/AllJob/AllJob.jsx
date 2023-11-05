import { useEffect, useState } from "react";
import Job from "./Job/Job";

const AllJob = () => {
    const [allJob, setAllJob] = useState()

    useEffect(()=> {
        fetch('http://localhost:5000/jobs')
        .then(res => res.json())
        .then(data => setAllJob(data))
    },[])
  return (
    <div>
    {allJob?.map(job => <Job key={job._id} job={job}></Job>)}
    </div>
  );
};

export default AllJob;