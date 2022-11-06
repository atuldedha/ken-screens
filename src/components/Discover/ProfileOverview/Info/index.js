import React from "react";

const Info = ({ investors, posts, mentors }) => {
  return (
    <div className="flex items-center space-x-6">
      <div className="flex flex-col items-center">
        <span className="text-[#11243D] text-[16px] font-bold font-poppins">
          {investors}
        </span>
        <span className="font-normal text-[14px] text-[#707A89] font-poppins">
          Investors
        </span>
      </div>
      <div className="flex flex-col items-center">
        <span className="text-[#11243D] text-[16px] font-bold font-poppins">
          {mentors}
        </span>
        <span className="font-normal text-[14px] text-[#707A89] font-poppins">
          Mentors
        </span>
      </div>
      <div className="flex flex-col items-center">
        <span className="text-[#11243D] text-[16px] font-bold font-poppins">
          {posts}
        </span>
        <span className="font-normal text-[14px] text-[#707A89] font-poppins">
          Posts
        </span>
      </div>
    </div>
  );
};

export default Info;
