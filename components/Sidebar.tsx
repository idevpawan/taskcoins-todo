import React, { useEffect, useState } from "react";
import { BiMenuAltRight } from "react-icons/bi";
import Calendar from "react-calendar";
import { useDispatch } from "react-redux";

export default function Sidebar() {
  const dispatch = useDispatch();
  const [selectedDate, onDateChange] = useState(new Date());

  useEffect(() => {
    dispatch({ type: "SET_SELECTED_DATE", payload: selectedDate });
  }, [dispatch, selectedDate]);

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
      </div>
      <div className=" border my-4" /> {/** Divider */}
      <div>
        <Calendar
          className={" "}
          onChange={(e: any) => onDateChange(e)}
          value={selectedDate}
        />
      </div>
      <div className=" border my-4" /> {/** Divider */}
    </div>
  );
}
