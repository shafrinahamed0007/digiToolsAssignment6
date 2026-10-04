import headerImage from "../assets/banner.png";

const Header = () => {
  return (
    <div className="flex flex-col lg:flex-row gap-4 mt-10 w-10/12 mx-auto justify-between items-center h-full lg:h-[360px] lg:h-[760px] ">
      {/* This is content section */}
      <div>
        <div className="flex gap-[5px] py-2 px-4 bg-[#e1e7ff] w-[294px] h-[38px] rounded-full items-center">
          <div className="w-[16px] h-[16px] bg-linear-to-bl from-[#4f39f6] to-[#9514fa] rounded-full "></div>
          <div className="bg-linear-to-bl from-[#4f39f6] to-[#9514fa] bg-clip-text text-transparent ">
            New: AI-Powered Tools Available
          </div>
        </div>
        <div>
          <h1 className="text-[32px] lg:text-[72px] font-extrabold text-[#101727] mt-[20px] ">
            Supercharge Your <br /> Digital Workflow
          </h1>
          <p className="text-[#627382] text-[18px] mt-[20px] ">
            Access premium AI tools, design assets, templates, and productivity{" "}
            <br />
            software—all in one place. Start creating faster today. <br />{" "}
            Explore Products
          </p>
        </div>

        <div className="flex gap-4 mt-[20px] ">
          <button className="btn py-3 px-4 bg-linear-to-bl from-[#4f39f6] to-[#9514fa] font-bold text-white rounded-full ">
            Explore Products
          </button>

          <button className="p-[2px] rounded-full bg-gradient-to-bl from-[#4f39f6] to-[#9514fa] font-bold">
            <span className="flex items-center justify-center px-6 py-2.5 bg-white text-[#4f39f6] rounded-full hover:bg-opacity-90 transition-all">
              Watch Demo
            </span>
          </button>
        </div>
      </div>

      {/* This is image asection */}
      <div>
        <img src={headerImage} alt="DigiTools AI" />
      </div>
    </div>
  );
};

export default Header;
