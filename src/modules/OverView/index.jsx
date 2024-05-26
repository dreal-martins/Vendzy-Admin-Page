import React, { useEffect } from "react";
import { useAppContext } from "../../contexts";
import { FaArrowUpLong, FaArrowDownLong } from "react-icons/fa6";
import disputesBreakDown from "../../assets/images/disputesBreakDown.svg";
import orderImg1 from "../../assets/images/orderImg1.svg";
import OverviewTable from "../../components/Tables/OverViewTable";

const OverView = () => {
  const { setHeaderTitle } = useAppContext();

  const orders = [
    {
      name: "  Mainstays 12-Inch 3...",
      img: orderImg1,
      amount: "₦200,000.00",
      store: "Mooi Gadgets",
      status: "Pending",
    },
    {
      name: "  Mainstays 12-Inch 3...",
      img: orderImg1,
      amount: "₦200,000.00",
      store: "Mooi Gadgets",
      status: "Pending",
    },
    {
      name: "  Mainstays 12-Inch 3...",
      img: orderImg1,
      amount: "₦200,000.00",
      store: "Mooi Gadgets",
      status: "Pending",
    },
    {
      name: "  Mainstays 12-Inch 3...",
      img: orderImg1,
      amount: "₦200,000.00",
      store: "Mooi Gadgets",
      status: "Pending",
    },
    {
      name: "  Mainstays 12-Inch 3...",
      img: orderImg1,
      amount: "₦200,000.00",
      store: "Mooi Gadgets",
      status: "Pending",
    },
    {
      name: "  Mainstays 12-Inch 3...",
      img: orderImg1,
      amount: "₦200,000.00",
      store: "Mooi Gadgets",
      status: "Pending",
    },
  ];

  useEffect(() => {
    setHeaderTitle("OverView");
  }, [setHeaderTitle]);
  return (
    <div className="flex justify-between items-start py-3 bg-[#fff] overflow-auto h-[85vh]  2xl:h-[90vh]">
      <div className="w-[68%]">
        <div className="w-full flex justify-between items-start ">
          <div className="w-[50%]">
            <div className="bg-[#F3F5FD] rounded-3xl p-4">
              <h1 className="text-[#5C5959] text-[0.9rem]">Vendyz earnings</h1>
              <h2 className="text-[2rem] font-bold flex items-start justify-start pt-4">
                <span className="text-[1.2rem] font-bold text-[#5271FF] ">
                  ₦
                </span>
                84,310.12
              </h2>
              <div className="flex justify-start items-center gap-2 pt-2">
                <h2 className="flex justify-start items-center text-[#449E6A] gap-1 text-[0.9rem]">
                  <FaArrowUpLong className="text-[#449E6A] text-[0.9rem]" />{" "}
                  +2.11%
                </h2>
                <h2 className="text-[#9B9697] text-[0.8rem]">
                  vs last 30 days
                </h2>
              </div>
            </div>
            <div className="pt-5">
              <Cards
                name={"Escrow balance"}
                number={"₦210,639.44"}
                icon={<FaArrowDownLong className="text-[#E51837]" />}
                percentage={"-1.10%"}
                days={"vs last 30 days"}
                color={"text-[#E51837]"}
              />
            </div>
            <div className="pt-5">
              <Cards
                name={"Users"}
                number={"3,008"}
                icon={<FaArrowUpLong className="text-[#449E6A]" />}
                percentage={"+3.25%"}
                days={"vs last 30 days"}
                color={"text-[#449E6A]"}
              />
            </div>
          </div>
          <div className="w-[45%]">
            <img src={disputesBreakDown} alt="img" />
          </div>
        </div>
        <div className="pt-7 w-full">
          <div className="border border-[#F0F0F0] rounded-2xl">
            <div className="flex justify-between items-center px-3 py-6">
              <h2>Orders</h2>
              <button className="rounded-full text-[0.9rem] text-[#5C5959] border-[1.5px] border-[#F0F0F0] py-1 px-3 shadow-2xl">
                View more
              </button>
            </div>

            <OverviewTable />
          </div>
        </div>
      </div>

      <div className="w-[30%]">
        <div className="bg-[#FAFAFA] p-5 rounded-2xl">
          <div className="flex justify-between items-center">
            <h2 className="text-[0.9rem] text-[#5C5959]">Disputes</h2>
            <button className="rounded-full text-[0.9rem] text-[#5C5959] border-[1.5px] border-[#F0F0F0] py-1 px-3 shadow-2xl">
              View more
            </button>
          </div>
          <h2 className="text-[#9B9697] border-b border-[#F0F0F0] pb-5 pt-4">
            <span className="text-[2rem] font-bold text-[#232323]">47</span>
            /1,305 orders
          </h2>
          <h2 className="text-[#5C5959] text-[0.9rem] text-right pt-4">
            Resolved
          </h2>
          <h2 className="text-[1rem] text-[#9B9697] text-right pt-2">
            <span className="text-[2rem] font-bold text-[#232323]">7</span> /47
            disputes
          </h2>
        </div>
        <div className="pt-7 w-full">
          <div className="border border-[#F0F0F0] rounded-2xl">
            <div className="flex justify-between items-center px-3 py-6">
              <h2>Orders</h2>
              <button className="rounded-full text-[0.9rem] text-[#5C5959] border-[1.5px] border-[#F0F0F0] py-1 px-3 shadow-2xl">
                View more
              </button>
            </div>
            <div className="flex justify-center items-center flex-col">
              {orders.map((order, i) => {
                return (
                  <>
                    <div className="flex justify-between items-start w-full py-4 border-t border-b rounded-xl px-3">
                      <div className="w-[20%]">
                        <img src={order.img} alt="" />
                      </div>
                      <div className="w-[50%]">
                        <h2 className="text-[#232323] text-[0.9rem] font-medium">
                          {order.name}
                        </h2>
                        <h2 className="text-[#5C5959] font-medium text-[0.9rem]">
                          {order.amount}
                        </h2>
                        <h2 className="text-[#9B9697] text-[0.9rem]">
                          {order.store}
                        </h2>
                      </div>
                      <h2 className="border-[1.5px] text-[0.9rem] border-[#F0F0F0] px-3 py-1 bg-[#F4F4F4] rounded-full">
                        {order.status}
                      </h2>
                    </div>
                  </>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OverView;

export const Cards = ({ name, number, icon, percentage, days, color }) => {
  return (
    <div className="px-4 py-4 border border-[#F0F0F0] rounded-3xl">
      <h2 className="text-[0.9rem] text-[#5C5959]">{name}</h2>
      <div className="flex justify-between items-center pt-2">
        <h2 className="text-[1rem] font-bold">{number}</h2>
        <h2
          className={`flex justify-center items-center  ${color} text-[0.9rem] font-medium`}
        >
          {icon} {percentage}
        </h2>
      </div>
      <h2 className="text-right text-[#9B9697] text-[0.9rem]">{days}</h2>
    </div>
  );
};
