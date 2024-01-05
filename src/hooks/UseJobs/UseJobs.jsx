import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../useAxiosPublic";

const UseJobs = () => {
  const axiosPublic = useAxiosPublic()
    const {isPending, isError, error, data: allJobs} = useQuery({
        queryKey: ['allJob'],
        queryFn: async () => {
            const res = await axiosPublic.get('/jobs')
         return res.data;
        }
    })
  return {isPending, isError, error, allJobs};
};

export default UseJobs;