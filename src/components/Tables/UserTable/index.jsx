import React, { useState } from "react";
import { ConfigProvider, Table } from "antd";
import avatar from "../../../assets/images/avatar.svg";
import avatarOne from "../../../assets/images/avatar1.svg";
import avatarTwo from "../../../assets/images/avatar2.svg";
import avatarThree from "../../../assets/images/avatar3.svg";
import { FaChevronDown } from "react-icons/fa";
import { HiDotsHorizontal } from "react-icons/hi";
import idCardImg from "../../../assets/images/idCard.svg";
import proofOfImg from "../../../assets/images/proofOfAddress.svg";
import { Link } from "react-router-dom";

const UserTable = () => {
  const [expandedRowKeys, setExpandedRowKeys] = useState([]);

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
      accountType: "Buyer",
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
      accountType: "Buyer",
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
      accountType: "Buyer",
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
      accountType: "Buyer",
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
            <p className="text-[#9B9697] text-[0.9rem]">
              {record.contactEmail}
            </p>
          </div>
        );
      },
    },
    {
      title: "Account Type",
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
      title: "Account Status",
      key: "type",
      dataIndex: "type",
      render: (text, record) => {
        const isExpanded = expandedRowKeys.includes(record.key);
        return (
          <div className="flex justify-between items-center">
            <h2
              className={`${
                text === "Active"
                  ? "border border-[#83F3B2] text-[#449E6A] bg-[#EFFFF6] text-center rounded-full py-1 px-3 text-[0.9rem]"
                  : "border border-[#FFBBBB] bg-[#FFE8E8] text-[#EF5959] text-center rounded-full py-1 px-3 text-[0.9rem]"
              }`}
            >
              {text}
            </h2>

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
              <h2 className="text-[#232323] font-medium text-[1rem]">
                Basic information
              </h2>
              <div className="flex justify-between items-start pt-3">
                <div className="w-[30%]">
                  <h2 className="text-[#9B9697] text-[0.9rem]">
                    Business name
                  </h2>
                  <div className="pt-2">
                    <h2 className="font-medium text-[#232323] text-[1rem]">
                      Fervent Stores
                    </h2>
                    <h2 className="text-[0.9rem] text-[#9B9697] pt-3">
                      Address
                    </h2>
                    <h2 className="font-medium text-[#232323] text-[1rem] pt-3">
                      House 4A Chief Afolabi Akinsanya Cresent
                    </h2>
                    <h2 className="text-[0.9rem] text-[#9B9697] pt-3">
                      Country
                    </h2>
                    <h2 className="font-medium text-[#232323] text-[1rem] pt-3">
                      Nigeria
                    </h2>
                    <h2 className="text-[0.9rem] text-[#9B9697] pt-3">
                      Payment ID
                    </h2>
                    <h2 className="font-medium text-[#232323] text-[1rem] pt-3">
                      www.vendyz.com/inem
                    </h2>
                  </div>
                </div>
                <div className="w-[30%]">
                  <h2 className="text-[#9B9697] text-[0.9rem]">State</h2>
                  <div className="pt-2">
                    <h2 className="font-medium text-[#232323] text-[1rem]">
                      Lagos
                    </h2>
                    <h2 className="text-[0.9rem] text-[#9B9697] pt-3">LGA</h2>
                    <h2 className="text-[0.9rem] text-[#9B9697] pt-3 font-bold">
                      -
                    </h2>
                    <h2 className="text-[0.9rem] text-[#9B9697] pt-3">BVN</h2>
                    <h2 className="text-[1rem] text-[#5C5959] pt-3 font-medium">
                      1234 5678 901
                    </h2>
                  </div>
                </div>

                <div className="w-[30%]">
                  <h2 className="text-[#9B9697] text-[0.9rem]">Documents</h2>
                  <div className="flex justify-start items-center gap-5 pt-2 pb-4">
                    <div className="w-[35%]">
                      <img src={idCardImg} alt="" className="w-full h-full" />
                      <h2 className="text-[#5C5959] font-medium text-[0.9rem]">
                        ID card
                      </h2>
                    </div>
                    <div className="w-[35%]">
                      <img src={proofOfImg} alt="" className="w-full h-full" />
                      <h2 className="text-[#5C5959] font-medium text-[0.9rem]">
                        Proof of address
                      </h2>
                    </div>
                  </div>
                  <Link
                    to={"user-detail"}
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

export default UserTable;
