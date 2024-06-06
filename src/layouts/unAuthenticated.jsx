import React from "react";
import { Outlet } from "react-router-dom";
import logo from "../assets/images/logo.svg";
import authImg from "../assets/images/authImage.svg";

export default function UnAuthenticatedLayout() {
  return (
    <div className="overflow-hidden h-[100vh]">
      <div className="p-5 pb-[3rem]">
        <img src={logo} alt="logo" />
      </div>
      <div className="flex justify-between items-start px-[8rem]">
        <div className="w-[50%] h-full">
          <img
            src={authImg}
            alt=""
            className="w-[90%] h-full object-cover object-top"
          />
        </div>

        <div className="w-[45%]">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
