import BannerContent from "./BannerContent/BannerContent";
import BannerImg from "./BannerImg/BannerImg";

const Banner = () => {
  return (
    <div className="flex bg-orange-50">
    <BannerContent />
    <BannerImg />
    </div>
  );
};

export default Banner;