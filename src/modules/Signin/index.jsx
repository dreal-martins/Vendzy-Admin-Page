import React, { useState } from "react";
import logo from "../../assets/images/logo.svg";
import passwordShowIcon from "../../assets/icons/passwordShowIcon.svg";
import passwordHideIcon from "../../assets/icons/passwordHideIcon.svg";
import { useNavigate } from "react-router-dom";
import { loginService, saveTokenToLocalStore } from "../../services";
import { SyncLoader } from "react-spinners";
import { toast } from "react-toastify";

const SignIn = () => {
  const [showPassword, setShowPassword] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const isFormValid = email !== "" && password !== "";

  const handlePassword = () => {
    setShowPassword(!showPassword);
  };
  const handleNavigate = () => {
    navigate("/auth/reset-password");
  };

  const handleLogin = async () => {
    const data = { email, password };
    setLoading(true);
    try {
      const response = await loginService(data);
      if (response.success) {
        const { access_token, refresh_token, expiresIn } = response.data;
        saveTokenToLocalStore(access_token, refresh_token, expiresIn);
        toast.success(response.data.message);
        // navigate("/auth/reset-password");
        navigate("/");
      } else {
        toast.error("An error occurred. Please try again later.");
      }
      setLoading(false);
    } catch (error) {
      console.log(error);
      if (error.message === "Network Error") {
        toast.error("Network error. Please check your internet connection.");
      } else if (error.response) {
        toast.error(error.response.data.message);
      } else {
        toast.error("An error occurred. Please try again later.");
      }
      setLoading(false);
    }
  };

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
            <img src={passwordHideIcon} alt="hide password" />
          ) : (
            <img src={passwordShowIcon} alt="show password" />
          )}
        </div>
      </div>
      <div className=" w-full pt-3 pb-16 text-right">
        <button
          onClick={handleNavigate}
          className="text-[#5C5959] text-[1rem] "
        >
          Forgot password?
        </button>
      </div>

      <button
        onClick={handleLogin}
        className={`py-3 w-full rounded-full text-[#FFFFFF] font-medium ${
          isFormValid ? "bg-[#5271FF]" : "bg-[#C3CEFF] cursor-not-allowed"
        } ${loading ? "cursor-progress" : "cursor-default"}`}
        disabled={!isFormValid}
      >
        {loading ? (
          <SyncLoader color={"#FFFFFF"} loading={loading} size={15} />
        ) : (
          "Log in"
        )}
      </button>
    </div>
  );
};

export default SignIn;
