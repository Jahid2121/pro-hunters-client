const BannerContent = () => {
  return (
    <div className="ml-10">
      <h2>Find the job of your Dreams</h2>
      <p>
        Find You New Job Today! New Job Postings Everyday just for you, browse
        the job you want and apply wherever you want
      </p>

      <div className="rounded-full pl-3  bg-white">
      <input className="p-1" type="search" name="" id="" placeholder="Job title or keyword" />
      <button className="px-3 py-1 rounded-full bg-customOrange text-white">Search</button>
      </div>
    </div>
  );
};

export default BannerContent;
