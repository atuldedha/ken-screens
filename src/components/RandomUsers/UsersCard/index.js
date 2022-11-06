import React from "react";
import CrossIcon from "../../../images/cross.svg";
import HandshakeIcon from "../../../images/handshake.svg";
import ForwardIcon from "../../../images/forward.svg";
import Checkmark from "../../../images/checkmark.svg";

const UsersCard = ({ image, name, work }) => {
  return (
    <div className="flex flex-col bg-white items-center justify-center rounded-xl p-1">
      <div className="relative rounded-lg mb-10">
        <img
          src={image}
          alt="profile"
          className="w-[245px] h-[207px] rounded-[23px]"
        />
        <div className="absolute -bottom-4 left-[28%] flex items-center space-x-2">
          <div className="bg-white w-[32px] h-[32px] rounded-full flex items-center justify-center hover:cursor-pointer">
            <img
              className="h-2 w-2 object-contain"
              src={CrossIcon}
              alt="cross"
            />
          </div>
          <div className="bg-white w-[32px] h-[32px] rounded-full flex items-center justify-center hover:cursor-pointer">
            <img
              className="h-3 w-5 object-contain"
              src={HandshakeIcon}
              alt="cross"
            />
          </div>
          <div className="bg-white w-[32px] h-[32px] rounded-full flex items-center justify-center hover:cursor-pointer">
            <img
              className="h-3 w-3 object-contain"
              src={ForwardIcon}
              alt="cross"
            />
          </div>
        </div>
      </div>
      <div className="flex items-center space-x-6 mb-5">
        <span className="text-[18px] font-bold font-poppins text-[#01000E]">
          {name}
        </span>
        <img src={Checkmark} alt="check" />
      </div>

      <span className="text-[#080808] text-[11px] font-bold font-poppins mb-2">
        {work}
      </span>
    </div>
  );
};

export default UsersCard;
