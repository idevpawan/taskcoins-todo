import React, { useState } from "react";
import { BiMenuAltRight } from "react-icons/bi";
import Calendar from "react-calendar";

export default function Sidebar() {
  const [value, onChange] = useState(new Date());
  const handleDateChange = (e: any) => {
    onChange(e);
  };
  function getTimeOfDay() {
    const currentHour = new Date().getHours();

    if (currentHour < 12) {
      return "Morning";
    } else if (currentHour < 17) {
      return "Afternoon";
    } else if (currentHour < 20) {
      return "Evening";
    } else {
      return "Night";
    }
  }

  return (
    <div className=" bg-white max-w-xs p-4 h-screen border-r">
      <div className="flex items-center justify-between text-gray-600">
        <p className=" font-semibold text-light text-lg">
          {getTimeOfDay()}, John 👋
        </p>
        <div className=" cursor-pointer">
          <BiMenuAltRight />
        </div>
      </div>
      <div className=" border my-4" /> {/** Divider */}
      <div>
        <Calendar
          className={" "}
          onChange={(e) => handleDateChange(e)}
          value={value}
        />
      </div>
      <div className=" border my-4" /> {/** Divider */}
    </div>
  );
}
