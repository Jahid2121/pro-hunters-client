import Lottie from "lottie-react";
import four0four from "../../assets/animation/four0four.json"
import { Link } from "react-router-dom";
const ErrorPage = () => {
  return (
    <div className="max-w-screen-sm relative mx-auto">
    <Lottie animationData={four0four}></Lottie>
    <Link to="/"><button className="absolute right-[240px]  bg-customOrange px-5 py-3 rounded-full text-white bottom-16">Go Back To Home</button></Link>
    </div>
  );
};

export default ErrorPage;