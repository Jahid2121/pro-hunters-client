// import { useEffect, useState } from "react";
import Lottie from "lottie-react";
import Job from "./Job/Job";
import Loading from "../../../../assets/animation/icons8-search.json"
import UseJobs from "../../../../hooks/UseJobs/UseJobs";
import { useEffect, useState } from "react";
import axios from "axios";
const AllJob = ({active, jobCategory}) => {
    
    

    const {isPending, isError, error, allJobs} = UseJobs()
    const [renderedJobs, setRenderedJobs] = useState()
    useEffect(() => {
        if(jobCategory === "Remote"){
            axios.get('http://localhost:5000/jobs?jobCategory=Remote')
            .then(data => setRenderedJobs(data.data))
        }
        else if(jobCategory === "Hybrid"){
            axios.get('http://localhost:5000/jobs?jobCategory=Hybrid')
            .then(data => setRenderedJobs(data.data))
        }
        else if(jobCategory === "Part-Time"){
            axios.get('http://localhost:5000/jobs?jobCategory=Part-Time')
            .then(data => setRenderedJobs(data.data))
        }
        else if(jobCategory === "On Site"){
            axios.get('http://localhost:5000/jobs?jobCategory=On Site')
            .then(data => setRenderedJobs(data.data))
        }
    },[active, jobCategory])

    if(isPending){
        return <Lottie className="w-20" animationData={Loading}></Lottie>
    }

    if(isError){
        return <p>{error.message}</p>
    }

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 mx-auto gap-1">

    {renderedJobs ? renderedJobs?.map(job => <Job key={job._id} job={job}></Job>)
     :
    allJobs?.map(job => <Job key={job._id} job={job}></Job>)
    }
    
    </div>
  );
};

export default AllJob;