import React, { useState } from "react";
import logo from "../../assets/images/logo.svg";
import { Link } from "react-router-dom";

const ResetPassword = () => {
  const [email, setEmail] = useState("");

  const isFormValid = email !== "";

  return (
    <div className="flex justify-center items-center flex-col">
      <div className="">
        <img src={logo} alt="logo" />
      </div>
      <h2 className="text-[2rem] text-[#232323] font-bold text-center pt-2">
        Recover password
      </h2>
      <h2 className="text-[#9B9697] text-[1rem] text-center">
        Enter the code sent to{" "}
        <span className="text-[#232323] font-medium"> emmanuel@gmail.com</span>
      </h2>

      <div className="w-full pt-4 pb-16">
        <h2 className="text-[#5C5959] text-[0.9rem] pb-1">Email</h2>
        <input
          type="email"
          className="border border-[#F0F0F0] shadow-sm w-full py-2 px-4 rounded-full outline-none"
          placeholder="emmanuel@gmail.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <Link
        to={"email/data"}
        className={`py-3 w-full rounded-full text-[#FFFFFF] font-medium text-center ${
          isFormValid ? "bg-[#5271FF]" : "bg-[#C3CEFF] cursor-not-allowed"
        }`}
        disabled={!isFormValid}
      >
        Send code
      </Link>
    </div>
  );
};

export default ResetPassword;
