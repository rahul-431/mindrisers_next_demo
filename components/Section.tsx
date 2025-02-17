import { FaAngleRight } from "react-icons/fa6";

const Section = () => {
  return (
    <div className="m-4 sm:m-6 md:m-8 lg:m-10 h-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {/* First Section */}
        <div className="h-[500px] bg-cover bg-center bg-custom-section hover:scale-95 transition-all flex items-center">
          <div className="w-full sm:w-[22rem] md:w-[24rem] lg:w-[26rem] mx-6 sm:mx-8 md:mx-12 lg:mx-16 space-y-4">
            <h2 className="text-black text-lg md:text-xl font-bold">
              Quick Parcel delivery, <span className="text-yellow-600">from Rs.5000</span>
            </h2>
            <h1 className="text-black text-2xl md:text-3xl font-bold">
              Up to 70% Off Interior Home Decor
            </h1>
            <p className="text-gray-400 text-sm md:text-base">
              Class aptent taciti soci
            </p>
            <button className="p-3 bg-black text-white rounded-lg flex items-center gap-2 w-fit hover:bg-yellow-600">
              Shop Collection <FaAngleRight />
            </button>
          </div>
        </div>

        {/* Second Section */}
        <div className="h-[500px] bg-cover bg-center bg-custom-section1 hover:scale-95 transition-all flex items-center">
          <div className="w-full sm:w-[22rem] md:w-[24rem] lg:w-[26rem] mx-6 sm:mx-8 md:mx-12 lg:mx-16 space-y-4">
            <h2 className="text-white text-lg md:text-xl font-bold">
              Quick Parcel delivery, <span className="text-yellow-600">from Rs.5000</span>
            </h2>
            <h1 className="text-white text-2xl md:text-3xl font-bold">
              Up to 70% Off Interior Home Decor
            </h1>
            <p className="text-gray-200 text-sm md:text-base">
              Class aptent taciti soci
            </p>
            <button className="p-3 bg-black text-white rounded-lg flex items-center gap-2 w-fit hover:bg-yellow-600">
              Shop Collection <FaAngleRight />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section;
