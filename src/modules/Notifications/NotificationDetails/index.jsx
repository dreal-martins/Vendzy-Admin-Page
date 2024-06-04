import React, { useEffect, useState } from "react";
import { useAppContext } from "../../../contexts";
import arrowRightIcon from "../../../assets/icons/arrowRightIcon.svg";
import { FaChevronDown } from "react-icons/fa6";

const NotificationDetails = () => {
  const [isDetailExpanded, setDetailExpanded] = useState(true);
  const [isMessageExpanded, setIsMessageExpanded] = useState(false);
  const { setHeaderTitle } = useAppContext();

  useEffect(() => {
    setHeaderTitle("Notifications");
  }, [setHeaderTitle]);

  const handleDetail = () => {
    setDetailExpanded(!isDetailExpanded);
    setIsMessageExpanded(false);
  };

  const handleMessage = () => {
    setDetailExpanded(false);
    setIsMessageExpanded(!isMessageExpanded);
  };

  return (
    <div className="h-[85vh] overflow-auto">
      <button className="flex justify-between items-center border border-[#F0F0F0] rounded-full text-[#5C5959] px-4 py-2 gap-2 shadow-lg">
        <span>
          <img src={arrowRightIcon} alt="icon" />
        </span>
        Back
      </button>

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
          <div className="border border-[#F0F0F0] rounded-xl">
            <div className="flex justify-start items-center gap-4 px-5 pt-5 pb-3">
              <div className="w-[30%]">
                <h2 className="text-[#9B9697] text-[0.9rem] pb-1">User ID</h2>
                <h2 className="text-[#232323] font-medium text-[1rem]">647</h2>
              </div>
              <div className="w-[30%]">
                <h2 className="text-[#9B9697] text-[0.9rem] pb-1">Title</h2>
                <h2 className="text-[#232323] font-medium text-[1rem]">
                  Service Fee
                </h2>
              </div>
              <div className="w-[30%]">
                <h2 className="text-[#9B9697] text-[0.9rem] pb-1">
                  Description
                </h2>
                <h2 className="text-[#232323] font-medium text-[1rem]">
                  No service fee
                </h2>
              </div>
            </div>
            <div className="flex justify-start items-center gap-4 px-5 py-3">
              <div className="w-[30%]">
                <h2 className="text-[#9B9697] text-[0.9rem] pb-1">Name</h2>
                <h2 className="text-[#232323] font-medium text-[1rem]">
                  Tochi Alhaji
                </h2>
              </div>
              <div className="w-[30%]">
                <h2 className="text-[#9B9697] text-[0.9rem] pb-1">Type</h2>
                <h2 className="text-[#232323] font-medium text-[1rem]">
                  Promotion
                </h2>
              </div>
              <div className="w-[30%]">
                <h2 className="text-[#9B9697] text-[0.9rem] pb-1">Reference</h2>
                <h2 className="text-[#232323] font-medium text-[1rem]">
                  VD1234567890
                </h2>
              </div>
            </div>
            <div className="flex justify-start items-center gap-4 px-5 py-3">
              <div className="w-[30%]">
                <h2 className="text-[#9B9697] text-[0.9rem] pb-1">
                  Phone number
                </h2>
                <h2 className="text-[#232323] font-medium text-[1rem]">
                  +2348048740487
                </h2>
              </div>
              <div className="w-[30%]">
                <h2 className="text-[#9B9697] text-[0.9rem] pb-1">Channel</h2>
                <h2 className="text-[#232323] font-medium text-[1rem]">
                  Email
                </h2>
              </div>
              <div className="w-[30%]">
                <h2 className="text-[#9B9697] text-[0.9rem] pb-1">Status</h2>
                <button className="text-[#232323] text-[0.9rem] border border-[#F0F0F0] rounded-full bg-[#F4F4F4] px-3 py-1 cursor-default">
                  Sent
                </button>
              </div>
            </div>
            <div className="flex justify-start items-center gap-4 px-5 pt-3 pb-5">
              <div className="w-[30%]">
                <h2 className="text-[#9B9697] text-[0.9rem] pb-1">Email</h2>
                <h2 className="text-[#232323] font-medium text-[1rem]">
                  tochi@gmail.com
                </h2>
              </div>
              <div className="w-[30%]">
                <h2 className="text-[#9B9697] text-[0.9rem] pb-1">Mode</h2>
                <h2 className="text-[#232323] font-medium text-[1rem]">
                  Single
                </h2>
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="pt-7">
        <div
          onClick={handleMessage}
          className={`border border-[#F0F0F0] rounded-lg flex justify-between items-center py-3 px-3  ${
            isMessageExpanded ? "bg-[#F6F6F6]" : "bg-[#FFFFFF]"
          }`}
        >
          <h2 className="text-[#232323] font-bold text-[1rem]">Message</h2>
          <div
            onClick={handleMessage}
            className="p-2 bg-[#FFFFFF] rounded-full cursor-pointer"
          >
            <FaChevronDown
              style={{
                transform: isMessageExpanded
                  ? "rotate(180deg)"
                  : "rotate(0deg)",
              }}
            />
          </div>
        </div>
        {isMessageExpanded && (
          <div className="border border-[#F0F0F0] rounded-xl p-5">
            <div className="pb-6">
              <h2 className="text-[#9B9697] text-[0.9rem]">Date</h2>
              <h2 className="text-[#232323] font-medium text-[1rem]">
                Feb 02, 2023 • 10:24 AM
              </h2>
            </div>
            <div className="">
              <h2 className="text-[#9B9697] text-[0.9rem]">Message</h2>
              <h2 className="text-[#232323] font-medium text-[1rem]">
                There will no longer be a service fee charge for your first 15
                transactions made.
              </h2>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default NotificationDetails;
