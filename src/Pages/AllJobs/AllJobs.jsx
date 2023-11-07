import { useEffect, useState } from "react";
import UseJobs from "../../hooks/UseJobs/UseJobs";
import Filter from "../../components/Filter/Filter";
import axios from "axios";
import SingleJob from "../../components/SingleJob/SingleJob";

const AllJobs = () => {
    const [filter, setFilter] = useState("all")
    const {isError, error, allJobs} = UseJobs()
    console.log(allJobs);
    console.log(filter);

    const [display, setDisplay] = useState()
    

    useEffect(() => {
        if(filter === "Remote"){
            axios.get('http://localhost:5000/jobs?jobCategory=Remote')
            .then(data => setDisplay(data.data))
        }
        else if(filter === "Hybrid"){
            axios.get('http://localhost:5000/jobs?jobCategory=Hybrid')
            .then(data => setDisplay(data.data))
        }
        else if(filter === "Part-Time"){
            axios.get('http://localhost:5000/jobs?jobCategory=Part-Time')
            .then(data => setDisplay(data.data))
        }
        else if(filter === "On Site"){
            axios.get('http://localhost:5000/jobs?jobCategory=On Site')
            .then(data => setDisplay(data.data))
        }
    },[filter ])



    if(isError){
        return <p>{error.message}</p>
    }

  return (
    <div>
    <Filter setFilter={setFilter} filter={filter}></Filter>
    {
        display ? display?.map(job => <SingleJob key={job._id} job={job}></SingleJob>) : allJobs?.map(job => <SingleJob key={job._id} job={job}></SingleJob>)
    }

    
    </div>
  );
};

export default AllJobs;