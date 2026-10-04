import user from "../assets/user.png";
import pp from "../assets/package.png";
import rocket from "../assets/rocket.png";
const GetSteps = () => {
  return (
    <div className="flex justify-center w-10/12 mx-auto h-full lg:h-[762px] mt-[20px] ">
      <div className="mt-0 lg:mt-[120px]">
        <h1 className="text-[30px] lg:text-[48px] font-extrabold text-center">
          Get Started In 3 Steps
        </h1>
        <p className="text-center text-[#627382]">
          Start using premium digital tools in minutes, not hours.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-[30px] mt-5 md:mt-[30px]">
          {/* cart - 1 */}
          <div className="flex flex-col items-center p-[24px] bg-[#f1f1f1] space-y-4 rounded-[24px]">
            <div className="flex justify-end  w-full">
              <div className="w-[40px] h-[40px] rounded-full bg-linear-to-bl from-[#4f39f6] to-[#9514fa] flex items-center justify-center text-white">
                <h1>01</h1>
              </div>
            </div>
            <div className="flex justify-center items-center w-[100px] h-[99px] rounded-full bg-linear-to-bl from-[#fefefe] to-[#9514fa]">
              <div>
                <img
                  className="w-[60px] h-[60px]"
                  src={user}
                  alt="Create Account"
                />
              </div>
            </div>
            <div className="text-center">
              <h1 className="text-[#101727] font-bold text-[24px]">
                Create Account
              </h1>
              <p className="my-4">
                Sign up for free in seconds. No credit card required to get
                started.
              </p>
            </div>
          </div>
          {/* Cart-2 */}
          <div className="flex flex-col items-center p-[24px] bg-[#f1f1f1] space-y-4 rounded-[24px]">
            <div className="flex justify-end  w-full">
              <div className="w-[40px] h-[40px] rounded-full bg-linear-to-bl from-[#4f39f6] to-[#9514fa] flex items-center justify-center text-white">
                <h1>02</h1>
              </div>
            </div>
            <div className="flex justify-center items-center w-[100px] h-[99px] rounded-full bg-linear-to-bl from-[#fefefe] to-[#9514fa]">
              <div>
                <img
                  className="w-[60px] h-[60px]"
                  src={pp}
                  alt="Create Account"
                />
              </div>
            </div>
            <div className="text-center">
              <h1 className="text-[#101727] font-bold text-[24px]">
                Choose Products
              </h1>
              <p className="my-4">
                Browse our catalog and select the tools that fit your needs.
              </p>
            </div>
          </div>
          {/* cart-3 */}
          <div className="flex flex-col items-center p-[24px] bg-[#f1f1f1] space-y-4 rounded-[24px]">
            <div className="flex justify-end  w-full">
              <div className="w-[40px] h-[40px] rounded-full bg-linear-to-bl from-[#4f39f6] to-[#9514fa] flex items-center justify-center text-white">
                <h1>03</h1>
              </div>
            </div>
            <div className="flex justify-center items-center w-[100px] h-[99px] rounded-full bg-linear-to-bl from-[#fefefe] to-[#9514fa]">
              <div>
                <img
                  className="w-[60px] h-[60px]"
                  src={rocket}
                  alt="Start Creating"
                />
              </div>
            </div>
            <div className="text-center">
              <h1 className="text-[#101727] font-bold text-[24px]">
                Start Creating
              </h1>
              <p className="my-4">
                Download and start using your premium tools immediately.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetSteps;
