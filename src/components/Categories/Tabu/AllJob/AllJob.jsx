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
        if(jobCategory === "remote"){
            axios.get('http://localhost:5000/jobs?jobCategory=remote')
            .then(data => setRenderedJobs(data.data))
        }
        else if(jobCategory === "hybrid"){
            axios.get('http://localhost:5000/jobs?jobCategory=hybrid')
            .then(data => setRenderedJobs(data.data))
        }
        else if(jobCategory === "part time"){
            axios.get('http://localhost:5000/jobs?jobCategory=part time')
            .then(data => setRenderedJobs(data.data))
        }
        else if(jobCategory === "on site" || jobCategory === "onsite"){
            axios.get('http://localhost:5000/jobs?jobCategory=onsite')
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