import img1 from "../../assets/Pictures/1200px-Airbnb_Logo_Bélo 1.png"
import img2 from "../../assets/Pictures/8867 1.png"
import img3 from "../../assets/Pictures/download (6) 1.png"
import img4 from "../../assets/Pictures/googlelogo_color_160x56dp 1.png"


const Companies = () => {
  return (
    <div>
    <h2 className="text-center text-2xl mt-16">Join Most Well Known <span className="text-customOrange">Companies</span> Around The World</h2>
    <div className="image flex gap-32 mt-10">
        <img src={img1} alt="" />
        <img src={img2} alt="" />
        <img src={img3} alt="" />
        <img src={img4} alt="" />
    </div>
    </div>
  );
};

export default Companies;