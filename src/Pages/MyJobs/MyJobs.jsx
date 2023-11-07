import { useLoaderData } from "react-router-dom";
import Myjob from "./Myjob/Myjob";

const MyJobs = () => {
    const myJobs = useLoaderData()
  return (
    <div>
        {
            myJobs?.map(job => <Myjob key={job._id} job={job}></Myjob>)
        }
    </div>
  );
};

export default MyJobs;