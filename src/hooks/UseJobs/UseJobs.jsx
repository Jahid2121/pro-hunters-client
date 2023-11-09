import { useQuery } from "@tanstack/react-query";

const UseJobs = () => {
    const {isPending, isError, error, data: allJobs} = useQuery({
        queryKey: ['allJob'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/jobs')
         return res.json()
        }
    })
  return {isPending, isError, error, allJobs};
};

export default UseJobs;