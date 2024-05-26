import React from "react";
import { ConfigProvider, Table } from "antd";
import avatar from "../../../assets/images/avatar.svg";
import avatarOne from "../../../assets/images/avatar1.svg";
import avatarTwo from "../../../assets/images/avatar2.svg";
import avatarThree from "../../../assets/images/avatar3.svg";
import { FaChevronDown } from "react-icons/fa";
import { HiDotsHorizontal } from "react-icons/hi";

const data = [
  {
    key: "1",
    img: avatar,
    contactEmail: "ebiye@yahoo.com",
    contactNumber: "+2347097783230",
    refNumber: "001",
    name: "Ebiye Sango",
    amount: "₦200,000.00",
    date: "Aug 12, 2023 • 10:47 PM",
    type: "Active",
    icon: <FaChevronDown />,
    accountType: "Buyer",
    menu: <HiDotsHorizontal />,
  },
  {
    key: "2",
    img: avatarOne,
    contactEmail: "ebiye@yahoo.com",
    contactNumber: "+2347097783230",
    refNumber: "001",
    name: "Ebiye Sango",
    amount: "₦200,000.00",
    date: "Aug 12, 2023 • 10:47 PM",
    type: "Inactive",
    icon: <FaChevronDown />,
    accountType: "Buyer",
    menu: <HiDotsHorizontal />,
  },
  {
    key: "3",
    img: avatarTwo,
    contactEmail: "ebiye@yahoo.com",
    contactNumber: "+2347097783230",
    refNumber: "001",
    name: "Ebiye Sango",
    amount: "₦200,000.00",
    date: "Aug 12, 2023 • 10:47 PM",
    type: "Active",
    icon: <FaChevronDown />,
    accountType: "Buyer",
    menu: <HiDotsHorizontal />,
  },
  {
    key: "4",
    img: avatarThree,
    contactEmail: "ebiye@yahoo.com",
    contactNumber: "+2347097783230",
    refNumber: "001",
    name: "Ebiye Sango",
    amount: "₦200,000.00",
    date: "Aug 12, 2023 • 10:47 PM",
    type: "Inactive",
    icon: <FaChevronDown />,
    accountType: "Buyer",
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
    title: "Contact",
    dataIndex: "contact",
    key: "contact",
    render: (text, record) => {
      return (
        <div>
          <h4 className="text-[#232323] text-[0.9rem] font-medium">
            {record.contactNumber}
          </h4>
          <p className="text-[#9B9697] text-[0.9rem]">{record.contactEmail}</p>
        </div>
      );
    },
  },
  {
    title: "Accout Type",
    dataIndex: "accountType",
    key: "accountType",
    render: (text) => {
      return <h2 className="text-[#232323] font-medium">{text}</h2>;
    },
  },
  {
    title: "Date",
    dataIndex: "date",
    key: "date",
    render: (text) => {
      return <h2 className="text-[#232323] font-medium">{text}</h2>;
    },
  },
  {
    title: "Account status",
    key: "type",
    dataIndex: "type",
    render: (text, record) => {
      return (
        <div className="flex justify-between items-center">
          <h2
            className={`${
              text === "Active"
                ? "border border-[#83F3B2] text-[#449E6A] bg-[#EFFFF6] text-center  rounded-full py-1 px-3 text-[0.9rem]"
                : "border border-[##FFBBBB] bg-[#FFE8E8] text-[#EF5959] text-center rounded-full py-1 px-3 text-[0.9rem]"
            }`}
          >
            {text}
          </h2>

          <div className="flex justify-between items-center w-[30%]">
            <h1 className="text-[1.1rem] cursor-pointer">{record.icon}</h1>
            <h1 className="text-[1.1rem] cursor-pointer">{record.menu}</h1>
          </div>
        </div>
      );
    },
  },
];

const UserTable = () => (
  <ConfigProvider
    theme={{
      components: {
        Table: {
          headerColor: "#9B9697",
        },
      },
    }}
  >
    <Table columns={columns} dataSource={data} pagination={true} />
  </ConfigProvider>
);

export default UserTable;
