import { useEffect } from "react";
import { useState } from "react";
import { useContext } from "react";
import { AuthContext } from "../../config/AuthProvider";
import axios from "axios";
import Myjob from "./Myjob/Myjob";
import UseAuth from "../../hooks/UseAuth";
import { Helmet } from "react-helmet-async";

const MyJobs = () => {


  const { userName } = UseAuth()
  const [myJobs, setMyJobs] = useState([]);
  console.log(myJobs);

  const url = `https://pro-hunters-server-m77bccise-jahids-projects-c60982d1.vercel.app/jobs?loggedInUserName=${userName}`;
  useEffect(() => {

      axios.get(url)
      .then(res => {
        setMyJobs(res.data);
      })

  }, [url]);

  return (
    <div>
      <Helmet>
        <title>My Jobs</title>
      </Helmet>
      <div className=" mt-32  items-start">
      <div className="overflow-x-auto ">
        <table className="table  ">
          {/* head */}
          <thead  className="text-black">
            <tr>
                <hr />
                <div className="w-full  text-center flex justify-center items-center mx-auto  gap-8">
            <th></th>
            
              <th className=" grow text-xl">Product</th>
              <th className="text-xl ">Price</th>
              
                </div>
            </tr>
          </thead>
          <tbody>

          {
            myJobs?.map(job => <Myjob key={job._id} job={job}></Myjob>)
        }
</tbody>

</table>
</div>

</div>



          
        
    </div>
  );
};

export default MyJobs;