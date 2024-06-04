import React, { useEffect } from "react";
import { useAppContext } from "../../../contexts";
import arrowRightIcon from "../../../assets/icons/arrowRightIcon.svg";
import avatar from "../../../assets/images/avatar.svg";
import messageIcon from "../../../assets/icons/disputeMessageIcon.svg";
import phoneIcon from "../../../assets/icons/disputePhoneIcon.svg";
import mopImg from "../../../assets/images/mopImg.svg";
import copyIcon from "../../../assets/icons/copyIcon.svg";
import mozartIfiokImg from "../../../assets/images/mozartIfiok.svg";
import smsIcon from "../../../assets/icons/smsIcon.svg";
import ecoBankImg from "../../../assets/images/ecobank.svg";
import nationalId from "../../../assets/images/nationalIdCard.svg";
import proofOfAddress from "../../../assets/images/proofOfAddress.svg";
import certificateOfDocument from "../../../assets/images/certificateOfDocument.svg";
import avatar2 from "../../../assets/images/emmanuelIsreal.svg";

const DisputesDetails = () => {
  const { setHeaderTitle } = useAppContext();

  useEffect(() => {
    setHeaderTitle("Disputes");
  }, [setHeaderTitle]);

  return (
    <div className="h-[85vh] overflow-auto">
      <div className="flex justify-between items-center pr-4">
        <button className="flex justify-between items-center border border-[#F0F0F0] rounded-full text-[#5C5959] px-4 py-2 gap-2 shadow-lg">
          <span>
            <img src={arrowRightIcon} alt="icon" />
          </span>
          Back
        </button>
        <button className="bg-[#5271FF] text-[#FFFFFF] rounded-full px-4 py-2 shadow-lg">
          Mark as resolved
        </button>
      </div>

      <h2 className="text-[#232323] font-bold text-[1.3rem] py-4">Details</h2>

      <div className="flex justify-between items-start border-b border-[#F0F0F0] pb-[2rem]">
        <div className="w-[26%]">
          <h2 className="text-[0.9rem] text-[#9B9697] pb-3">Dispute by</h2>
          <div className="flex justify-start items-start gap-2 pb-2">
            <div className="w-[14%] 2xl:w-[11%]">
              <img src={avatar} alt="avatar" className="w-full h-full" />
            </div>
            <div className="">
              <h2 className="text-[#232323] font-medium">Ebiye Sango</h2>
              <h2 className="text-[#9B9697]">Buyer</h2>
            </div>
          </div>
          <div className="flex justify-start items-start gap-2">
            <div className="cursor-pointer">
              <img src={messageIcon} alt="message-icon" />
            </div>
            <div className="cursor-pointer">
              <img src={phoneIcon} alt="phone-icon" />
            </div>
          </div>
        </div>
        <div className="w-[18%]">
          <h2 className="text-[0.9rem] text-[#9B9697] pb-3">Dispute ID</h2>
          <h2 className="text-[#5C5959] text-[1rem] font-medium">55689</h2>
        </div>
        <div className="w-[18%]">
          <h2 className="text-[0.9rem] text-[#9B9697] pb-3">Payment amount</h2>
          <h2 className="text-[#5C5959] text-[1rem] font-medium">
            ₦200,000.00
          </h2>
        </div>
        <div className="w-[18%]">
          <h2 className="text-[0.9rem] text-[#9B9697] pb-3">Payment date</h2>
          <h2 className="text-[#5C5959] text-[1rem] font-medium">
            Aug 12, 2023
          </h2>
          <h2 className="text-[#5C5959] text-[1rem] font-medium">07:14 AM</h2>
        </div>
        <div className="w-[18%]">
          <h2 className="text-[0.9rem] text-[#9B9697] pb-3">Dispute status</h2>
          <button className="text-[#232323] text-[0.9rem] border border-[#F0F0F0] rounded-full bg-[#F4F4F4] px-3 py-1 cursor-default">
            Unresolved
          </button>
        </div>
      </div>

      <div className="flex justify-between items-start border-b border-[#F0F0F0] py-[2rem]">
        <div className="w-[30%]">
          <h2 className="text-[0.9rem] text-[#9B9697] pb-3">Item</h2>
          <div className="flex justify-start items-start gap-2 ">
            <div className="w-[60%] 2xl:w-[22%]">
              <img src={mopImg} alt="img" className="w-full h-full" />
            </div>
            <h2 className="font-medium text-[#232323] 2xl:w-[50%]">
              Generic 2pcs Easy 360° Magic Rotating Spin Mop Head Microfiber
              Replacement Head Apply To Adapt
            </h2>
          </div>
        </div>
        <div className="w-[21%]">
          <h2 className="text-[0.9rem] text-[#9B9697] pb-3">Order ID</h2>
          <h2 className="text-[#5C5959] font-medium">VD54779111S</h2>
          <h2 className="flex justify-start items-center pt-2 gap-1 text-[0.75rem] text-[#5271FF] cursor-pointer">
            <span>
              <img src={copyIcon} alt="" />
            </span>
            Copy
          </h2>
        </div>
        <div className="w-[21%]">
          <h2 className="text-[0.9rem] text-[#9B9697] pb-3">Order amount</h2>
          <h2 className="text-[#5C5959] font-medium">₦200,000.00</h2>
        </div>
        <div className="w-[21%]">
          <h2 className="text-[0.9rem] text-[#9B9697] pb-3">Vendor</h2>
          <div className="flex justify-start items-start gap-3 pb-2">
            <div className="">
              <img src={mozartIfiokImg} alt="" />
            </div>
            <div className="">
              <h2 className="text-[#232323] text-[1rem] font-medium">
                Mozart Ifiok
              </h2>
              <h2 className="text-[#9B9697] text-[1rem]">Mooi Gadgets</h2>
              <h2 className="text-[#9B9697] text-[1rem]">Vendor</h2>
            </div>
          </div>
          <div className="flex justify-start items-start gap-2">
            <div className="cursor-pointer">
              <img src={messageIcon} alt="message-icon" />
            </div>
            <div className="cursor-pointer">
              <img src={phoneIcon} alt="phone-icon" />
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-start items-start border-b border-[#F0F0F0] py-[3rem]">
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
          <h2 className="text-[#5C5959] text-[1rem] font-medium pb-2">
            <span className="text-[#9B9697] font-normal">Account number:</span>{" "}
            2354886855
          </h2>
          <button className="text-[#5C5959] text-[0.9rem] border border-[#F0F0F0] rounded-full bg-[#FFFFFF] px-3 py-1 cursor-default">
            View profile
          </button>
        </div>

        <div className="w-[20%]">
          <h2 className="text-[0.9rem] text-[#9B9697] pb-1">Payment method</h2>
          <h2 className="text-[#232323] font-medium text-[1rem]">
            Bank transfer
          </h2>
        </div>
      </div>

      <div className="flex justify-start items-start border-b border-[#F0F0F0] py-[3rem]">
        <div className="w-[30%]">
          <h2 className="text-[0.9rem] text-[#9B9697] pb-3">Buyer’s remarks</h2>
          <h2 className="text-[#232323] font-medium w-[70%]">
            The seller did not send or deliver my order to me. Please refund my
            money to me; thank you.
          </h2>
        </div>
        <div className="w-[18%]">
          <h2 className="text-[0.9rem] text-[#9B9697] pb-3">Receipt</h2>
          <h2 className="text-[#5C5959] font-medium">No</h2>
        </div>
        <div className="w-[18%]">
          <h2 className="text-[0.9rem] text-[#9B9697] pb-3">Proposal</h2>
          <h2 className="text-[#5C5959] font-medium">Refund</h2>
        </div>
        <div className="w-[30%]">
          <h2 className="text-[0.9rem] text-[#9B9697] pb-3">Evidence</h2>
          <div className="flex justify-start items-start gap-2">
            <div className="w-[30%]">
              <img src={nationalId} alt="" className="w-full h-full" />
            </div>
            <div className="w-[30%]">
              <img src={proofOfAddress} alt="" className="w-full h-full" />
            </div>
            <div className="w-[30%]">
              <img
                src={certificateOfDocument}
                alt=""
                className="w-full h-full"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-start items-start border-b border-[#F0F0F0] py-[3rem]">
        <div className="w-[30%]">
          <h2 className="text-[0.9rem] text-[#9B9697] pb-3">
            Seller’s remarks
          </h2>
          <h2 className="text-[#232323] font-medium w-[70%]">
            The product was delivered.
          </h2>
        </div>
        <div className="w-[18%]">
          <h2 className="text-[0.9rem] text-[#9B9697] pb-3">Receipt</h2>
          <h2 className="text-[#5C5959] font-medium">Yes</h2>
        </div>
        <div className="w-[18%]">
          <h2 className="text-[0.9rem] text-[#9B9697] pb-3">Proposal</h2>
          <h2 className="text-[#5C5959] font-medium">No refund</h2>
        </div>
        <div className="w-[30%]">
          <h2 className="text-[0.9rem] text-[#9B9697] pb-3">Evidence</h2>
          <div className="flex justify-start items-start gap-2">
            <div className="w-[30%]">
              <img src={proofOfAddress} alt="" className="w-full h-full" />
            </div>

            <div className="w-[30%]">
              <img
                src={certificateOfDocument}
                alt=""
                className="w-full h-full"
              />
            </div>
            <div className="w-[30%]">
              <img src={nationalId} alt="" className="w-full h-full" />
            </div>
          </div>
        </div>
      </div>

      <div className="border-b border-[#F0F0F0] py-[3rem]">
        <h2 className="text-[1.5rem] text-[#232323] font-bold pb-3">
          Resolution
        </h2>
        <div className="flex justify-start items-start ">
          <div className="w-[36%]">
            <h2 className="text-[0.9rem] text-[#9B9697] pb-3">
              Reason for resolution
            </h2>
            <h2 className="text-[#232323] font-medium w-[70%] pb-7">
              The seller did not send or deliver the order to the buyer.
            </h2>
            <div className="flex justify-start items-center gap-2">
              <img src={avatar2} alt="" />
              <div className="">
                <h2 className="text-[1rem] 2xl:text-[1.1rem] text-[#9B9697]">
                  Emmanuel Israel
                </h2>
              </div>
            </div>
          </div>
          <div className="w-[18%]">
            <h2 className="text-[0.9rem] text-[#9B9697] pb-3">
              Resolution type
            </h2>
            <h2 className="text-[#5C5959] font-medium">Refund buyer</h2>
          </div>
          <div className="w-[18%]">
            <h2 className="text-[0.9rem] text-[#9B9697] pb-3">
              Resolution amount
            </h2>
            <h2 className="text-[#5C5959] font-medium">₦200,000.00</h2>
          </div>
          <div className="w-[18%]">
            <h2 className="text-[0.9rem] text-[#9B9697] pb-3">
              Resolution date
            </h2>
            <h2 className="text-[#5C5959] font-medium">Aug 16, 2023</h2>
            <h2 className="text-[#5C5959] font-medium">09:59 AM</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DisputesDetails;
