import { useState } from "react";
import toast from "react-hot-toast";

const NewsLetter = () => {
  const [isSubscribe, setIsSubscribe] = useState()
  const handleSubscribe = () => {
    // Handle subscription logic here
    if(isSubscribe) {
      toast.error("Already subscribed")
    }
    else {
      toast.success('Thank you for subscribing!');
    setIsSubscribe(true)
    }
  };

  return (
    <div className="flex justify-center items-center h-48 bg-orange-500 rounded-lg shadow-lg p-8">
      <div className="text-white text-center">
        <h2 className="text-2xl font-bold mb-4">Subscribe to Our Newsletter</h2>
        <p className="mb-4">Stay updated with our latest news  by subscribing to our newsletter.</p>
        <button
          className="bg-white text-orange-500 hover:bg-yellow-500 hover:text-white py-2 px-4 rounded-full cursor-pointer transition duration-300"
          onClick={handleSubscribe}
        >
          {
            isSubscribe ? "Subscribed" : "Subscribe"
          }
        </button>
      </div>
    </div>
  );
};

export default NewsLetter;
