import { use } from "react";
import PremiumToolsCard from "./PremiumToolsCard";

const PremiumTools = ({ dataPromise }) => {
  const datas = use(dataPromise);
  console.log(datas);
  return (
    <div className=" flex justify-center w-10/12 mx-auto h-full  mt-[20px]  ">
      <div>
        <h1 className="text-[30px] lg:text-[48px] font-extrabold text-center">
          Premium Digital Tools
        </h1>
        <p className="text-center text-[#627382]">
          Choose from our curated collection of premium digital products
          designed <br /> to boost your productivity and creativity.
        </p>

        <div className="mt-[60px] grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        
          {
            datas.map(data => <PremiumToolsCard key={data.id} data={data} />)
          }
        </div>
      </div>
    </div>
  );
};

export default PremiumTools;
