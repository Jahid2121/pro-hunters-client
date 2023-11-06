import Tabu from "./Tabu/Tabu";

const Categories = () => {
  return (
    <div className="bg-orange-50 mt-9">
    <p className="text-center mt-20 text-xl text-customOrange">Choose Categories</p>
        <h2 className="text-center text-4xl font-bold ">Choose Categories</h2>
    <div className="flex mx-auto mt-16">
    <Tabu />
    </div>
    </div>
  );
};

export default Categories;