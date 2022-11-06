import React from "react";

const Tags = ({ tagName }) => {
  return (
    <div className="py-1 px-4 text-center bg-[#F3F3F3] rounded-xl text-[16px] font-poppins font-bold text-[#080808] hover:cursor-pointer">
      {tagName}
    </div>
  );
};

export default Tags;
