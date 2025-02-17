// const SectionDown = () => {
//   return (
//     <div className="m-4 sm:m-6 md:m-8 lg:m-10 h-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-custom-grid gap-4">
//       {/* First Item */}
//       <div className="w-full h-80 sm:h-96 lg:h-[350px] rounded-lg bg-section-image1 bg-cover bg-center bg-no-repeat">
//         <div className="p-6 sm:p-8 space-y-2">
//           <h1 className="text-black text-xl sm:text-3xl font-bold">Turning Table</h1>
//           <h2 className="text-black text-base sm:text-xl">Class aptent taciti sociosqu</h2>
//           <p className="underline text-yellow-600 text-sm sm:text-base">From Rs.5000</p>
//         </div>
//       </div>

//       {/* Second Item */}
//       <div className="w-full h-80 sm:h-96 lg:h-[350px] rounded-lg bg-section-image2 bg-cover bg-center bg-no-repeat">
//         <div className="p-6 sm:p-8 space-y-2">
//           <h1 className="text-black text-xl sm:text-3xl font-bold">Wood Chair</h1>
//           <h2 className="text-black text-base sm:text-xl">Class aptent taciti sociosqu</h2>
//           <p className="underline text-yellow-600 text-sm sm:text-base">Extra 40% Off</p>
//         </div>
//       </div>

//       {/* Third Item */}
//       <div className="w-full h-80 sm:h-96 lg:h-[350px] rounded-lg bg-section-image3 bg-cover bg-center bg-no-repeat">
//         <div className="p-6 sm:p-8 space-y-2">
//           <h1 className="text-black text-xl sm:text-3xl font-bold">Modern Nutshell Lounge Chair</h1>
//           <h2 className="text-black text-base sm:text-xl">Class aptent taciti sociosqu</h2>
//           <p className="underline text-yellow-600 text-sm sm:text-base">Extra 20% Off</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SectionDown;

const SectionDown = () => {
  return (
    <div className="m-4 sm:m-6 md:m-8 lg:m-10 h-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-custom-grid gap-4">
      {/* First Item */}
      <div className="w-full h-80 sm:h-96 lg:h-[350px] rounded-lg bg-section-image1 bg-cover bg-center bg-no-repeat relative group">
        <div className="p-6 sm:p-8 space-y-2">
          <h1 className="text-black text-xl sm:text-3xl font-bold">Turning Table</h1>
          <h2 className="text-black text-base sm:text-xl">Class aptent taciti sociosqu</h2>
          <p className="underline text-yellow-600 text-sm sm:text-base">From Rs.5000</p>
        </div>
        {/* Hover Line Animation */}
        <div className="absolute bottom-0 left-0 w-full h-1 bg-black scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></div>
      </div>

      {/* Second Item */}
      <div className="w-full h-80 sm:h-96 lg:h-[350px] rounded-lg bg-section-image2 bg-cover bg-center bg-no-repeat relative group">
        <div className="p-6 sm:p-8 space-y-2">
          <h1 className="text-black text-xl sm:text-3xl font-bold">Wood Chair</h1>
          <h2 className="text-black text-base sm:text-xl">Class aptent taciti sociosqu</h2>
          <p className="underline text-yellow-600 text-sm sm:text-base">Extra 40% Off</p>
        </div>
        {/* Hover Line Animation */}
        <div className="absolute bottom-0 left-0 w-full h-1 bg-black scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></div>
      </div>

      {/* Third Item */}
      <div className="w-full h-80 sm:h-96 lg:h-[350px] rounded-lg bg-section-image3 bg-cover bg-center bg-no-repeat relative group">
        <div className="p-6 sm:p-8 space-y-2">
          <h1 className="text-black text-xl sm:text-3xl font-bold">Modern Nutshell Lounge Chair</h1>
          <h2 className="text-black text-base sm:text-xl">Class aptent taciti sociosqu</h2>
          <p className="underline text-yellow-600 text-sm sm:text-base">Extra 20% Off</p>
        </div>
        {/* Hover Line Animation */}
        <div className="absolute bottom-0 left-0 w-full h-1 bg-black scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></div>
      </div>
    </div>
  );
};

export default SectionDown;
