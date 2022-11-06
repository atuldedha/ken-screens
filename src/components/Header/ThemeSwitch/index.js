import React from "react";
import Dark from "../../../images/dark.svg";
import Light from "../../../images/light.svg";

const ThemeSwitch = ({ selected, setSelected }) => {
  return (
    <div className="bg-[#F0F3F7] p-1 px-2 flex items-center space-x-2 border-[2px] border-[#EBEFF5] rounded-[24px]">
      <div
        className={`${
          selected === 1
            ? "bg-[#FCFEFF] border-[2px] border-[#FFFFFF] rounded-[24px]"
            : ""
        } flex items-center space-x-6  py-2 px-6`}
        onClick={() => setSelected(1)}
      >
        <img
          className="w-[21px] h-[21px] object-contain"
          src={Dark}
          alt="dark"
        />
        <span className="text-[#7D96B3] text-[10px] font-poppins font-bold">
          Dark
        </span>
      </div>
      <div
        className={`${
          selected === 2
            ? "bg-[#FCFEFF] border-[2px] border-[#FFFFFF] rounded-[24px]"
            : ""
        } flex items-center space-x-6 py-2 px-6`}
        onClick={() => setSelected(2)}
      >
        <img
          className="w-[21px] h-[21px] object-contain"
          src={Light}
          alt="light"
        />
        <span className="text-[#7D96B3] text-[10px] font-poppins font-bold">
          Light
        </span>
      </div>
    </div>
  );
};

export default ThemeSwitch;
