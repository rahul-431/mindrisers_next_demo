"use client"
import { SiBeekeeperstudio } from "react-icons/si";
import { LiaWolfPackBattalion } from "react-icons/lia";
import { TbBrandDiscord } from "react-icons/tb";
import { TbBrandAngularFilled } from "react-icons/tb";
import { FaGitlab } from "react-icons/fa";
import { FaReact } from "react-icons/fa";

const LogoSection = () => {
  return (
    <div className="m-10 lg:mt-10">
      <div className="w-full h-[1px] bg-gray-300 my-4"></div>
      <div className="grid lg:grid-cols-6 md:grid-cols-3 grid-cols-2 mx-28 my-10">
        <div className="flex justify-center">
        <SiBeekeeperstudio size={60} className="hover:animate-bounce cursor-pointer" />
        </div>
        <div className="flex justify-center">
        <LiaWolfPackBattalion size={70} className="hover:animate-bounce cursor-pointer" />
        </div>
        <div className="flex justify-center">
        <TbBrandDiscord size={70} className="hover:animate-bounce cursor-pointer" />
        </div>
        <div className="flex justify-center">
        <TbBrandAngularFilled size={70} className="hover:animate-bounce cursor-pointer" />
        </div>
        <div className="flex justify-center">
        <FaGitlab size={70} className="hover:animate-bounce cursor-pointer" />
        </div>
        <div className="flex justify-center">
        <FaReact size={70} className="hover:animate-bounce cursor-pointer" />
        </div>
      </div>
      <div className="w-full h-[1px] bg-gray-300 my-4"></div>


    </div>
  )
}
export default LogoSection