import { useQuery } from "@tanstack/react-query";
import UseAuth from "./UseAuth";

const UseAppliedJobs = () => {
    const {user} = UseAuth()
    const {isPending, isError, error, data: appliedJobs} = useQuery({
        queryKey: ['appliedJobs'],
        queryFn: async () => {
            const res = await fetch(`https://pro-hunters-server-m77bccise-jahids-projects-c60982d1.vercel.app/appliedJobs?email=${user?.email}`,  {withCredentials: true})
         return res.json()
        }
    })
  return {isPending, isError, error, appliedJobs};
};

export default UseAppliedJobs;