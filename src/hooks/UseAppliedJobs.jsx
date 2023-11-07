import { useQuery } from "@tanstack/react-query";
import UseAuth from "./UseAuth";

const UseAppliedJobs = () => {
    const {user} = UseAuth()
    const {isPending, isError, error, data: appliedJobs} = useQuery({
        queryKey: ['appliedJobs'],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/appliedJobs?email=${user?.email}`)
         return res.json()
        }
    })
  return {isPending, isError, error, appliedJobs};
};

export default UseAppliedJobs;