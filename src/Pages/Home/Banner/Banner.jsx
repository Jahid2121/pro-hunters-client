import BannerContent from "./BannerContent/BannerContent";
import BannerImg from "./BannerImg/BannerImg";

const Banner = () => {
  return (
    <div className="flex flex-col md:flex-row gap-6 md:gap-48  bg-orange-50 md:pt-10 pl-10">
    <BannerContent />
    <BannerImg />
    </div>
  );
};

export default Banner;