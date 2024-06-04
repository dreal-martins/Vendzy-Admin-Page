import React, { useEffect } from "react";
import { useAppContext } from "../../contexts";
import { FaArrowUpLong, FaArrowDownLong } from "react-icons/fa6";
import refreshIcon from "../../assets/icons/refreshIcon.svg";
import filterIcon from "../../assets/icons/sortIcon.svg";
import searchIcon from "../../assets/icons/searchIcon.svg";
import OrderTable from "../../components/Tables/OrderTable";
import exportIcon from "../../assets/icons/exportIcon.svg";

const Orders = () => {
  const { setHeaderTitle } = useAppContext();

  useEffect(() => {
    setHeaderTitle("Orders");
  }, [setHeaderTitle]);

  return (
    <div className="overflow-auto h-[85vh]  2xl:h-[100%]">
      <div className="flex justify-between items-center gap-2">
        <div className="w-[19%]">
          <OrderCard
            name={"Orders"}
            amount={"₦709,556,043.00"}
            icon={<FaArrowUpLong className="text-[#449E6A]" />}
            percentage={"+3.25%"}
            days={"vs last 30 days"}
            color={"text-[#449E6A]"}
          />
        </div>

        <div className="w-[19%]">
          <OrderCard
            name={"Paid"}
            amount={"₦528,279,114.01"}
            icon={<FaArrowDownLong className="text-[#E51837]" />}
            percentage={"-1.10%"}
            days={"vs last 30 days"}
            color={"text-[#E51837]"}
          />
        </div>

        <div className="w-[19%]">
          <OrderCard
            name={"Pending"}
            amount={"₦6,519"}
            icon={<FaArrowUpLong className="text-[#449E6A]" />}
            percentage={"+6.11%"}
            days={"vs last 30 days"}
            color={"text-[#449E6A]"}
          />
        </div>

        <div className="w-[19%]">
          <OrderCard
            name={"Disputes"}
            amount={"₦276,556,043.00"}
            icon={<FaArrowDownLong className="text-[#E51837]" />}
            percentage={"-8.30%"}
            days={"vs last 30 days"}
            color={"text-[#E51837]"}
          />
        </div>

        <div className="w-[19%]">
          <OrderCard
            name={"Cancelled"}
            amount={"₦251,723,071.00"}
            icon={<FaArrowDownLong className="text-[#E51837]" />}
            percentage={"-8.30%"}
            days={"vs last 30 days"}
            color={"text-[#E51837]"}
          />
        </div>
      </div>

      <div className="pt-8">
        <div className="px-3 py-4 border border-[#F0F0F0] rounded-3xl flex justify-between items-center">
          <h2 className="text-[#5C5959] text-[0.9rem]">Orders</h2>
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
            <button className="flex justify-start items-center border border-[#F0F0F0] rounded-full py-1 px-3 gap-2 shadow-2xl text-[#5C5959] text-[0.9rem] font-medium">
              <span>
                <img src={refreshIcon} alt="icon" />
              </span>
              Refresh
            </button>
            <button className="flex justify-start items-center border border-[#F0F0F0] rounded-full py-1 px-3 gap-2 shadow-2xl text-[#5C5959] text-[0.9rem] font-medium">
              <span>
                <img src={exportIcon} alt="icon" />
              </span>
              Export
            </button>
            <button className="flex justify-start items-center border border-[#F0F0F0] rounded-full py-1 px-3 gap-2 shadow-2xl text-[#5C5959] text-[0.9rem] font-medium">
              <span>
                <img src={filterIcon} alt="icon" />
              </span>
              Filter
            </button>
          </div>
        </div>
        <OrderTable />
      </div>
    </div>
  );
};

export default Orders;

const OrderCard = ({ name, amount, icon, percentage, days, color }) => {
  return (
    <div className="border p-3 rounded-3xl">
      <h2 className="text-[#5C5959] text-[0.9rem]">{name}</h2>
      <h2 className="text-[#232323] font-bold py-1.5 text-[1rem]">{amount}</h2>
      <h2 className="flex justify-start items-center gap-2 text-[0.7rem]">
        <span className={`flex justify-start items-center ${color} gap-1`}>
          {icon}
          {percentage}
        </span>
        <span className="text-[0.7rem] text-[#9B9697]">{days}</span>
      </h2>
    </div>
  );
};
