import React, { useEffect } from "react";
import { Cards } from "../OverView";
import { FaArrowDownLong } from "react-icons/fa6";
import { useAppContext } from "../../contexts";
import refreshIcon from "../../assets/icons/refreshIcon.svg";
import filterIcon from "../../assets/icons/sortIcon.svg";
import searchIcon from "../../assets/icons/searchIcon.svg";
import exportIcon from "../../assets/icons/exportIcon.svg";
import DisputeTable from "../../components/Tables/DisputeTable";

const Disputes = () => {
  const { setHeaderTitle } = useAppContext();

  useEffect(() => {
    setHeaderTitle("Disputes");
  }, [setHeaderTitle]);

  return (
    <div className="overflow-auto h-[85vh]  2xl:h-[90vh]">
      <div className="flex justify-between items-center">
        <div className="w-[32%]">
          <Cards
            name={"Disputes"}
            number={"₦528,279,114.01"}
            days={"vs last 30 days"}
            percentage={"-8.30%"}
            icon={<FaArrowDownLong className="text-[#E51837]" />}
            color={"#E51837"}
          />
        </div>
        <div className="w-[32%]">
          <Cards
            name={"Resolved"}
            number={"₦276,556,043.00"}
            days={"vs last 30 days"}
            percentage={"-1.10%"}
            icon={<FaArrowDownLong className="text-[#E51837]" />}
            color={"#E51837"}
          />
        </div>
        <div className="w-[32%]">
          <Cards
            name={"Unresolved"}
            number={"₦251,723,071.00"}
            days={"vs last 30 days"}
            percentage={"-4.20%"}
            icon={<FaArrowDownLong className="text-[#E51837]" />}
            color={"#E51837"}
          />
        </div>
      </div>
      <div className="pt-8">
        <div className="px-3 py-4 border border-[#F0F0F0] rounded-3xl flex justify-between items-center">
          <h2 className="text-[#5C5959] text-[0.9rem]">Disputes</h2>
          <div className="flex justify-between items-center w-[60%]">
            <div className="w-[50%] relative ">
              <input
                className="border border-[#F0F0F0] rounded-full py-1 pl-10 outline-none w-full placeholder:text-[0.9rem] placeholder:font-medium placeholder:text-[#9B9697]"
                type="text"
                placeholder="Search"
              />
              <span className="absolute left-3 top-1.5">
                <img src={searchIcon} alt="icon" />
              </span>
            </div>
            <button className="flex justify-start items-center border border-[#F0F0F0] rounded-full py-1 px-3 gap-2 shadow-2xl text-[#5C5959] font-medium text-[0.9rem]">
              <span>
                <img src={refreshIcon} alt="icon" />
              </span>
              Refresh
            </button>
            <button className="flex justify-start items-center border border-[#F0F0F0] rounded-full py-1 px-3 gap-2 shadow-2xl text-[#5C5959] font-medium  text-[0.9rem]">
              <span>
                <img src={exportIcon} alt="icon" />
              </span>
              Export
            </button>
            <button className="flex justify-start items-center border border-[#F0F0F0] rounded-full py-1 px-3 gap-2 shadow-2xl text-[#5C5959] font-medium  text-[0.9rem]">
              <span>
                <img src={filterIcon} alt="icon" />
              </span>
              Filter
            </button>
          </div>
        </div>
        <DisputeTable />
      </div>
    </div>
  );
};

export default Disputes;
