import React, { useEffect } from "react";
import { useAppContext } from "../../contexts";
import { FaArrowUpLong, FaArrowDownLong } from "react-icons/fa6";
import { Cards } from "../OverView";
import refreshIcon from "../../assets/icons/refreshIcon.svg";
import filterIcon from "../../assets/icons/sortIcon.svg";
import searchIcon from "../../assets/icons/searchIcon.svg";
import MerchantTable from "../../components/Tables/MerchantTable";
import { toast } from "react-toastify";
import { getAllMerchantService } from "../../services/merchant";

const Merchants = () => {
  const { setHeaderTitle } = useAppContext();

  useEffect(() => {
    setHeaderTitle("Merchants");
  }, [setHeaderTitle]);

  // useEffect(() => {
  //   const getMerchants = async () => {
  //     try {
  //       const response = await getAllMerchantService();
  //       console.log(response);
  //     } catch (error) {
  //       console.log(error);
  //       if (error.message === "Network Error") {
  //         toast.error("Network error. Please check your internet connection.");
  //       } else if (error.response) {
  //         toast.error(error.response.data.message);
  //       } else {
  //         toast.error("An error occurred. Please try again later.");
  //       }
  //     }
  //   };
  //   getMerchants();
  // }, []);

  return (
    <div className="overflow-auto h-[85vh]  2xl:h-[90vh]">
      <div className="flex justify-between items-center">
        <div className="w-[32%]">
          <Cards
            name={"Users"}
            number={"3,008"}
            days={"vs last 30 days"}
            percentage={"+3.25%"}
            icon={<FaArrowUpLong className="text-[#449E6A]" />}
            color={"#449E6A"}
          />
        </div>
        <div className="w-[32%]">
          <Cards
            name={"Vendors"}
            number={"2,156"}
            days={"vs last 30 days"}
            percentage={"+3.25%"}
            icon={<FaArrowUpLong className="text-[#449E6A]" />}
            color={"#449E6A"}
          />
        </div>
        <div className="w-[32%]">
          <Cards
            name={"Buyers"}
            number={"852"}
            days={"vs last 30 days"}
            percentage={"+3.25%"}
            icon={<FaArrowDownLong className="text-[#E51837]" />}
            color={"#E51837"}
          />
        </div>
      </div>
      <div className="pt-8">
        <div className="px-3 py-4 border border-[#F0F0F0] rounded-3xl flex justify-between items-center">
          <h2>Merchants</h2>
          <div className="flex justify-between items-center w-[45%]">
            <div className="w-[55%] relative ">
              <input
                className="border border-[#F0F0F0] rounded-full py-1 pl-10 outline-none w-full"
                type="text"
                placeholder="Search"
              />
              <span className="absolute left-3 top-1.5">
                <img src={searchIcon} alt="icon" />
              </span>
            </div>
            <button className="flex justify-start items-center border border-[#F0F0F0] rounded-full py-1 px-3 gap-2 shadow-2xl">
              <span>
                <img src={refreshIcon} alt="icon" />
              </span>
              Refresh
            </button>
            <button className="flex justify-start items-center border border-[#F0F0F0] rounded-full py-1 px-3 gap-2 shadow-2xl">
              <span>
                <img src={filterIcon} alt="icon" />
              </span>
              Filter
            </button>
          </div>
        </div>
        <MerchantTable />
      </div>
    </div>
  );
};

export default Merchants;
