import React from "react";
import ProfilePic from "../../../images/aboutProfile.svg";
import Check from "../../../images/checkmark.svg";
import Tags from "./Tags";
import CrossIcon from "../../../images/cross.svg";
import HandshakeIcon from "../../../images/handshake.svg";
import ForwardIcon from "../../../images/forward.svg";

const AboutProfile = () => {
  return (
    <div className="flex bg-white p-2 rounded-xl flex-1 mb-20 h-full">
      <div className="flex relative flex-col basis-1/2 rounded-lg">
        <div className="relative rounded-lg p-4">
          <img
            className="object-cover rounded-lg"
            src={ProfilePic}
            alt="profile"
          />
          <div className="absolute bottom-10 left-[24%] flex items-center space-x-6">
            <div className="bg-white w-[60px] h-[60px] rounded-full flex items-center justify-center hover:cursor-pointer">
              <img
                className="h-3 w-3 object-contain"
                src={CrossIcon}
                alt="cross"
              />
            </div>
            <div className="bg-white w-[60px] h-[60px] rounded-full flex items-center justify-center hover:cursor-pointer">
              <img
                className="h-5 w-8 object-contain"
                src={HandshakeIcon}
                alt="cross"
              />
            </div>
            <div className="bg-white w-[60px] h-[60px] rounded-full flex items-center justify-center hover:cursor-pointer">
              <img
                className="h-4 w-5 object-contain"
                src={ForwardIcon}
                alt="cross"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col basis-1/2 items-center w-full mt-8 mb-7">
        <span className="font-poppins font-bold text-[#2A2F33] text-[29px]">
          About
        </span>
        <div className="flex items-center space-x-3 mb-7">
          <span className="text-[25px] font-bold font-poppins text-[#666666]">
            Marshall Eriksen
          </span>
          <img
            className="object-contain w-[21px] h-[21px]"
            src={Check}
            alt="check"
          />
        </div>

        <div className="flex items-center space-x-6 mb-7">
          <Tags tagName="Trader" />
          <Tags tagName="Forex" />
          <Tags tagName="Indices" />
        </div>

        <span className="text-[#949494] text-start font-poppins font-normal">
          I am corporate Trader at Goliath National Bank. I grown up in
          Minnesota I love and care and confident and extremely emotional, which
          I often gets teased for by the gang. I am very passionate{" "}
        </span>
      </div>
    </div>
  );
};

export default AboutProfile;
