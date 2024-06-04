import React from "react";
import { ConfigProvider, Table } from "antd";
import orderImg1 from "../../../assets/images/orderImg1.svg";
import orderImg2 from "../../../assets/images/orderImg2.svg";
import { useNavigate } from "react-router-dom";

const columns = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
    width: 380,
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
            <p className="text-[#9B9697] text-[0.9rem]">{record.refName}</p>
          </div>
        </div>
      );
    },
  },
  {
    title: "Dispute ID",
    dataIndex: "disputeId",
    key: "disputeId",
    render: (text) => {
      return <h2 className="text-[#232323] font-medium">{text}</h2>;
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
    title: "Status",
    key: "status",
    dataIndex: "status",
    render: (text) => {
      const statusStyles = {
        Resolved: "border border-[#83F3B2] text-[#449E6A] bg-[#EFFFF6]",
        Cancelled: "border border-[#FFBBBB] bg-[#FFE8E8] text-[#EF5959]",
        Unresolved: "border border-[#F0F0F0] bg-[#F4F4F4] text-[#232323]",
      };
      return (
        <h2
          className={`text-center w-[60%] rounded-full py-1 px-2 text-[0.9rem]  ${
            statusStyles[text] || statusStyles["Unresolved"]
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
    refName: "Inem Atiku",
    disputeId: "12345",
    name: "iPhone 15 Pro Max 526 GB",
    amount: "₦200,000.00",
    orderId: "VD5477956P",
    status: "Resolved",
  },
  {
    key: "2",
    img: orderImg2,
    refName: "Ebiye Sango",
    disputeId: "55689",
    name: "Generic 2pcs Easy 360° Magic Rotating...",
    amount: "₦86,000.00",
    orderId: "VD54779111S",
    status: "Unresolved",
  },
  {
    key: "3",
    img: orderImg2,
    refName: "Mofe James",
    disputeId: "76300",
    name: "Mainstays 12-Inch 3-Speed Oscillati...",
    amount: "₦18,000.00",
    orderId: "VD5477970A",
    status: "Cancelled",
  },
  {
    key: "4",
    img: orderImg1,
    refName: "Hajiya Efosa",
    disputeId: "44994",
    name: "2000 Watt Hair Dryers, Xpoliman Profession...",
    amount: "₦7,000.00",
    orderId: "VD5477900C",
    status: "Resolved",
  },
];

const DisputeTable = () => {
  const navigate = useNavigate();

  const handleRowClick = (record) => {
    navigate(`/disputes/disputes-detail`);
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

export default DisputeTable;
