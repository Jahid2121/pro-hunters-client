import { useQuery } from "@tanstack/react-query";

const UseJobs = () => {
    const {isPending, isError, error, data: allJob} = useQuery({
        queryKey: ['allJob'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/jobs')
         return res.json()
        }
    })
  return {isPending, isError, error, allJob};
};

export default UseJobs;