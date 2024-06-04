import React, { useEffect } from "react";
import arrowRightIcon from "../../../assets/icons/arrowRightIcon.svg";
import avatar2 from "../../../assets/images/emmanuelIsreal.svg";
import smsIcon from "../../../assets/icons/smsIcon.svg";
import exportIcon from "../../../assets/icons/exportWhiteIcon.svg";
import ecoBankImg from "../../../assets/images/ecobank.svg";
import { useAppContext } from "../../../contexts";

const TransactionDetails = () => {
  const { setHeaderTitle } = useAppContext();

  useEffect(() => {
    setHeaderTitle("Transaction");
  }, [setHeaderTitle]);
  return (
    <div className="h-[85vh] overflow-auto">
      <button className="flex justify-between items-center border border-[#F0F0F0] rounded-full text-[#5C5959] px-3 py-2 gap-2 shadow-lg">
        <span>
          <img src={arrowRightIcon} alt="icon" />
        </span>
        Back
      </button>

      <h2 className="text-[#232323] font-bold text-[1.3rem] py-4">Details</h2>
      <div className="flex justify-between items-start border-b border-[#F0F0F0] pb-[3rem]">
        <div className="">
          <h2 className="text-[#9B9697] text-[0.9rem] pb-2">Amount</h2>
          <h2 className="text-[#5C5959] text-[1rem] font-medium">
            ₦200,000.00
          </h2>
        </div>
        <div className="">
          <h2 className="text-[#9B9697] text-[0.9rem] pb-2">Reference</h2>
          <h2 className="text-[#5C5959] text-[1rem] font-medium">
            REF4715384150
          </h2>
        </div>
        <div className="">
          <h2 className="text-[#9B9697] text-[0.9rem] pb-2">Payment Date</h2>
          <h2 className="text-[#5C5959] text-[1rem] font-medium pb-1">
            Aug 12, 2023
          </h2>
          <h2 className="text-[#5C5959] text-[1rem] font-medium">07:14 AM</h2>
        </div>
        <div className="">
          <h2 className="text-[#9B9697] text-[0.9rem] pb-2">Type</h2>
          <h2 className="border border-[#83F3B2] bg-[#EFFFF6] rounded-full px-4 text-[#449E6A]">
            Credit
          </h2>
        </div>
        <div className="">
          <h2 className="text-[#9B9697] text-[0.9rem] pb-2">Status</h2>
          <h2 className="border border-[#83F3B2] bg-[#EFFFF6] rounded-full px-4 text-[#449E6A]">
            Sent
          </h2>
        </div>
      </div>
      <div className="py-3 flex justify-start items-start">
        <div className="w-[40%]">
          <h2 className="text-[0.9rem] text-[#9B9697] pb-3">Payment to</h2>
          <div className="flex justify-start items-center gap-3 pb-4">
            <div className="w-[10%]">
              <img src={avatar2} alt="" className="w-full h-full" />
            </div>
            <div className="">
              <h2 className="text-[#232323] text-[1rem]">Emmanuel Israel</h2>
              <h2 className="text-[#9B9697] text-[1rem]">+2347097783230</h2>
            </div>
          </div>
          <h2 className="flex justify-start items-center gap-2 text-[1rem] text-[#9B9697] pb-[4rem]">
            <span>
              <img src={smsIcon} alt="" />
            </span>
            emmanuel@gmail.com
          </h2>
          <button className="bg-[#5271FF] flex justify-start items-center gap-2 text-white px-4 py-2 rounded-full">
            <span>
              <img src={exportIcon} alt="" />
            </span>
            Export
          </button>
        </div>
        <div className="w-[40%]">
          <h2 className="text-[0.9rem] text-[#9B9697] pb-3">Payment from</h2>
          <div className="flex justify-start items-center gap-3 pb-4">
            <div className="w-[10%]">
              <img src={avatar2} alt="" className="w-full h-full" />
            </div>
            <div className="">
              <h2 className="text-[#232323] text-[1rem]">Ebiye Sango</h2>
              <h2 className="text-[#9B9697] text-[1rem]">+2348048740391</h2>
            </div>
          </div>
          <div className="flex justify-start items-center gap-3 pb-2">
            <div className="w-[10%]">
              <img src={ecoBankImg} alt="" className="w-full h-full" />
            </div>
            <div className="">
              <h2 className="text-[#9B9697] text-[1rem]">ECOBANK PLC</h2>
            </div>
          </div>
          <h2 className="text-[#5C5959] text-[1rem] font-medium">
            <span className="text-[#9B9697] font-normal">Account number:</span>{" "}
            2354886855
          </h2>
        </div>
        <div className="w-[20%]">
          <h2 className="text-[0.9rem] text-[#9B9697] pb-3">Remarks</h2>
        </div>
      </div>
    </div>
  );
};

export default TransactionDetails;
