import React, { useState } from "react";
import data from "./staticData";
import UsersCard from "./UsersCard";

const RandomUsers = () => {
  const [showAll, setShowAll] = useState(false);

  return (
    <div className="flex flex-col ml-8">
      <span className="text-[#2A2F33] text-[32px] font-bold font-poppins mb-7">
        Random Users
      </span>

      <div className="grid grid-cols-5 gap-6">
        {data.map(
          (profile, index) =>
            index <= 9 && (
              <UsersCard
                key={index}
                image={profile.image}
                name={profile.name}
                work={profile.work}
              />
            )
        )}
        {data.length > 10 &&
          showAll &&
          data.map(
            (profile, index) =>
              index > 9 && (
                <UsersCard
                  key={index}
                  image={profile.image}
                  name={profile.name}
                  work={profile.work}
                />
              )
          )}
      </div>
      <div className="mb-14">
        {data.length > 10 && !showAll && (
          <div
            onClick={() => setShowAll(true)}
            className="flex items-center justify-center w-full mt-16"
          >
            <span className="text-[26px] font-poppins font-normal text-[#2A2F33]">
              See more
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

export default RandomUsers;
