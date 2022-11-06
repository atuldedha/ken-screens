import React, { useState } from "react";
import NotificationIcon from "../../images/notification.svg";
import SearchIcon from "../../images/search.svg";
import ProfileIcon from "../../images/profile.svg";
import ThemeSwitch from "./ThemeSwitch";

const Header = () => {
  const [background, setBackground] = useState(1);
  return (
    <div className="bg-white w-full flex items-center justify-between p-2 shadow-md">
      <button className="ml-10 py-2 px-8 rounded-md text-center bg-[#FFBB00] text-[12px] text-black font-normal font-poppins">
        Upgrade Account
      </button>

      <div className="flex items-center space-x-6">
        <ThemeSwitch selected={background} setSelected={setBackground} />
        <img
          className="w-[16px] h-[22px] object-contain hover:cursor-pointer"
          src={SearchIcon}
          alt="search"
        />
        <img
          className="w-[16px] h-[22px] object-contain hover:cursor-pointer"
          src={NotificationIcon}
          alt="search"
        />
        <img
          className="w-[26px] h-[26px] object-cover hover:cursor-pointer"
          src={ProfileIcon}
          alt="search"
        />
      </div>
    </div>
  );
};

export default Header;
