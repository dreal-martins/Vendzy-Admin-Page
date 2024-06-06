import React, { useState } from "react";
import logo from "../../../assets/images/logo.svg";
import { Link } from "react-router-dom";

const ReqOtp = () => {
  const [otp, setOtp] = useState(new Array(4).fill(""));
  const [showDigit, setShowDigit] = useState(new Array(4).fill(true));

  const isFormValid = otp.join("") !== "";

  const handleChange = (e, index) => {
    const { value } = e.target;

    if (isNaN(value)) return;

    const newOtp = [...otp];
    const newShowDigit = [...showDigit];

    if (value) {
      newOtp[index] = value.slice(-1); // Ensure only one digit is kept
      newShowDigit[index] = true;
      console.log(newShowDigit[index]);
      setOtp(newOtp);
      setShowDigit(newShowDigit);

      setTimeout(() => {
        newShowDigit[index] = false;
        setShowDigit([...newShowDigit]);
      }, 500);

      if (e.target.nextSibling) {
        e.target.nextSibling.focus();
      }
    } else {
      newOtp[index] = "";
      newShowDigit[index] = true;
      setOtp(newOtp);
      setShowDigit(newShowDigit);

      if (e.target.previousSibling) {
        e.target.previousSibling.focus();
      }
    }
  };

  return (
    <div className="flex justify-center items-center flex-col">
      <div>
        <img src={logo} alt="logo" />
      </div>
      <h2 className="text-[2rem] text-[#232323] font-bold text-center pt-2">
        Recover password
      </h2>
      <h2 className="text-[#9B9697] text-[1rem] text-center">
        Enter the code sent to{" "}
        <span className="text-[#232323] font-medium"> emmanuel@gmail.com</span>
      </h2>

      <div className="flex justify-start items-center gap-5 pt-7 pb-14">
        {otp.map((data, i) => (
          <input
            key={i}
            className={`border ${
              data ? "border-[#5271FF]" : "border-[#F0F0F0]"
            } shadow rounded-xl w-[95px] h-[74px] text-center outline-none`}
            type="text"
            value={showDigit[i] ? data || "" : "•"}
            maxLength={1}
            onChange={(e) => handleChange(e, i)}
            placeholder="-"
          />
        ))}
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

export default ReqOtp;
