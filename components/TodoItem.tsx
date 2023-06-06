import Input from "@/ui_components/Input";
import React from "react";

export default function TodoItem() {
  return (
    <div className="w-full bg-white border rounded-xl p-4 relative ">
      <div className="flex gap-5">
        <Input type="checkbox" />
        <p className="text-gray-600">Complete the 6 lessons for java dsa</p>
      </div>
      <div className="flex items-center justify-between text-xs mt-2">
        <p className="text-light cursor-pointer">Edit</p>
        <p className="text-xs text-gray-500">Reminder on 5:00 PM</p>
      </div>
    </div>
  );
}
