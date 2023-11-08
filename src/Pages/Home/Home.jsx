import NewsLetter from "../../assets/NewsLetter/NewsLetter";
import Categories from "../../components/Categories/Categories";
import Companies from "../Companies/Companies";
import Banner from "./Banner/Banner";


const Home = () => {
  return (
    <>
    <Banner />
    <Companies></Companies>
    <Categories />
    <NewsLetter />
    </>
  );
};

export default Home;