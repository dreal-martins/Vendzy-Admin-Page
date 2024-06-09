import React, { useEffect, useState } from "react";
import { useAppContext } from "../../contexts";
import { FaArrowUpLong, FaArrowDownLong } from "react-icons/fa6";
import filterIcon from "../../assets/icons/sortIcon.svg";
import refreshIcon from "../../assets/icons/refreshIcon.svg";
import searchIcon from "../../assets/icons/searchIcon.svg";
import editIcon from "../../assets/icons/editIcon.svg";
import NotificationTable from "../../components/Tables/NotificationTable";
import editBlueIcon from "../../assets/icons/editBlueIcon.svg";
import times from "../../assets/icons/timesIcon.svg";
import { ConfigProvider, Select, Space } from "antd";

const Notifications = () => {
  const { setHeaderTitle } = useAppContext();
  const [modal, setModal] = useState(false);
  const [mode, setMode] = useState("");

  useEffect(() => {
    setHeaderTitle("Notifications");
  }, [setHeaderTitle]);

  const handleOpenModal = () => {
    setModal(true);
  };
  const handleCloseModal = () => {
    setModal(false);
  };
  const filterOption = (input, option) =>
    (option?.label ?? "").toLowerCase().includes(input.toLowerCase());

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
            <button className="flex justify-start items-center border border-[#F0F0F0] rounded-xl py-1 px-3 gap-2 shadow-2xl text-[0.8rem]">
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
                className="border border-[#F0F0F0] rounded-xl py-1 pl-10 outline-none w-full placeholder:text-[0.9rem] placeholder:text-[#9B9697]"
                type="text"
                placeholder="Search"
              />
              <span className="absolute left-3 top-1.5">
                <img src={searchIcon} alt="icon" />
              </span>
            </div>
            <button className="flex justify-start items-center border border-[#F0F0F0] rounded-full py-1.5 px-3 gap-2 shadow-2xl text-[#5C5959] text-[0.9rem] font-medium">
              <span>
                <img src={refreshIcon} alt="icon" />
              </span>
              Refresh
            </button>
            <button
              onClick={handleOpenModal}
              className="flex justify-start items-center border border-[#F0F0F0] rounded-full py-1.5 px-3 gap-2 shadow-2xl text-[#5C5959] text-[0.9rem] font-medium"
            >
              <span>
                <img src={editIcon} alt="icon" />
              </span>
              Send new
            </button>
            <button className="flex justify-start items-center border border-[#F0F0F0] rounded-full py-1.5 px-3 gap-2 shadow-2xl text-[#5C5959] text-[0.9rem] font-medium">
              <span>
                <img src={filterIcon} alt="icon" />
              </span>
              Filter
            </button>
          </div>
        </div>
        <NotificationTable />
      </div>
      {modal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-30">
          <div className="bg-white p-5 rounded-lg shadow-lg w-[45%]">
            <div className="flex justify-between items-center">
              <div className="">
                <img src={editBlueIcon} alt="icon" />
              </div>
              <div onClick={handleCloseModal} className="cursor-pointer">
                <img src={times} alt="icon" />
              </div>
            </div>
            <h2 className="text-[#232323] font-bold text-[1rem] pt-3">
              Send new notification
            </h2>
            <h2 className="text-[#5C5959] text-[0.9rem]">
              To send a new notification, please provide the information below.
            </h2>

            <form className="pt-5">
              <div className="w-full">
                <label className="block text-[0.9rem] text-[#5C5959]">
                  Mode
                </label>
                <Select
                  className="w-full rounded-full border mt-1 mb-3"
                  allowClear
                  placeholder="Select Mode"
                  options={[
                    {
                      value: "Single",
                      label: "Single",
                    },
                  ]}
                  onChange={(value) => setMode(value)}
                />
              </div>
              {mode === "Single" && (
                <div className="w-full">
                  <label className="block text-[0.9rem] text-[#5C5959]">
                    User
                  </label>
                  <Select
                    className="w-full rounded-full border mt-1 mb-3"
                    showSearch
                    optionFilterProp="children"
                    allowClear
                    placeholder="User ID, name, email, or phone number"
                    filterOption={filterOption}
                    options={[
                      {
                        value: "Inem Atiku",
                        label: "Inem Atiku",
                      },
                      {
                        value: "Tochi Alhaji",
                        label: "Tochi Alhaji",
                      },
                      {
                        value: "Ebiye Sango",
                        label: "Ebiye Sango",
                      },
                      {
                        value: "Mofe James",
                        label: "Mofe James",
                      },
                    ]}
                    // onChange={onChange}
                    // onSearch={onSearch}
                  />
                </div>
              )}
              <div className="flex justify-between items-center gap-7">
                <div className="w-full">
                  <label className="block text-[0.9rem] text-[#5C5959]">
                    Channel
                  </label>
                  <Select
                    className="w-full rounded-full border mt-1 mb-3"
                    allowClear
                    placeholder="Select option"
                    options={[
                      {
                        value: "Email",
                        label: "Email",
                      },
                    ]}
                    // onChange={(value) => setMode(value)}
                  />
                </div>
                <div className="w-full">
                  <label className="block text-[0.9rem] text-[#5C5959]">
                    Type
                  </label>
                  <Select
                    className="w-full rounded-2xl border mt-1 mb-3"
                    allowClear
                    placeholder="Select option"
                    options={[
                      {
                        value: "Promotions",
                        label: "Promotions",
                      },
                    ]}
                    // onChange={(value) => setMode(value)}
                  />
                </div>
              </div>
              <div className="flex justify-between items-center gap-7">
                <div className="w-full">
                  <label className="block text-[0.9rem] text-[#5C5959]">
                    Title
                  </label>
                  <input
                    type="text"
                    className="w-full rounded-lg border py-1 outline-none px-3 mt-1 mb-3"
                  />
                </div>
                <div className="w-full">
                  <label className="block text-[0.9rem] text-[#5C5959]">
                    Description
                  </label>
                  <input
                    type="text"
                    className="w-full rounded-lg border py-1 outline-none px-3 mt-1 mb-3"
                  />
                </div>
              </div>
              <div className="w-full">
                <label className="block text-[0.9rem] text-[#5C5959]">
                  Message
                </label>
                <textarea className="w-full resize-none rounded-xl border py-1 outline-none px-3 mt-1 mb-3"></textarea>
              </div>
              <div className="flex justify-between items-center gap-5">
                <button className="w-full rounded-2xl border text-[#5C5959] font-medium text-[1rem] py-1.5">
                  Cancel
                </button>
                <button className="w-full rounded-2xl border text-[#FFFFFF] font-medium text-[1rem] py-1.5 bg-[#5271FF]">
                  Send
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Notifications;
