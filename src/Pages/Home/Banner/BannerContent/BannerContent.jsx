const BannerContent = () => {
  return (
    <div className=" md:ml-10 mt-3">
      <h2 className=" text-3xl md:text-5xl mb-5 font-bold">Find the job of <br /> your <span className="text-customOrange">Dreams</span></h2>
      <p className="text-customGray text-[10px] md:text-xl mb-3">
        Find You New Job Today! New Job Postings Everyday <br /> just for you, browse
        the job you want and apply <br /> wherever you want
      </p>

      <div className="rounded-full pl-0 md:pl-3  bg-white">
      <input className="p-1 border-none" type="search" name="" id="" placeholder="Job title or keyword" />
      <button className="px-3 py-1 rounded-full bg-customOrange text-white">Search</button>
      </div>
    </div>
  );
};

export default BannerContent;
