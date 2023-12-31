import axios from "axios";
import { useEffect, useState } from "react";
import Job from "../Job";

const Onsite = () => {
    const [Onsite, setOnsite] = useState()
    useEffect(()=> {
        axios.get('http://localhost:5000/jobs?jobCategory=On%20Site')
        .then(data => {
            setOnsite(data.data);
        })
    },[])
  return (
    <div>
    {setOnsite?.map(job => <Job key={job._id} job={job}></Job>)}
    </div>
  );
};

export default Onsite;