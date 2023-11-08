import { useEffect, useState } from "react";
import UseJobs from "../../hooks/UseJobs/UseJobs";
import Filter from "../../components/Filter/Filter";
import axios from "axios";
import SingleJob from "../../components/SingleJob/SingleJob";

const AllJobs = () => {
    const [filter, setFilter] = useState()
    const {isPending, isError, error, allJobs} = UseJobs()
    console.log(filter);

    const [display, setDisplay] = useState(null)
    

    useEffect(() => {
        if(filter === "remote"){
            axios.get('http://localhost:5000/jobs?jobCategory=remote')
            .then(data => setDisplay(data.data))
        }
        else if(filter === "hybrid"){
            axios.get('http://localhost:5000/jobs?jobCategory=hybrid')
            .then(data => setDisplay(data.data))
        }
        else if(filter === "part time" || filter === "parttime"){
            axios.get('http://localhost:5000/jobs?jobCategory=part time')
            .then(data => setDisplay(data.data))
        }
        else if(filter === "on site" || filter === "onsite"){
            axios.get('http://localhost:5000/jobs?jobCategory=on site')
            .then(data => setDisplay(data.data))
        }

    },[filter ])



    if(isError){
        return <p>{error.message}</p>
    }

  return (
    <div>
    <div className="flex justify-end my-9">
    <Filter setFilter={setFilter} filter={filter}></Filter>
    </div>
    {
        display ? display?.map(job => <SingleJob key={job._id} job={job}></SingleJob>) : allJobs?.map(job => <SingleJob key={job._id} job={job}></SingleJob>)
    }

    
    </div>
  );
};

export default AllJobs;