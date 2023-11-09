import { useQuery } from "@tanstack/react-query";

const UseCategory = () => {
    const {isPending, isError, error, data: allJob} = useQuery({
        queryKey: ['allJob'],
        queryFn: async () => {
            const res = await fetch('https://pro-hunters-server-m77bccise-jahids-projects-c60982d1.vercel.app/jobs?jobCategory=Remote')
         return res.json()
        }
    })
  return {isPending, isError, error, allJob};
};

export default UseCategory;