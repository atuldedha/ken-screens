import React from "react";
import AboutProfile from "./AboutProfile";
import ProfileOverview from "./ProfileOverview";

const Discover = () => {
  return (
    <div className="flex flex-col space-y-8">
      <span className="text-[32px] text-[#2A2F33] font-bold font-poppins ml-5">
        Discover
      </span>

      <div className="flex space-x-3 pl-8 pr-5">
        <div className="basis-3/4">
          <AboutProfile />
        </div>
        <div className="basis-3/12">
          <ProfileOverview />
        </div>
      </div>
    </div>
  );
};

export default Discover;
