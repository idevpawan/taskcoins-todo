import React, { useState } from "react";
import { BiMenuAltRight } from "react-icons/bi";
import Calendar from "react-calendar";

export default function Sidebar() {
  const [value, onChange] = useState(new Date());
  const handleDateChange = () => {
    console.log("value");
  };
  return (
    <div className=" bg-white max-w-xs rounded-lg p-4 h-screen">
      <div className="flex items-center justify-between text-gray-600">
        <p className=" font-semibold text-light">Hello, John 👋</p>
        <div className=" cursor-pointer">
          <BiMenuAltRight />
        </div>
      </div>
      <div className=" border my-4" /> {/** Divider */}
      <div>
        <Calendar className={" "} onChange={handleDateChange} value={value} />
      </div>
      <div className=" border my-4" /> {/** Divider */}
    </div>
  );
}
