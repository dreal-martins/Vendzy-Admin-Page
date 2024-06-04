import React, { useEffect } from "react";
import arrowRightIcon from "../../../assets/icons/arrowRightIcon.svg";
import iphone15 from "../../../assets/images/iphone15.svg";
import copyIcon from "../../../assets/icons/copyIcon.svg";
import mozartIfiokImg from "../../../assets/images/mozartIfiok.svg";
import smsIcon from "../../../assets/icons/smsIcon.svg";
import avatar from "../../../assets/images/avatar.svg";
import ecoBankImg from "../../../assets/images/ecobank.svg";
import { useAppContext } from "../../../contexts";

const OrderDetails = () => {
  const { setHeaderTitle } = useAppContext();

  useEffect(() => {
    setHeaderTitle("Order");
  }, [setHeaderTitle]);
  return (
    <div className="h-[85vh] overflow-auto">
      <div className="flex justify-between items-center">
        <button className="flex justify-between items-center border border-[#F0F0F0] rounded-full text-[#5C5959] px-4 py-2 gap-2 shadow-lg">
          <span>
            <img src={arrowRightIcon} alt="icon" />
          </span>
          Back
        </button>
        <button className="bg-[#F6F6F6] text-[#5C5959] border border-[#F0F0F0] rounded-full px-4 py-2 shadow-lg">
          Funded seller
        </button>
      </div>
      <h2 className="text-[#232323] font-bold text-[1.3rem] py-4">Details</h2>

      <div className="flex justify-between items-start border-b border-[#F0F0F0] pb-[3rem]">
        <div className="w-[30%]">
          <h2 className="text-[0.9rem] text-[#9B9697] pb-3">Item</h2>
          <div className="flex justify-start items-start gap-2">
            <div className="w-[20%]">
              <img src={iphone15} alt="" />
            </div>
            <h2 className="text-[1rem] text-[#232323] font-medium w-[70%] 2xl:w-[50%]">
              iPhone 15 Pro Max - 6.7Inch - 526 GB ROM, 6GB RAM iOS 18- Midnight
              Titanium design Ceramic Shield front Textured matte glass back
            </h2>
          </div>
        </div>
        <div className="w-[20%]">
          <h2 className="text-[0.9rem] text-[#9B9697] pb-3">Order ID</h2>
          <div className="">
            <h2 className="text-[#5C5959] text-[1rem] font-medium">
              VD5477956P
            </h2>
            <h2 className="flex justify-start items-center pt-2 gap-1 text-[0.75rem] text-[#5271FF] cursor-pointer">
              <span>
                <img src={copyIcon} alt="" />
              </span>
              Copy
            </h2>
          </div>
        </div>
        <div className="w-[15%]">
          <h2 className="text-[0.9rem] text-[#9B9697] pb-3">Due date</h2>
          <div className="">
            <h2 className="text-[#EF5959] text-[1rem] font-medium">
              Aug 13, 2023
            </h2>
            <h2 className="text-[#EF5959] text-[1rem] font-medium">07:13 AM</h2>
          </div>
        </div>
        <div className="w-[15%]">
          <h2 className="text-[0.9rem] text-[#9B9697] pb-3">Vendor status</h2>
          <button className="text-[#449E6A] text-[0.9rem] border border-[#83F3B2] rounded-full bg-[#EFFFF6] px-3 py-1 cursor-default">
            Delivered
          </button>
        </div>
        <div className="w-[15%]">
          <h2 className="text-[0.9rem] text-[#9B9697] pb-3">Buyer status</h2>{" "}
          <button className="text-[#232323] text-[0.9rem] border border-[#F0F0F0] rounded-full bg-[#F4F4F4] px-3 py-1 cursor-default">
            Pending
          </button>
        </div>
      </div>

      <div className="flex justify-between items-start border-b border-[#F0F0F0] py-[3rem]">
        <div className="w-[20%]">
          <h2 className="text-[0.9rem] text-[#9B9697] pb-1">Order amount</h2>
          <h2 className="text-[#5C5959] text-[1rem] font-medium">
            ₦200,000.00
          </h2>
        </div>
        <div className="w-[20%]">
          <h2 className="text-[0.9rem] text-[#9B9697] pb-1">Service fee</h2>
          <h2 className="text-[#5C5959] text-[1rem] font-medium">₦1,000.00</h2>
        </div>
        <div className="w-[20%]">
          <h2 className="text-[0.9rem] text-[#9B9697] pb-1">Reference</h2>
          <h2 className="text-[#5C5959] text-[1rem] font-medium">
            REF4715384150
          </h2>
        </div>
        <div className="w-[20%]">
          <h2 className="text-[0.9rem] text-[#9B9697] pb-1">Payment date</h2>
          <div className="">
            <h2 className="text-[#5C5959] text-[1rem] font-medium">
              Aug 12, 2023
            </h2>
            <h2 className="text-[#5C5959] text-[1rem] font-medium">07:14 AM</h2>
          </div>
        </div>
        <div className="w-[20%]">
          <h2 className="text-[0.9rem] text-[#9B9697] pb-1">Funding status</h2>
          <button className="text-[#449E6A] text-[0.9rem] border border-[#83F3B2] rounded-full bg-[#EFFFF6] px-3 py-1 cursor-default">
            Paid
          </button>
        </div>
      </div>

      <div className="flex justify-between items-start border-b border-[#F0F0F0] py-[3rem]">
        <div className="w-[30%]">
          <h2 className="text-[0.9rem] text-[#9B9697] pb-3">Payment to</h2>
          <div className="flex justify-start items-start gap-3">
            <div className="">
              <img src={mozartIfiokImg} alt="" />
            </div>
            <div className="">
              <h2 className="text-[#232323] text-[1rem] font-medium">
                Mozart Ifiok
              </h2>
              <h2 className="text-[#9B9697] text-[1rem]">Mooi Gadgets</h2>
              <h2 className="text-[#9B9697] text-[1rem]">+2347097783230</h2>
            </div>
          </div>
          <h2 className="text-[1rem] text-[#9B9697] flex justify-start items-center gap-2 pt-2 pb-4">
            <span>
              <img src={smsIcon} alt="" />
            </span>{" "}
            mootigadgets@gmail.com
          </h2>
          <button className="text-[#5C5959] text-[0.9rem] border border-[#F0F0F0] rounded-full bg-[#FFFFFF] px-3 py-1 cursor-default">
            View profile
          </button>
        </div>

        <div className="w-[30%]">
          <h2 className="text-[0.9rem] text-[#9B9697] pb-3">Payment from</h2>
          <div className="flex justify-start items-start gap-3  pb-2">
            <div className="">
              <img src={avatar} alt="" />
            </div>
            <div className="">
              <h2 className="text-[#232323] text-[1rem] font-medium">
                Ebiye Sango
              </h2>
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
          <h2 className="text-[0.9rem] text-[#9B9697] pb-1">Payment amount</h2>
          <h2 className="text-[#232323] font-medium text-[1rem]">
            ₦200,000.00
          </h2>
        </div>
        <div className="w-[20%]">
          <h2 className="text-[0.9rem] text-[#9B9697] pb-1">Payment method</h2>
          <h2 className="text-[#232323] font-medium text-[1rem]">
            Bank transfer
          </h2>
        </div>
      </div>
    </div>
  );
};

export default OrderDetails;
