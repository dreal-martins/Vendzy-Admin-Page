import React, { useEffect } from "react";
import { useAppContext } from "../../contexts";
import { FaArrowUpLong, FaArrowDownLong } from "react-icons/fa6";
import { Cards } from "../OverView";
import refreshIcon from "../../assets/icons/refreshIcon.svg";
import filterIcon from "../../assets/icons/sortIcon.svg";
import searchIcon from "../../assets/icons/searchIcon.svg";
import exportIcon from "../../assets/icons/exportIcon.svg";
import TransactionTable from "../../components/Tables/TransactionTable";

const Transactions = () => {
  const { setHeaderTitle } = useAppContext();

  useEffect(() => {
    setHeaderTitle("Transactions");
  }, [setHeaderTitle]);

  return (
    <div className="overflow-auto h-[85vh]  2xl:h-[100%]">
      <div className="flex justify-between items-center">
        <div className="w-[32%]">
          <Cards
            name={"Transactions"}
            number={"₦528,279,114.01"}
            days={"vs last 30 days"}
            percentage={"+3.25%"}
            icon={<FaArrowUpLong className="text-[#449E6A]" />}
            color={"#449E6A"}
          />
        </div>
        <div className="w-[32%]">
          <Cards
            name={"Credit"}
            number={"₦476,556,043.00"}
            days={"vs last 30 days"}
            percentage={"-1.10%"}
            icon={<FaArrowDownLong className="text-[#E51837]" />}
            color={"#E51837"}
          />
        </div>
        <div className="w-[32%]">
          <Cards
            name={"Debit"}
            number={"₦51,723,071.01"}
            days={"vs last 30 days"}
            percentage={"-8.30%"}
            icon={<FaArrowDownLong className="text-[#E51837]" />}
            color={"#E51837"}
          />
        </div>
      </div>
      <div className="pt-8">
        <div className="px-3 py-4 border border-[#F0F0F0] rounded-3xl flex justify-between items-center">
          <h2 className="text-[#5C5959] text-[0.9rem]">Transaction</h2>
          <div className="flex justify-between items-center w-[60%]">
            <div className="w-[50%] relative ">
              <input
                className="border border-[#F0F0F0] rounded-full py-1 pl-10 outline-none w-full placeholder:text-[0.9rem] placeholder:text-[#9B9697]"
                type="text"
                placeholder="Search"
              />
              <span className="absolute left-3 top-1.5">
                <img src={searchIcon} alt="icon" />
              </span>
            </div>
            <button className="flex justify-start items-center border border-[#F0F0F0] rounded-full py-1 px-3 gap-2 shadow-2xl text-[0.9rem] font-medium">
              <span>
                <img src={refreshIcon} alt="icon" />
              </span>
              Refresh
            </button>
            <button className="flex justify-start items-center border border-[#F0F0F0] rounded-full py-1 px-3 gap-2 shadow-2xl text-[0.9rem] font-medium">
              <span>
                <img src={exportIcon} alt="icon" />
              </span>
              Export
            </button>
            <button className="flex justify-start items-center border border-[#F0F0F0] rounded-full py-1 px-3 gap-2 shadow-2xl text-[0.9rem] font-medium">
              <span>
                <img src={filterIcon} alt="icon" />
              </span>
              Filter
            </button>
          </div>
        </div>
        <TransactionTable />
      </div>
    </div>
  );
};

export default Transactions;
