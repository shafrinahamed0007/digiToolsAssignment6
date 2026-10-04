const ActiveUsers = () => {
  return (
    <div className="lg:h-[247px] bg-linear-to-bl from-[#4f39f6] to-[#9514fa] text-white py-5 md:py-0 ">
      <div className="w-10/12 mx-auto  grid md:grid-cols-3 my-5 gap-[30px] md:gap-4 justify-between items-center h-full   ">
        <div className="flex flex-col items-center  w-[345px]">
          <div>
            <h1 className="text-[24px] md:text-[60px] font-extrabold ">
              500K+
            </h1>
          </div>
          <p className="text-[24px] font-medium">Active User</p>
        </div>
        <div className="md:border-x-2 md:border-y-0 border-y-2 border-white text-center">
          <h1 className="text-[24px] md:text-[60px] font-extrabold">200+</h1>
          <p className="text-[24px] font-medium">Premium Tools</p>
        </div>
        <div className="text-center">
          <h1 className="text-[24px] md:text-[60px] font-extrabold">4.9</h1>
          <p className="text-[24px] font-medium">Rating</p>
        </div>
      </div>
    </div>
  );
};

export default ActiveUsers;
