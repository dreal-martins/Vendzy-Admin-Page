import React from "react";
import { ConfigProvider, Table } from "antd";
import { useNavigate } from "react-router-dom";
import avatar from "../../../assets/images/avatar.svg";
import avatarOne from "../../../assets/images/avatar1.svg";
import avatarTwo from "../../../assets/images/avatar2.svg";
import avatarThree from "../../../assets/images/avatar3.svg";

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
          </div>
        </div>
      );
    },
  },
  {
    title: "Reference number",
    dataIndex: "refNumber",
    key: "refNumber",
    render: (text, record) => {
      return <h2 className="text-[#232323] font-medium">{text}</h2>;
    },
  },
  {
    title: "Amount",
    dataIndex: "amount",
    key: "amount",
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
    title: "Type",
    key: "type",
    dataIndex: "type",
    render: (text, record) => {
      return (
        <h2
          className={`${
            text === "Credit"
              ? "border border-[#83F3B2] text-[#449E6A] bg-[#EFFFF6] text-center  rounded-full py-1 px-2 text-[0.9rem]"
              : "border border-[#FFBBBB] bg-[#FFE8E8] text-[#EF5959] text-center rounded-full py-1 px-2 text-[0.9rem]"
          }`}
        >
          {text}
        </h2>
      );
    },
  },
];

const data = [
  {
    key: "1",
    img: avatar,
    refNumber: "REF4715384150",
    name: "Ebiye Sango",
    amount: "₦200,000.00",
    date: "Aug 12, 2023 • 10:47 PM",
    type: "Credit",
  },
  {
    key: "2",
    img: avatarOne,
    refNumber: "REF1185562774",
    name: "Inem Atiku",
    amount: "₦86,000.00",
    date: "Jul 08, 2023 • 9:00 AM",
    type: "Debit",
  },
  {
    key: "3",
    img: avatarTwo,
    refNumber: "REF4715384661",
    name: "Mofe James",
    amount: "₦18,000.00",
    date: "May 30, 2023 • 1:50 PM",
    type: "Credit",
  },
  {
    key: "4",
    img: avatarThree,
    refNumber: "REF1185562493",
    name: "Tochi Alhaji",
    amount: "₦7,000.00",
    date: "Feb 02, 2023 • 10:24 AM",
    type: "Debit",
  },
];

const TransactionTable = () => {
  const navigate = useNavigate();

  const handleRowClick = (record) => {
    navigate(`/transactions/transaction-detail`);
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
        onRow={(record) => ({
          onClick: () => handleRowClick(record),
        })}
      />
    </ConfigProvider>
  );
};

export default TransactionTable;
