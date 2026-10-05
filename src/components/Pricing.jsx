const Pricing = () => {
  return (
    <div className=" flex justify-center w-10/12 mx-auto h-full lg:h-[762px] mt-[60px] md:mt-[120px]   ">
      <div className="mt-0 ">
        <h1 className="text-[30px] lg:text-[48px] font-extrabold text-center">
          Simple, Transparent Pricing
        </h1>
        <p className="text-center text-[#627382]">
          Choose the plan that fits needs. Upgrade or downgrade anytme
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-[30px] mt-5 md:mt-[40px]">
          {/* Cart - 1 */}
           <div className="card w-96  shadow-smt bg-[#F2F2F2] rounded-2xl">
            
            <div className="card-body">
              <div>
                <h2 className="text-[24px] font-bold">Starter</h2>
                <span>Perfect for getting started</span>
              </div>
              <h1 className="text-[20px]">
                <span className="text-[40px] font-bold">$0</span>/Month
              </h1>
              <ul className="mt-6 flex flex-col gap-2 text-xs">
                <li>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-4 me-2 inline-block text-success"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span>High-resolution image generation</span>
                </li>
                <li>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-4 me-2 inline-block text-success"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span>Customizable style templates</span>
                </li>
                <li>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-4 me-2 inline-block text-success"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span>Batch processing capabilities</span>
                </li>
                <li>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-4 me-2 inline-block text-success"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span>AI-driven image enhancements</span>
                </li>
              </ul>
              <div className="mt-6">
                <button className="btn bg-linear-to-bl from-[#4f39f6] to-[#9514fa] w-full rounded-2xl">

               <h1 className="bg-clip-text text-white">
                Start Pro Trial
               </h1>
                </button>
              </div>
            </div>
          </div>

          {/* Cart - 2 */}
          <div className="card w-96 bg-linear-to-t from-[#4539f6] to-[#9514fa] shadow-smt text-white rounded-2xl">
            <div className="flex justify-center mt-[-10px]">
              <span className="badge badge-xs badge-warning text-[#bb4d00] py-[6px] px-[12px]">
                <h1 className="text-[14px]">Most Popular</h1>
              </span>
            </div>
            <div className="card-body">
              <div>
                <h2 className="text-[24px] font-bold">Pro</h2>
                <span>Best for professional</span>
              </div>
              <h1 className="text-[20px]">
                <span className="text-[40px] font-bold">$29</span>/Month
              </h1>
              <ul className="mt-6 flex flex-col gap-2 text-xs">
                <li>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-4 me-2 inline-block text-success"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span>High-resolution image generation</span>
                </li>
                <li>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-4 me-2 inline-block text-success"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span>Customizable style templates</span>
                </li>
                <li>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-4 me-2 inline-block text-success"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span>Batch processing capabilities</span>
                </li>
                <li>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-4 me-2 inline-block text-success"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span>AI-driven image enhancements</span>
                </li>
              </ul>
              <div className="mt-6">
                <button className="btn bg-white w-full rounded-2xl">

               <h1 className="bg-linear-to-bl from-[#4f39f6] to-[#9514fa] bg-clip-text text-transparent">
                Start Pro Trial
               </h1>
                </button>
              </div>
            </div>
          </div>

          {/* Cart - 3 */}
           <div className="card w-96  shadow-smt bg-[#F2F2F2] rounded-2xl">
            
            <div className="card-body">
              <div>
                <h2 className="text-[24px] font-bold">Enterprise</h2>
                <span>For teams and business</span>
              </div>
              <h1 className="text-[20px]">
                <span className="text-[40px] font-bold">$99</span>/Month
              </h1>
              <ul className="mt-6 flex flex-col gap-2 text-xs">
                <li>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-4 me-2 inline-block text-success"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span>High-resolution image generation</span>
                </li>
                <li>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-4 me-2 inline-block text-success"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span>Customizable style templates</span>
                </li>
                <li>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-4 me-2 inline-block text-success"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span>Batch processing capabilities</span>
                </li>
                <li>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-4 me-2 inline-block text-success"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span>AI-driven image enhancements</span>
                </li>
              </ul>
              <div className="mt-6">
                <button className="btn bg-linear-to-bl from-[#4f39f6] to-[#9514fa] w-full rounded-2xl">

               <h1 className="bg-clip-text text-white">
                Start Pro Trial
               </h1>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
