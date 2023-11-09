import UseAppliedJobs from "../../hooks/UseAppliedJobs";
import AppliedJob from "../../components/AppliedJob/AppliedJob";
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import UseAuth from "../../hooks/UseAuth";
import { useContext } from "react";
import { AuthContext } from "../../config/AuthProvider";
const AppliedJobs = () => {
    // const { isError, error, appliedJobs} = UseAppliedJobs()
    const { user } = useContext(AuthContext);
    const [appliedJobs, setAppliedJobs] = useState([]);

    const url = `http://localhost:5000/appliedJobs?email=${user?.email}`;
    useEffect(() => {

        axios.get(url, {withCredentials: true})
        .then(res => {
          setAppliedJobs(res.data);
        })

    }, [url]);






    return (
      <div>
        {appliedJobs?.map(appliedjob => (
          <AppliedJob key={appliedjob._id} appliedjob={appliedjob}></AppliedJob>
        ))}
      </div>
    );
};

export default AppliedJobs;