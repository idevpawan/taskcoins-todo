import Button from "@/ui_components/Button";
import Input from "@/ui_components/Input";
import React from "react";
import { IoMdAddCircle } from "react-icons/io";
import TodoItem from "./TodoItem";

export default function Todo() {
  return (
    <div>
      <div className="border p-4 rounded-2xl bg-white block">
        <Input
          placeholder="Write something here..."
          type="text"
          inputClassName="border w-full rounded-lg p-3 text-gray-700 bg-gray-50 bg-white text-gray-500 mt-3"
        />
        <div className="flex items-center mt-4 gap-5">
          <Input
            label="Reminder"
            type="time"
            inputClassName="bg-white text-gray-700 w-[110px]"
            labelClassName="text-slate-500 tracking-wider"
          />
          <div>
            <Button
              title="Create New"
              className="py-2 px-8 bg-light text-white rounded-2xl"
            />
          </div>
        </div>
      </div>
      <div className="border-b my-4" />
      {/* <div className="text-center mt-40">
        <div className="flex mb-2 justify-center text-6xl text-gray-300">
          <IoMdAddCircle />
        </div>
        <p className="text-sm text-gray-400">
          No todo at the moment. Please create new
        </p>
      </div> */}

      <TodoItem />
    </div>
  );
}
