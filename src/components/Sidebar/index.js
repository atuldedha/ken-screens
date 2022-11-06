import React, { useState } from "react";
import Box from "./Box";
import SidebarItems from "./SidebarItems";
import data from "./staticData";

const Sidebar = () => {
  const [selected, setSelected] = useState(1);
  return (
    <div className="z-10 fixed top-0 bg-white flex flex-col space-y-4 shadow-md py-8 w-max h-max">
      {data.map((item, index) => (
        <SidebarItems
          key={index}
          index={index + 1}
          icon={item.icon}
          title={item.title}
          selected={selected}
          setSelected={setSelected}
        />
      ))}

      <div className="!mt-28 mx-16">
        <Box />
      </div>
    </div>
  );
};

export default Sidebar;
