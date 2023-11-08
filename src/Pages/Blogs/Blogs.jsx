import { useEffect, useState } from "react";

const Blogs = () => {
    const [blogsData, setBlogsData] = useState([]);
    console.log(blogsData);
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


  return (
    <div>
    <h2>  Welcome to Blogs </h2>
    </div>
  );
};

export default Blogs;