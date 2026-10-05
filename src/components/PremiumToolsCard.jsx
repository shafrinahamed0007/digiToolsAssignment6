

const PremiumToolsCard = ({data}) => {
    return (
        <div className="card w-96  shadow-smt bg-[#F2F2F2] rounded-2xl">
                    <div className="card-body">
                      <div className="flex justify-between">
                        <div className="flex items-center justify-center w-[60px] h-[60px] rounded-full bg-[#fff]">
                          <img className="w-[32px] h-[32px]" src={data?.icon} alt={data?.name || ""} />
                        </div>
                        <div className={`${data.tagType == 'best-seller' ?  'text-[bbd4400] bg-[#fef3c6]' : data.tagType =='new' ? 'bg-[#dbfce7] text-[#0a883e]' : 'text-purple-500 bg-purple-300'  }   w-[95px] h-[31px] rounded-full py-[6px] px-[12px] `}>
                            <h1 className="text-[14px] text-center">{data?.tag || ""}</h1>
                        </div>
                      </div>
                      <div>
                        <h2 className="text-[24px] font-bold">{data?.name || ""}</h2>
                        <span>{data?.description || ""}</span>
                      </div>
                      <h1 className="text-[20px]">
                        <span className="text-[40px] font-bold">{data?.price || "0"}</span>/Month
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
                          <h1 className="bg-clip-text text-white">Buy Now</h1>
                        </button>
                      </div>
                    </div>
                  </div>
    );
};

export default PremiumToolsCard;