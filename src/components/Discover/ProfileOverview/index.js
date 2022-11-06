import React, { useState } from "react";
import ProfileImage from "../../../images/smallProfileImage.svg";
import Info from "./Info";
import data from "./staticData";
const ProfileOverview = () => {
  const [buttonSelected, setButtonSelected] = useState(1);

  return (
    <div className="flex flex-col bg-white justify-center items-center p-4 rounded-lg">
      <div className="rounded-lg mb-5">
        <img
          src={ProfileImage}
          alt="profile"
          className=" w-[88px] h-[88px] object-contain rounded-lg"
        />
      </div>

      <span className="uppercase text-[18px] font-bold text-[#11243D] mb-3">
        A R
      </span>

      <div className="mb-3">
        <Info investors={300} posts={300} mentors={400} />
      </div>

      <div className="flex items-center space-x-3 mb-5">
        <button
          className={`${
            buttonSelected === 1
              ? "bg-[#4F46BA] text-white"
              : "bg-[#E6E6EB] text-[#11243D]"
          } text-[14px] w-1/2 font-normal pt-3 pb-2 px-10 flex items-center justify-center rounded-xl whitespace-nowrap`}
          onClick={() => setButtonSelected(1)}
        >
          View Profile
        </button>
        <button
          className={`${
            buttonSelected === 2
              ? "bg-[#4F46BA] text-white"
              : "bg-[#E6E6EB] text-[#11243D]"
          } text-[14px] w-1/2 font-normal pt-3 pb-2 px-10 flex items-center justify-center text-center rounded-xl`}
          onClick={() => setButtonSelected(2)}
        >
          Edit
        </button>
      </div>

      <div className="grid grid-cols-3 gap-1 mb-6">
        {data.map((image, index) => (
          <div className="rounded-md">
            <img
              key={index}
              src={image.src}
              alt="posts"
              className="h-20 object-contain rounded-md"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProfileOverview;
