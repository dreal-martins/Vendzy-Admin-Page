import React, { useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Sidebar, { SidebarItem } from "../components/SideBar";
import Header from "../components/Header";
import { useSidebarContext } from "../contexts/sidebarContext";
import ActiveOverviewIcon from "../components/Icons/ActiveOverview";
import Overview from "../components/Icons/Overview";
import ActiveUser from "../components/Icons/ActiveUser";
import User from "../components/Icons/User";
import Transaction from "../components/Icons/Transaction";
import ActiveTransaction from "../components/Icons/ActiveTransaction";
import Order from "../components/Icons/Order";
import ActiveOrder from "../components/Icons/ActiveOrder";
import Disputes from "../components/Icons/Disputes";
import ActiveDispute from "../components/Icons/ActiveDispute";
import Notification from "../components/Icons/Notification";
import ActiveNotification from "../components/Icons/ActiveNotification";

export default function AuthenticatedLayout() {
  const [active, setActive] = useState(false);
  const [sidebarItems, setSidebarItems] = useState([]);
  const { expanded } = useSidebarContext();

  const location = useLocation();
  const { pathname } = location;

  useEffect(() => {
    const sidebarData = [
      {
        text: "Overview",
        path: "/",
        icon:
          pathname === "/" ? (
            <ActiveOverviewIcon />
          ) : (
            <Overview active={true} fillColor="#5271FF" />
          ),
        active: pathname === "/" ? true : false,
        visible: true,
        pathlist: null,
      },
      {
        text: "User",
        path: "/users",
        icon:
          pathname === "/users" ? (
            <ActiveUser />
          ) : (
            <User active={true} fillColor="#5271FF" />
          ),
        active: pathname === "/users" ? true : false,
        visible: true,
        pathlist: null,
      },
      {
        text: "Transactions",
        path: "/transactions",
        icon:
          pathname === "/transactions" ? (
            <ActiveTransaction />
          ) : (
            <Transaction active={true} fillColor="#5271FF" />
          ),
        active: pathname === "/transactions" ? true : false,
        visible: true,
        pathlist: null,
      },
      {
        text: "Order",
        path: "/order",
        icon:
          pathname === "/order" ? (
            <ActiveOrder />
          ) : (
            <Order active={true} fillColor="#5271FF" />
          ),
        active: pathname === "/order" ? true : false,
        visible: true,
        pathlist: null,
      },
      {
        text: "Disputes",
        path: "/disputes",
        icon:
          pathname === "/disputes" ? (
            <ActiveDispute />
          ) : (
            <Disputes active={true} fillColor="#5271FF" />
          ),
        active: pathname === "/disputes" ? true : false,
        visible: true,
        pathlist: null,
      },
      {
        text: "Notification",
        path: "/notification",
        icon:
          pathname === "/notification" ? (
            <ActiveNotification />
          ) : (
            <Notification active={true} fillColor="#5271FF" />
          ),
        active: pathname === "/notification" ? true : false,
        visible: true,
        pathlist: null,
      },
    ];

    setSidebarItems(sidebarData);
  }, [pathname]);

  const visibleSidebarItems = sidebarItems.filter((item) => item.visible);

  const handleMouseEnter = () => {
    setActive(true);
  };

  const handleMouseLeave = () => {
    setActive(false);
  };

  return (
    <div className={"h-full w-screen py-4 flex"}>
      <Sidebar>
        {visibleSidebarItems.map((items, i) => {
          const { active, icon, text, activeIcon, path, pathlist } = items;
          return (
            <SidebarItem
              key={i}
              active={active}
              icon={icon}
              activeIcon={activeIcon}
              path={path}
              pathlist={pathlist ? pathlist : null}
              text={text}
              handleMouseEnter={handleMouseEnter}
              handleMouseLeave={handleMouseLeave}
            />
          );
        })}
      </Sidebar>
      <div
        className={`h-full flex flex-col items-center relative`}
        style={{ width: expanded ? "90%" : "100%" }}
      >
        <Header />
        <div
          className={`h-[calc(100vh-3.5rem)] bg-[#fff] w-full relative px-3`}
        >
          <div className="py-3 h-full w-[95%] m-auto">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
}
