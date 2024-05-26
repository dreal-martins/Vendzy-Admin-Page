import React from "react";
import { ConfigProvider, Table } from "antd";
import orderImg1 from "../../../assets/images/orderImg1.svg";
import orderImg2 from "../../../assets/images/orderImg2.svg";

const columns = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
    render: (text, record) => {
      return (
        <div
          style={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <img
            src={record.img}
            alt=""
            style={{ width: "40px", marginRight: "10px" }}
          />
          <div>
            <h4 className="text-[#232323] text-[0.9rem] font-medium">
              {record.name}
            </h4>
            <p className="text-[#9B9697] text-[0.9rem]">{record.storeName}</p>
          </div>
        </div>
      );
    },
  },
  {
    title: "Order ID",
    dataIndex: "orderId",
    key: "orderId",
    render: (text) => {
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
    title: "Funding status",
    key: "type",
    dataIndex: "type",
    render: (text) => {
      const statusStyles = {
        Paid: "border border-[#83F3B2] text-[#449E6A] bg-[#EFFFF6]",
        Cancelled: "border border-[#FFBBBB] bg-[#FFE8E8] text-[#EF5959]",
        Pending: "border border-[#F0F0F0] bg-[#F4F4F4] text-[#232323]",
      };
      return (
        <h2
          className={`text-center w-[70%] rounded-full py-1 px-2 text-[0.9rem] ${
            statusStyles[text] || statusStyles["Pending"]
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
    img: orderImg1,
    storeName: "Mooi Gadgets",
    name: "iPhone 15 Pro Max 526 GB",
    orderId: "VD5477956P",
    amount: "₦200,000.00",
    date: "Aug 12, 2023 • 10:47 PM",
    type: "Paid",
  },
  {
    key: "2",
    img: orderImg2,
    storeName: "Tech World",
    name: "Samsung Galaxy S22 Ultra",
    orderId: "GW9876543Q",
    amount: "₦350,000.00",
    date: "Sep 10, 2023 • 09:30 AM",
    type: "Pending",
  },
  {
    key: "3",
    img: orderImg1,
    storeName: "Gadget Plus",
    name: "Google Pixel 7",
    orderId: "AB1234567Z",
    amount: "₦180,000.00",
    date: "Oct 5, 2023 • 01:15 PM",
    type: "Cancelled",
  },
  {
    key: "4",
    img: orderImg2,
    storeName: "Mooi Gadgets",
    name: "MacBook Pro 16-inch",
    orderId: "MN6543210L",
    amount: "₦800,000.00",
    date: "Nov 21, 2023 • 05:45 PM",
    type: "Paid",
  },
  {
    key: "5",
    img: orderImg1,
    storeName: "Tech World",
    name: "Sony WH-1000XM4",
    orderId: "HK1122334D",
    amount: "₦150,000.00",
    date: "Dec 2, 2023 • 11:22 AM",
    type: "Pending",
  },
];

const OrderTable = () => (
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

export default OrderTable;
