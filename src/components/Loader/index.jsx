import React from "react";
import { BounceLoader } from "react-spinners";

const Loader = () => {
  return (
    <div className="h-full w-full flex justify-center items-center">
      <BounceLoader color="#5271FF" />
    </div>
  );
};

export default Loader;
