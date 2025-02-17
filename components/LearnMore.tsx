"use client";
import { LuPlane } from "react-icons/lu";
import { FaAngleRight } from "react-icons/fa6";
import { MdPayment } from "react-icons/md";
import { TbTruckReturn } from "react-icons/tb";

const LearnMore = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 lg:gap-2  px-5 my-14 text-center lg:mx-44 lg:my-10">
      {/* Free Shipping */}
      <div className="flex flex-col items-center space-y-3 max-w-xs mx-auto">
        <LuPlane size={40} />
        <h1 className="text-lg lg:text-xl font-bold">Free Worldwide Shipping</h1>
        <p className="text-gray-500">On all orders over Rs.7000</p>
        <button className="p-2 text-black flex items-center gap-2 hover:text-yellow-600 font-semibold">
          Learn More <FaAngleRight />
        </button>
      </div>

      {/* Divider - Hidden on Small Screens */}
      <div className="hidden md:block w-[1px] h-52 bg-gray-300 mx-auto"></div>

      {/* Secure Payment */}
      <div className="flex flex-col items-center space-y-3 max-w-xs mx-auto">
        <MdPayment size={40} />
        <h1 className="text-lg lg:text-xl font-bold">100% Payment Secure</h1>
        <p className="text-gray-500">We ensure secure payment with PEV</p>
        <button className="p-2 text-black flex items-center gap-2 hover:text-yellow-600">
          Learn More <FaAngleRight />
        </button>
      </div>

      {/* Divider - Hidden on Small Screens */}
      <div className="hidden md:block w-[1px] h-52 bg-gray-300 mx-auto"></div>

      {/* 30 Days Return */}
      <div className="flex flex-col items-center space-y-3 max-w-xs mx-auto">
        <TbTruckReturn size={40} />
        <h1 className="text-lg lg:text-xl font-bold">30 Days Return</h1>
        <p className="text-gray-500">Return it within 30 days for an exchange</p>
        <button className="p-2 text-black flex items-center gap-2 hover:text-yellow-600">
          Learn More <FaAngleRight />
        </button>
      </div>
    </div>
  );
};

export default LearnMore;
