import { useEffect } from "react";
import UseJobs from "../../hooks/UseJobs/UseJobs";
import Filter from "../../components/Filter/Filter";

const AllJobs = () => {
    const {isError, error, allJobs} = UseJobs()
    console.log(allJobs);
    

    // useEffect(() => {
    //     if(jobCategory === "Remote"){
    //         axios.get('http://localhost:5000/jobs?jobCategory=Remote')
    //         .then(data => setRenderedJobs(data.data))
    //     }
    //     else if(jobCategory === "Hybrid"){
    //         axios.get('http://localhost:5000/jobs?jobCategory=Hybrid')
    //         .then(data => setRenderedJobs(data.data))
    //     }
    //     else if(jobCategory === "Part-Time"){
    //         axios.get('http://localhost:5000/jobs?jobCategory=Part-Time')
    //         .then(data => setRenderedJobs(data.data))
    //     }
    //     else if(jobCategory === "On Site"){
    //         axios.get('http://localhost:5000/jobs?jobCategory=On Site')
    //         .then(data => setRenderedJobs(data.data))
    //     }
    // },[active, jobCategory])



    if(isError){
        return <p>{error.message}</p>
    }

  return (
    <div>
    <Filter></Filter>
    </div>
  );
};

export default AllJobs;