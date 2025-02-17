"use client";
import { FaInstagram, FaFacebook } from "react-icons/fa";
import { AiFillTikTok } from "react-icons/ai";

const SocialMediaSection = () => {
  const imageItem = [
    {
      name: "Image",
      image:
        "https://plus.unsplash.com/premium_photo-1705169612261-2cf0407141c3?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Image",
      image:
        "https://plus.unsplash.com/premium_photo-1705169612261-2cf0407141c3?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Image",
      image:
        "https://plus.unsplash.com/premium_photo-1705169612261-2cf0407141c3?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Image",
      image:
        "https://plus.unsplash.com/premium_photo-1705169612261-2cf0407141c3?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];

  return (
    <div className="px-5 py-10">
      {/* Title */}
      <h1 className="text-center text-2xl font-bold mb-6">
        Follow Us On Our Social Networks
      </h1>

      {/* Social Icons */}
      <div className="flex justify-center items-center gap-6 mb-8">
        <FaInstagram size={24} className="cursor-pointer hover:text-pink-500" />
        <FaFacebook size={24} className="cursor-pointer hover:text-blue-600" />
        <AiFillTikTok size={26} className="cursor-pointer hover:text-black" />
      </div>

      {/* Image Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {imageItem.map((item, index) => (
          <img
            key={index}
            src={item.image}
            alt={item.name}
            className="w-full h-96 object-cover rounded-lg shadow-md"
          />
        ))}
      </div>
    </div>
  );
};

export default SocialMediaSection;
