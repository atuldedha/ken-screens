import React from "react";

const Box = () => {
  return (
    <div className="relative flex flex-col bg-[#F0F0F0] px-4 items-center justify-center rounded-lg">
      <div className="absolute -top-[54px] border border-[#635bc0] rounded-full bg-[#F0F0F0] w-[94px] h-[94px]"></div>
      <span className="text-[#222222] text-[17px] font-medium font-poppins mt-16 mb-3">
        Try Premium
      </span>
      <button className="text-[#212121] text-[15px] font-normal font-poppins text-center px-5 pt-2 pb-1 whitespace-nowrap rounded-lg bg-[#FFBB00] mb-2">
        Upgrade Now
      </button>
    </div>
  );
};

export default Box;
