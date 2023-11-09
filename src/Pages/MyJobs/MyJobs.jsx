import Myjob from "./Myjob/Myjob";
import UseAuth from "../../hooks/UseAuth";

const MyJobs = () => {
    const {myJobs} = UseAuth();
    console.log(myJobs);

  return (
    <div>
        {
            myJobs?.map(job => <Myjob key={job._id} job={job}></Myjob>)
        }
    </div>
  );
};

export default MyJobs;