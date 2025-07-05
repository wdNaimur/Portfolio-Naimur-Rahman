import React from "react";
import { motion } from "framer-motion";
import { ThreeDots } from "react-loader-spinner";

const Loading = () => {
  return (
    <div className="flex flex-col justify-center items-center w-screen h-screen bg-base-100">
      <div className="-mt-40">
        <img src="/naimur-logo.png" alt="Logo" className="w-[60px] -mb-2" />
        <ThreeDots
          visible={true}
          height="60"
          width="60"
          color="#33acc0"
          radius="9"
          ariaLabel="three-dots-loading"
          wrapperStyle={{}}
          wrapperClass=""
        />
      </div>
    </div>
  );
};

export default Loading;
