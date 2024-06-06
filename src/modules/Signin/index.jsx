import React, { useState } from "react";
import logo from "../../assets/images/logo.svg";
import passwordShowIcon from "../../assets/icons/passwordShowIcon.svg";
import passwordHideIcon from "../../assets/icons/passwordHideIcon.svg";
import { Link } from "react-router-dom";

const SignIn = () => {
  const [showPassword, setShowPassword] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handlePassword = () => {
    setShowPassword(!showPassword);
  };

  const isFormValid = email !== "" && password !== "";

  return (
    <div className="flex justify-center items-center flex-col">
      <div className="">
        <img src={logo} alt="logo" />
      </div>
      <h2 className="text-[2rem] text-[#232323] font-bold text-center pt-2">
        Log in
      </h2>
      <h2 className="text-[#9B9697] text-[1rem] text-center">
        Please provide your email and password.
      </h2>

      <div className="w-full pt-4">
        <h2 className="text-[#5C5959] text-[0.9rem] pb-1">Email</h2>
        <input
          type="email"
          className="border border-[#F0F0F0] shadow-sm w-full py-2 px-4 rounded-full outline-none"
          placeholder="emmanuel@gmail.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="w-full pt-4 relative">
        <h2 className="text-[#5C5959] text-[0.9rem] pb-1">Password</h2>
        <input
          type={showPassword ? "text" : "password"}
          className="border border-[#F0F0F0] shadow-sm w-full py-2 px-4 rounded-full outline-none"
          placeholder="••••••••"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <div
          onClick={handlePassword}
          className="absolute top-[3.2rem] right-6 cursor-pointer"
        >
          {showPassword ? (
            <img src={passwordHideIcon} alt="hide password" />
          ) : (
            <img src={passwordShowIcon} alt="show password" />
          )}
        </div>
      </div>
      <Link
        to={"reset-password"}
        className="text-[#5C5959] text-[1rem] text-right w-full pt-3 pb-16"
      >
        Forgot password?
      </Link>

      <button
        className={`py-3 w-full rounded-full text-[#FFFFFF] font-medium ${
          isFormValid ? "bg-[#5271FF]" : "bg-[#C3CEFF] cursor-not-allowed"
        }`}
        disabled={!isFormValid}
      >
        Log in
      </button>
    </div>
  );
};

export default SignIn;
