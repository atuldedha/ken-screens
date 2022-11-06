import React from "react";

const SidebarItems = ({ icon, title, selected, setSelected, index }) => {
  return (
    <div
      className={`${
        selected === index ? "bg-[#F8F8F8]" : ""
      } flex items-center space-x-4 px-16 py-3 hover:bg-[#F8F8F8] hover:cursor-pointer transition-all ease-in-out duration-150`}
      onClick={() => setSelected(index)}
    >
      <img className="w-[23px] object-contain" src={icon} alt="icon" />
      <span
        className={`${
          selected === index ? "text-[#4346E1]" : "text-[#222222]"
        } text-[16px] font-normal pl-10 whitespace-nowrap`}
      >
        {title}
      </span>
    </div>
  );
};

export default SidebarItems;
