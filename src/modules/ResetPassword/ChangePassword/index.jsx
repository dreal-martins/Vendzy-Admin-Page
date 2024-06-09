import React, { useState } from "react";
import logo from "../../../assets/images/logo.svg";
import passwordShowIcon from "../../../assets/icons/passwordShowIcon.svg";
import passwordHideIcon from "../../../assets/icons/passwordHideIcon.svg";
import { useNavigate } from "react-router-dom";

const ChangePassword = () => {
  const [showPassword, setShowPassword] = useState(true);
  const [showConfirmPassword, setShowConfirmPassword] = useState(true);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  const handlePassword = () => {
    setShowPassword(!showPassword);
  };
  const handleConfirmPassword = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };
  const handleNavigate = () => {
    navigate("/auth");
  };

  const isFormValid = password !== "" && confirmPassword !== "";

  return (
    <div className="flex justify-center items-center flex-col">
      <div className="">
        <img src={logo} alt="logo" />
      </div>
      <h2 className="text-[2rem] text-[#232323] font-bold text-center pt-2">
        Create new password
      </h2>
      <h2 className="text-[#9B9697] text-[1rem] text-center">
        Please create a password that is 8 characters long and includes at least
        one special character and one uppercase letter.
      </h2>

      <div className="w-full pt-4 relative">
        <h2 className="text-[#5C5959] text-[0.9rem] pb-1">New password</h2>
        <input
          type={showPassword ? "password" : "text"}
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
            <img src={passwordShowIcon} alt="show password" />
          ) : (
            <img src={passwordHideIcon} alt="hide password" />
          )}
        </div>
      </div>

      <div className="w-full pt-4 relative pb-16">
        <h2 className="text-[#5C5959] text-[0.9rem] pb-1">
          Confirm new password
        </h2>
        <input
          type={showConfirmPassword ? "password" : "text"}
          className="border border-[#F0F0F0] shadow-sm w-full py-2 px-4 rounded-full outline-none"
          placeholder="••••••••"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <div
          onClick={handleConfirmPassword}
          className="absolute top-[3.2rem] right-6 cursor-pointer"
        >
          {showConfirmPassword ? (
            <img src={passwordShowIcon} alt="show password" />
          ) : (
            <img src={passwordHideIcon} alt="hide password" />
          )}
        </div>
      </div>

      <button
        onClick={handleNavigate}
        className={`py-3 w-full rounded-full text-[#FFFFFF] font-medium ${
          isFormValid ? "bg-[#5271FF]" : "bg-[#C3CEFF] cursor-not-allowed"
        }`}
        disabled={!isFormValid}
      >
        Recover password
      </button>
    </div>
  );
};

export default ChangePassword;
