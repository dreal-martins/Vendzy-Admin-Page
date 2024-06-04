import React, { useState } from "react";
import { ConfigProvider, Table } from "antd";
import avatar from "../../../assets/images/avatar.svg";
import avatarOne from "../../../assets/images/avatar1.svg";
import avatarTwo from "../../../assets/images/avatar2.svg";
import avatarThree from "../../../assets/images/avatar3.svg";
import { FaChevronDown } from "react-icons/fa";
import { HiDotsHorizontal } from "react-icons/hi";
import { Link } from "react-router-dom";

const NotificationTable = () => {
  const [expandedRowKeys, setExpandedRowKeys] = useState([]);

  const data = [
    {
      key: "1",
      img: avatar,
      title: "Activate Account",
      description: "Setup KYC",
      type: "Reminder",
      mode: "Broadcast",
      status: "Delivered",
      refNumber: "001",
      name: "Ebiye Sango",
      icon: <FaChevronDown />,
      menu: <HiDotsHorizontal />,
    },
    {
      key: "2",
      img: avatarOne,
      title: "Service Fee",
      description: "No service fee",
      type: "Promotion",
      mode: "Single",
      status: "Sent",
      refNumber: "093",
      name: "Inem Atiku",
      icon: <FaChevronDown />,
      menu: <HiDotsHorizontal />,
    },
    {
      key: "3",
      img: avatarTwo,
      title: "Activate Account",
      description: "Setup KYC",
      type: "Reminder",
      mode: "Broadcast",
      status: "Delivered",
      refNumber: "528",
      name: "Mofe James",
      icon: <FaChevronDown />,
      menu: <HiDotsHorizontal />,
    },
    {
      key: "4",
      img: avatarThree,
      title: "Service Fee",
      description: "No service fee",
      type: "Promotion",
      mode: "Single",
      status: "Sent",
      refNumber: "647",
      name: "Tochi Alhaji",
      icon: <FaChevronDown />,
      menu: <HiDotsHorizontal />,
    },
  ];

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      render: (text, record) => {
        return (
          <div style={{ display: "flex", alignItems: "center" }}>
            <img
              src={record.img}
              alt=""
              style={{ width: "40px", marginRight: "10px" }}
            />
            <div>
              <h4 className="text-[#232323] text-[0.9rem] font-medium">
                {record.name}
              </h4>
              <p className="text-[#9B9697] text-[0.9rem]">{record.refNumber}</p>
            </div>
          </div>
        );
      },
    },
    {
      title: "Title",
      dataIndex: "title",
      key: "title",
      render: (text, record) => {
        return (
          <h4 className="text-[#232323] text-[0.9rem] font-medium">{text}</h4>
        );
      },
    },
    {
      title: "Description",
      dataIndex: "description",
      key: "description",
      render: (text, record) => {
        return (
          <h4 className="text-[#232323] text-[0.9rem] font-medium">{text}</h4>
        );
      },
    },
    {
      title: "Type",
      dataIndex: "type",
      key: "type",
      render: (text) => {
        return <h2 className="text-[#232323] font-medium">{text}</h2>;
      },
    },
    {
      title: "Mode",
      dataIndex: "mode",
      key: "mode",
      render: (text) => {
        return <h2 className="text-[#232323] font-medium">{text}</h2>;
      },
    },
    {
      title: "Status",
      key: "status",
      dataIndex: "status",
      render: (text, record) => {
        const isExpanded = expandedRowKeys.includes(record.key);

        return (
          <div className="flex justify-between items-center">
            <h2
              className={`${
                text === "Delivered"
                  ? "border border-[#83F3B2] text-[#449E6A] bg-[#EFFFF6] text-center  rounded-full py-1 px-3 text-[0.9rem]"
                  : "border border-[#F0F0F0] bg-[#F4F4F4] text-[#EF5959] text-center rounded-full py-1 px-3 text-[0.9rem]"
              }`}
            >
              {text}
            </h2>

            {/* <div className="flex justify-between items-center w-[30%]">
              <h1 className="text-[1.1rem] cursor-pointer">{record.icon}</h1>
              <h1 className="text-[1.1rem] cursor-pointer">{record.menu}</h1>
            </div> */}

            <div className="flex justify-between items-center w-[30%]">
              <h1
                className="text-[1.1rem] cursor-pointer"
                onClick={() => handleExpand(record.key)}
              >
                <FaChevronDown
                  style={{
                    transform: isExpanded ? "rotate(180deg)" : "rotate(0deg)",
                  }}
                />
              </h1>
              <h1 className="text-[1.1rem] cursor-pointer">
                <HiDotsHorizontal />
              </h1>
            </div>
          </div>
        );
      },
    },
  ];

  const handleExpand = (key) => {
    const newExpandedRowKeys = expandedRowKeys.includes(key)
      ? expandedRowKeys.filter((k) => k !== key)
      : [...expandedRowKeys, key];
    setExpandedRowKeys(newExpandedRowKeys);
  };

  return (
    <ConfigProvider
      theme={{
        components: {
          Table: {
            headerColor: "#9B9697",
          },
        },
      }}
    >
      <Table
        columns={columns}
        dataSource={data}
        pagination={true}
        expandedRowKeys={expandedRowKeys}
        rowClassName={(record) =>
          expandedRowKeys.includes(record.key) ? "expanded" : ""
        }
        expandable={{
          expandIcon: () => {},
          expandedRowRender: (record) => (
            <div className="py-5 pl-[3.2rem]">
              <h2 className="text-[#232323] font-medium pb-4 text-[1rem]">
                Basic information
              </h2>
              <div className="flex justify-start items-start">
                <div className="w-[45%]">
                  <h2 className="text-[#9B9697] text-[0.9rem] pb-2">Email</h2>
                  <h2 className="text-[#232323] font-medium text-[1rem] pb-4">
                    tochi@gmail.com
                  </h2>
                  <h3 className="text-[#9B9697] text-[0.9rem] pb-2">
                    Phone number
                  </h3>
                  <h2 className="text-[#232323] font-medium text-[1rem]">
                    +2348048740487
                  </h2>
                </div>
                <div className="w-[20%]">
                  <h2 className="text-[#9B9697] text-[0.9rem] pb-2">Channel</h2>
                  <h2 className="font-medium text-[#5C5959] text-[1rem] pb-4">
                    Email
                  </h2>
                  <h3 className="text-[#9B9697] text-[0.9rem] pb-2">
                    Reference
                  </h3>
                  <h2 className="text-[#5C5959] font-medium text-[1rem]">
                    VD1234567890
                  </h2>
                </div>
                <div className="w-[35%]">
                  <h2 className="text-[#9B9697] text-[0.9rem] pb-2">Message</h2>
                  <h2 className="text-[#232323] text-[1rem] font-medium w-[95%] 2xl:w-[70%] pb-5">
                    There will no longer be a service fee charge for your first
                    15 transactions made.
                  </h2>
                  <Link
                    to={"notifications-detail"}
                    className="border border-[#F0F0F0] rounded-full py-1 px-4 font-medium text-[0.9rem] text-[#5271FF]"
                  >
                    View details
                  </Link>
                </div>
              </div>
            </div>
          ),
        }}
        onExpand={(expanded, record) => handleExpand(record.key)}
      />
    </ConfigProvider>
  );
};

export default NotificationTable;
