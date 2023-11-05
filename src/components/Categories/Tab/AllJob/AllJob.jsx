// import { useEffect, useState } from "react";
import Job from "./Job/Job";
import { useQuery } from "@tanstack/react-query";

const AllJob = () => {
    // const [allJob, setAllJob] = useState()

    // useEffect(()=> {
    //     fetch('http://localhost:5000/jobs')
    //     .then(res => res.json())
    //     .then(data => setAllJob(data))
    // },[])

    const {data: allJob} = useQuery({
        queryKey: ['allJob'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/jobs')
            return res.json()
        }
    })
  return (
    <div>
    {allJob?.map(job => <Job key={job._id} job={job}></Job>)}
    </div>
  );
};

export default AllJob;