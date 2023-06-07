import Input from "@/ui_components/Input";
import { getTimeAMPM } from "@/utils";
import React, { useState } from "react";
import { useDispatch } from "react-redux";

type TTodoItem = {
  title: string;
  reminder: string;
  id: string;
};

export default function TodoItem(props: TTodoItem) {
  const dispatch = useDispatch();
  const [isLineThrough, setIsLineThrough] = useState(false);
  function deleteTodoWithDelay(id: string) {
    setIsLineThrough(true);
    setTimeout(() => {
      const todos = JSON.parse(localStorage.getItem("todos") as string) || [];
      const updatedTodos = todos.filter((todo: any) => todo.id !== id);
      localStorage.setItem("todos", JSON.stringify(updatedTodos));

      dispatch({ type: "DELETE_TODO", payload: id });
      setIsLineThrough(false);
    }, 2000);
  }

  return (
    <div className="w-full bg-white border rounded-xl p-4 relative mb-3">
      <div className="flex gap-5">
        <Input type="checkbox" onChange={() => deleteTodoWithDelay(props.id)} />
        <p className={`text-gray-600 ${isLineThrough && "line-through"}`}>
          {props.title}
        </p>
      </div>
      <div className="flex items-center justify-between text-xs mt-2">
        <p className="text-light cursor-pointer">Edit</p>
        <p className="text-xs text-gray-500">
          Reminder on {getTimeAMPM(props.reminder)}
        </p>
      </div>
    </div>
  );
}
