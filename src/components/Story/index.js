import React from "react";
import StoryImage from "../../images/storyImage.svg";
import ProfileIcon from "../../images/profile.svg";

const Story = ({ name }) => {
  return (
    <div className="flex flex-col">
      <div className="w-[90px] h-[90px] rounded-md relative">
        <img
          className="w-full h-full object-contain"
          src={StoryImage}
          alt="person"
        />

        <div className="absolute -bottom-8 rounded-full left-[35%]">
          <div className=" h-[31px] w-[31px]">
            <img src={ProfileIcon} alt="icon" className="rounded-full" />
          </div>
          <span className="text-[10px] text-[#444D6E] flex items-center justify-center font-normal font-poppins">
            {name}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Story;
