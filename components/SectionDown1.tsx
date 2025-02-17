import { FaAngleRight } from "react-icons/fa6";

const SectionDown1 = () => {
  return (
    <div className="w-full h-80 sm:h-96 lg:h-[550px] rounded-lg bg-section-image4 bg-cover bg-center bg-no-repeat m-4 sm:m-6 md:m-8 lg:m-10 flex items-center justify-center text-center">

      <div className="text-white space-y-4 px-4 sm:px-8 lg:px-16 max-w-3xl">
        <h1 className="text-xl sm:text-2xl font-semibold">
          Quick parcel delivery, <span className="text-yellow-400">from $25</span>
        </h1>
        <h2 className="text-2xl sm:text-3xl font-bold">
          Shop The New Brands Up to 40% off now.
        </h2>
        <p className="text-gray-200 sm:text-lg">
          Class aptent taciti sociosqu ad litora torquent per
        </p>
        <button className="p-3 bg-black text-white rounded-lg flex items-center justify-center gap-2 w-fit mx-auto">
          Shop Collection <FaAngleRight />
        </button>
      </div>
    </div>
  );
};

export default SectionDown1;
