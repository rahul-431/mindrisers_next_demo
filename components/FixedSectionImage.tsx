const FixedSectionImage = () => {
  return (
    <div className="bg-fixed-image bg-fixed m-5 w-full min-h-[400px] sm:h-96 lg:h-[650px] bg-cover bg-no-repeat py-10 lg:py-20 flex items-center justify-center">
      <div className="w-full max-w-screen-md bg-white opacity-80 px-6 py-10 sm:py-16 space-y-4 text-center">
        <h1 className="text-xl sm:text-2xl font-bold">Subscribe To Our Newsletter</h1>
        <p className="text-sm sm:text-md">
          Sign up for the weekly newsletter and build better ecommerce stores.
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-3">
          <input
            type="text"
            placeholder="Your email address"
            className="w-full sm:w-auto border border-gray-500 p-2 rounded-sm lg:w-72"
          />
          <button className="bg-black text-white px-4 py-2 rounded-sm w-full sm:w-auto lg:w-40 hover:bg-yellow-500">
            Subscribe
          </button>
        </div>
        <p className="text-sm sm:text-md">We respect your privacy, so we never share your info.</p>
      </div>
    </div>
  );
};

export default FixedSectionImage;
