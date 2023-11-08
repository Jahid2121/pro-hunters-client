import { Card } from "flowbite-react";
import { useEffect, useState } from "react";

const Blogs = () => {

    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await fetch('./Blogs.json'); // Path to the JSON file in the public folder
            const data = await response.json();
            setBlogsData(data);
          } catch (error) {
            console.error('Error fetching data: ', error);
          }
        };
    
        fetchData();
      }, []);
      const [blogsData, setBlogsData] = useState([]);
      console.log(blogsData);
    return (
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 ">
        {blogsData.map(blog => (
          <Card key={blog.id} >
            <img className="w-[500px] h-[400px]" src={blog.imageUrl} alt="" />
            <a>
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{blog.title}</h5>
            </a>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{blog.description}</p>
            <a  className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-orange-700 rounded-lg hover:bg-orange-800 focus:ring-4 focus:outline-none focus:ring-orange-300 dark:bg-orange-600 dark:hover:bg-orange-700 dark:focus:ring-orange-800">
              Read more
              <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
              </svg>
            </a>
          </Card>
        ))}
      </div>
    );
  };
  
  export default Blogs;