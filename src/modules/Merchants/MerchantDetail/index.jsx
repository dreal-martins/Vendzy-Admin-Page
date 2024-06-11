import React, { useEffect, useState } from "react";
import arrowRightIcon from "../../../assets/icons/arrowRightIcon.svg";
import { FaChevronDown } from "react-icons/fa6";
import inemAtikuImg from "../../../assets/images/inemAtiku.svg";
import messageIcon from "../../../assets/icons/messageIcon.svg";
import phoneIcon from "../../../assets/icons/phoneIcon.svg";
import nationalIdCard from "../../../assets/images/nationalIdCard.svg";
import avatar from "../../../assets/icons/avatarIcon.svg";
import avatar2 from "../../../assets/images/emmanuelIsreal.svg";
import proofOfAddress from "../../../assets/icons/proofOfAddress.svg";
import Transactions from "../../Transactions";
import Orders from "../../Orders";
import { useAppContext } from "../../../contexts";

const MerchantDetail = () => {
  const [isDetailExpanded, setIsDetailExpanded] = useState(true);
  const [isKycExpanded, setIsKycExpanded] = useState(false);
  const [istransactionExpanded, setIsTransactionExpanded] = useState(false);
  const [isOrderedExpanded, setIsOrderedExpanded] = useState(false);
  const { setHeaderTitle } = useAppContext();

  useEffect(() => {
    setHeaderTitle("Merchants");
  }, [setHeaderTitle]);

  const handleDetail = () => {
    setIsDetailExpanded(!isDetailExpanded);
    setIsKycExpanded(false);
  };

  const handleKyc = () => {
    setIsDetailExpanded(false);
    setIsKycExpanded(!isKycExpanded);
  };

  const handleTransaction = () => {
    setIsDetailExpanded(false);
    setIsKycExpanded(false);
    setIsTransactionExpanded(!istransactionExpanded);
  };

  const handleOrder = () => {
    setIsDetailExpanded(false);
    setIsKycExpanded(false);
    setIsTransactionExpanded(false);
    setIsOrderedExpanded(!isOrderedExpanded);
  };

  return (
    <div className="h-[85vh] overflow-auto">
      <div className="flex justify-between items-center">
        <button className="flex justify-between items-center border border-[#F0F0F0] rounded-full text-[#5C5959] px-4 py-2 gap-2 shadow-lg">
          <span>
            <img src={arrowRightIcon} alt="icon" />
          </span>
          Back
        </button>
        <button className="bg-[#EF5959] text-white border border-[#F0F0F0] rounded-full px-4 py-2 shadow-lg">
          Suspend account
        </button>
      </div>

      <div className="pt-7">
        <div
          onClick={handleDetail}
          className={`border border-[#F0F0F0] rounded-lg flex justify-between items-center py-3 px-3  ${
            isDetailExpanded ? "bg-[#F6F6F6]" : "bg-[#FFFFFF]"
          }`}
        >
          <h2 className="text-[#232323] font-bold text-[1rem]">Details</h2>
          <div
            onClick={handleDetail}
            className="p-2 bg-[#FFFFFF] rounded-full cursor-pointer"
          >
            <FaChevronDown
              style={{
                transform: isDetailExpanded ? "rotate(180deg)" : "rotate(0deg)",
              }}
            />
          </div>
        </div>
        {isDetailExpanded && (
          <div className="flex justify-start items-start p-5">
            <div className="w-[40%]">
              <div className="flex justify-start items-center gap-4 pb-4">
                <div>
                  <img src={inemAtikuImg} alt="img" className="w-full h-full" />
                </div>
                <div className="">
                  <h2 className="text-[#232323] font-bold text-[1.4rem]">
                    Inem Atiku
                  </h2>
                  <button className="text-[#EF5959] bg-[#FFE8E8] border border-[#FFBBBB] cursor-default text-[0.9rem] py-0.5 px-3 rounded-full">
                    Inactive
                  </button>
                </div>
              </div>
              <div className="flex justify-start items-center gap-2 pb-4">
                <div className="">
                  <img src={messageIcon} alt="" />
                </div>
                <div className="">
                  <img src={phoneIcon} alt="" />
                </div>
              </div>
              <div className="flex justify-start items-center gap-5">
                <div className="text-center border border-[#F0F0F0] py-3 px-10 rounded-xl">
                  <h2 className="pb-1 text-[#5C5959] text-[0.9rem]">Escrow</h2>
                  <h2 className="text-[#232323] font-bold">₦20,453.00</h2>
                </div>
                <div className="text-center border border-[#F0F0F0] py-3 px-10 rounded-xl">
                  <h2 className="pb-1 text-[#5C5959] text-[0.9rem]">Wallet</h2>
                  <h2 className="text-[#232323] font-bold">₦905,778.25</h2>
                </div>
              </div>
            </div>
            <div className="w-[25%]">
              <div className="pb-[30px]">
                <h2 className="text-[#9B9697] text-[0.9rem]">User ID</h2>
                <h2 className="text-[1rem] text-[#232323] font-medium">093</h2>
              </div>
              <div className="pb-[30px]">
                <h2 className="text-[#9B9697] text-[0.9rem]">First name</h2>
                <h2 className="text-[1rem] text-[#232323] font-medium">Inem</h2>
              </div>
              <div className="pb-[30px]">
                <h2 className="text-[#9B9697] text-[0.9rem]">Last name</h2>
                <h2 className="text-[1rem] text-[#232323] font-medium">
                  Atiku
                </h2>
              </div>
              <div className="pb-[30px]">
                <h2 className="text-[#9B9697] text-[0.9rem]">Email</h2>
                <h2 className="text-[1rem] text-[#232323] font-medium">
                  inem@vendyz.com
                </h2>
              </div>
              <div className="pb-[30px]">
                <h2 className="text-[#9B9697] text-[0.9rem]">Phone number</h2>
                <h2 className="text-[1rem] text-[#232323] font-medium">
                  +2348048740391
                </h2>
              </div>
              <div className="pb-[30px]">
                <h2 className="text-[#9B9697] text-[0.9rem]">Payment ID</h2>
                <h2 className="text-[1rem] text-[#232323] font-medium">
                  www.vendyz.com/inem
                </h2>
              </div>
            </div>

            <div className="w-[25%]">
              <div className="pb-6">
                <h2 className="text-[#9B9697] text-[0.9rem]">Business name</h2>
                <h2 className="text-[1rem] text-[#232323] font-medium">
                  Sweet Cheeks
                </h2>
              </div>
              <div className="pb-6">
                <h2 className="text-[#9B9697] text-[0.9rem]">Address</h2>
                <h2 className="text-[1rem] text-[#232323] font-medium">
                  House 4A Chief Afolabi Akinsanya Cresent
                </h2>
              </div>
              <div className="pb-6">
                <h2 className="text-[#9B9697] text-[0.9rem]">Country</h2>
                <h2 className="text-[1rem] text-[#232323] font-medium">
                  Nigeria
                </h2>
              </div>
              <div className="pb-6">
                <h2 className="text-[#9B9697] text-[0.9rem]">State</h2>
                <h2 className="text-[1rem] text-[#232323] font-medium">
                  Lagos
                </h2>
              </div>
              <div className="pb-6">
                <h2 className="text-[#9B9697] text-[0.9rem]">LGA</h2>
                <h2 className="text-[1rem] text-[#232323] font-medium">-</h2>
              </div>
              <div className="pb-6">
                <h2 className="text-[#9B9697] text-[0.9rem]">Account type</h2>
                <h2 className="text-[1rem] text-[#232323] font-medium">
                  Vendor
                </h2>
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="pt-7">
        <div
          onClick={handleKyc}
          className={`border border-[#F0F0F0] rounded-lg flex justify-between items-center py-3 px-3  ${
            isKycExpanded ? "bg-[#F6F6F6]" : "bg-[#FFFFFF]"
          }`}
        >
          <h2 className="text-[#232323] font-bold text-[1rem]">KYC</h2>
          <div
            onClick={handleKyc}
            className="p-2 bg-[#FFFFFF] rounded-full cursor-pointer"
          >
            <FaChevronDown
              style={{
                transform: isKycExpanded ? "rotate(180deg)" : "rotate(0deg)",
              }}
            />
          </div>
        </div>
        {isKycExpanded && (
          <div className="flex justify-between items-start p-5">
            <div className="flex w-[40%] justify-between items-start gap-11">
              <div className="p-4">
                <div className="w-[200px] h-[200px] 2xl:w-[300px] 2xl:h-[300px]">
                  <img src={nationalIdCard} alt="" className="w-full h-full" />
                </div>
                <div className="pb-5">
                  <h2 className="text-[#9B9697] text-[0.9rem] 2xl:text-[1rem] pb-2">
                    ID Type
                  </h2>
                  <h2 className="text-[#232323] text-[1rem] 2xl:text-[1.1rem] font-bold pb-3">
                    National ID card
                  </h2>
                  <button className="border-[1.5px] border-[#83F3B2] bg-[#EFFFF6] text-[#449E6A] py-1 px-3 rounded-full text-[0.9rem] 2xl:text-[1rem]">
                    Approved
                  </button>
                </div>
                <div className="pb-4">
                  <h2 className="text-[#9B9697] text-[0.9rem] 2xl:text-[1rem] pb-1">
                    ID number
                  </h2>
                  <h2 className="text-[#232323] text-[1rem] 2xl:text-[1.1rem] font-medium pb-1">
                    2022561635
                  </h2>
                </div>
                <div className="flex justify-start items-center gap-2">
                  <img src={avatar} alt="" />
                  <div className="">
                    <h2 className="text-[1rem] 2xl:text-[1.1rem] text-[#9B9697]">
                      Moses Chima
                    </h2>
                  </div>
                </div>
              </div>
              <div className="p-4">
                <div className="w-[200px] h-[200px] 2xl:w-[300px] 2xl:h-[300px]">
                  <img src={proofOfAddress} alt="" className="w-full h-full" />
                </div>
                <div className="pb-5">
                  <h2 className="text-[#9B9697] text-[0.9rem] 2xl:text-[1rem] pb-2">
                    Document type
                  </h2>
                  <h2 className="text-[#232323] text-[1rem] 2xl:text-[1.1rem] font-bold pb-3">
                    Proof of address
                  </h2>
                  <button className="border-[1.5px] border-[#83F3B2] bg-[#EFFFF6] text-[#449E6A] py-1 px-3 rounded-full text-[0.9rem] 2xl:text-[1rem]">
                    Approved
                  </button>
                </div>
                <div className="flex justify-start items-center gap-2">
                  <img src={avatar2} alt="" />
                  <div className="">
                    <h2 className="text-[1rem] 2xl:text-[1.1rem] text-[#9B9697]">
                      Emmanuel Israel
                    </h2>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-4 w-[35%]">
              <div className="pb-5">
                <h2 className="text-[#9B9697] text-[0.9rem] pb-2">BVN</h2>
                <h2 className="text-[#232323] text-[1rem] font-bold pb-2">
                  1234 5678 901
                </h2>
                <button className="border-[1.5px] border-[#83F3B2] bg-[#EFFFF6] text-[#449E6A] py-1 px-3 rounded-full text-[0.9rem]">
                  Approved
                </button>
              </div>
              <div className="flex justify-start items-center gap-2">
                <img src={avatar} alt="" />
                <div className="">
                  <h2>Moses Chima</h2>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="pt-7">
        <div
          onClick={handleTransaction}
          className={`border border-[#F0F0F0] rounded-lg flex justify-between items-center py-3 px-3  ${
            istransactionExpanded ? "bg-[#F6F6F6]" : "bg-[#FFFFFF]"
          }`}
        >
          <h2 className="text-[#232323] font-bold text-[1rem]">Transactions</h2>
          <div
            onClick={handleTransaction}
            className="p-2 bg-[#FFFFFF] rounded-full cursor-pointer"
          >
            <FaChevronDown
              style={{
                transform: istransactionExpanded
                  ? "rotate(180deg)"
                  : "rotate(0deg)",
              }}
            />
          </div>
        </div>
        {istransactionExpanded && (
          <div className="py-5">
            <Transactions />
          </div>
        )}
      </div>

      <div className="pt-7">
        <div
          onClick={handleOrder}
          className={`border border-[#F0F0F0] rounded-lg flex justify-between items-center py-3 px-3  ${
            isOrderedExpanded ? "bg-[#F6F6F6]" : "bg-[#FFFFFF]"
          }`}
        >
          <h2 className="text-[#232323] font-bold text-[1rem]">Orders</h2>
          <div
            onClick={handleOrder}
            className="p-2 bg-[#FFFFFF] rounded-full cursor-pointer"
          >
            <FaChevronDown
              style={{
                transform: isOrderedExpanded
                  ? "rotate(180deg)"
                  : "rotate(0deg)",
              }}
            />
          </div>
        </div>
        {isOrderedExpanded && (
          <div className="py-5">
            <Orders />
          </div>
        )}
      </div>
    </div>
  );
};

export default MerchantDetail;
