const Workflow = () => {
  return (
    <div className="mt-[60px] bg-linear-to-bl from-[#4f39f6] to-[#9514fa] text-white  md:py-0 flex flex-col items-center justify-center space-y-5  ">
      <div className="text-center mt-[60px] mt-[120px]">
        <h1 className="text-[24px] md:text-[40px] font-extrabold">
          Ready to Transform Your Workflow?
        </h1>
        <p className=" opacity-90">
          Join thousands of professionals who are already using Digitools to
          work smarter.Start your free trial today.
        </p>
      </div>

      <div className="flex gap-4 mt-[20px] ">
        <button className="btn py-3 px-4 bg-linear-to-bl from-[#4f39f6] to-[#9514fa] font-bold text-white rounded-full ">
          Explore Products
        </button>

        <button className="p-[2px] rounded-full bg-gradient-to-bl from-[#4f39f6] to-[#9514fa] font-bold">
          <span className="flex items-center justify-center px-6 py-2.5 bg-white text-[#4f39f6] rounded-full hover:bg-opacity-90 transition-all">
            View Pricing
          </span>
        </button>
      </div>
      <div className="mb-[60px] md:mb-[120px]">
        <p className=" opacity-80 text-center">
          14-day free trial • No credit card required • Cancel anytime
        </p>
      </div>
    </div>
  );
};

export default Workflow;
