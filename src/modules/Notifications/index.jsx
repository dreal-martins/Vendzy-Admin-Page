import React, { useEffect } from "react";
import { useAppContext } from "../../contexts";
import { FaArrowUpLong, FaArrowDownLong } from "react-icons/fa6";
import filterIcon from "../../assets/icons/sortIcon.svg";
import refreshIcon from "../../assets/icons/refreshIcon.svg";
import searchIcon from "../../assets/icons/searchIcon.svg";
import OrderTable from "../../components/Tables/OrderTable";
import exportIcon from "../../assets/icons/exportIcon.svg";
import NotificationTable from "../../components/Tables/NotificationTable";

const Notifications = () => {
  const { setHeaderTitle } = useAppContext();

  useEffect(() => {
    setHeaderTitle("Notifications");
  }, [setHeaderTitle]);

  return (
    <div className="overflow-auto h-[85vh]  2xl:h-[90vh]">
      <div className="flex justify-between items-center">
        <div className="border p-3 rounded-3xl w-[45%]">
          <h2 className="text-[#5C5959] text-[0.9rem]">Notifications</h2>
          <h2 className="text-[#232323] font-bold py-2 text-[1rem]">836</h2>
          <h2 className="text-[0.8rem]">
            <span
              className={`flex justify-start items-center text-[#449E6A] gap-1`}
            >
              <FaArrowUpLong />
              +3.25%
            </span>
            <span>vs last 30 days</span>
          </h2>
        </div>

        <div className="border p-3 rounded-3xl w-[45%] pr-32">
          <h2 className="text-[#5C5959] text-[0.9rem]">Email</h2>
          <div className="flex justify-between items-center">
            <div className="">
              <div className="flex justify-start items-center gap-2">
                <h2 className="text-[#232323] font-bold text-[1rem] py-0.5">
                  417
                </h2>
                <h2 className="flex justify-between items-center text-[#449E6A] text-[0.8rem]">
                  <FaArrowUpLong className="text-[#449E6A]" />
                  +2.30%
                </h2>
              </div>
              <div className="">
                <h2 className=" text-[#9B9697] text-[0.8rem]">
                  Sent
                  <span className="pl-0.5">{"  "} vs last 30 days</span>
                </h2>
              </div>
            </div>

            <div className="">
              <div className="flex justify-start items-center gap-12">
                <h2 className="text-[#232323] font-bold text-[1rem]">200</h2>
                <h2 className="text-[#E51837] flex justify-start items-center text-[0.8rem] gap-1">
                  <FaArrowDownLong />
                  -1.10%
                </h2>
              </div>
              <div className="">
                <h2 className=" text-[#9B9697] text-[0.8rem]">
                  Delivered
                  <span className="pl-3">{"  "} vs last 30 days</span>
                </h2>
              </div>
            </div>
          </div>
          <div className="pt-2">
            <button className="flex justify-start items-center border border-[#F0F0F0] rounded-full py-1 px-3 gap-2 shadow-2xl text-[0.8rem]">
              <span>
                <img src={filterIcon} alt="icon" />
              </span>
              Filter
            </button>
          </div>
        </div>
      </div>

      <div className="pt-8">
        <div className="px-3 py-4 border border-[#F0F0F0] rounded-3xl flex justify-between items-center">
          <h2 className="text-[#5C5959] text-[0.9rem]">Notifications</h2>
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
        <NotificationTable />
      </div>
    </div>
  );
};

export default Notifications;
