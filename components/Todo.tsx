import Button from "@/ui_components/Button";
import Input from "@/ui_components/Input";
import React, { useEffect, useState } from "react";
import { IoMdAddCircle } from "react-icons/io";
import TodoItem from "./TodoItem";
import { v4 as uuidv4 } from "uuid";
import { useDispatch, useSelector } from "react-redux";
import { loadTodosFromLocalStorage } from "@/utils";

export default function Todo() {
  const dispatch = useDispatch();
  const selectedDate = useSelector((state: any) => state.selectedDate);
  const [textInput, setTextInput] = useState("");
  const [timeInput, setTimeInput] = useState("");
  const [error, setError] = useState(false);
  const [todos, setTodos] = useState([]);
  const todosFomStore = useSelector((state: any) => state.todos);

  useEffect(() => {
    const todosFromLocalStorage = loadTodosFromLocalStorage();

    if (todosFromLocalStorage.length > 0) {
      // If todos exist in local storage, dispatch action to update the store
      dispatch({ type: "SET_TODOS", payload: todosFromLocalStorage });
    }
    setTodos(todosFromLocalStorage);
  }, [dispatch, todosFomStore]);

  const saveTodo = () => {
    const id = uuidv4();
    if (!textInput || !timeInput) {
      setError(true);
    } else {
      const newTodo = {
        id,
        date: selectedDate.toDateString(),
        text: textInput,
        time: timeInput,
      };
      const lsd = localStorage.getItem("todos") as string;
      const existingTodos = JSON.parse(lsd) || [];
      const updatedTodos = [...existingTodos, newTodo];
      localStorage.setItem("todos", JSON.stringify(updatedTodos));

      dispatch({ type: "ADD_TODO", payload: newTodo });

      setTextInput("");
      setTimeInput("");
      setError(false);
    }
  };

  function filterTodosByDate(selectedDate: Date) {
    const filteredTodos = todos.filter((todo: { date: string }) => {
      console.log(selectedDate);
      return todo.date === selectedDate.toDateString();
    });

    return filteredTodos;
  }

  const filteredTodos = filterTodosByDate(selectedDate);
  console.log(filteredTodos);

  return (
    <div>
      <div className="border p-4 rounded-2xl bg-white block">
        <Input
          placeholder="Write something here..."
          type="text"
          onChange={(e) => setTextInput(e.target.value)}
          value={textInput}
          inputClassName="border w-full rounded-lg p-3 text-gray-700 bg-gray-50 bg-white text-gray-500 mt-3"
        />
        <div className="flex items-center mt-4 gap-5">
          <Input
            label="Reminder"
            type="time"
            inputClassName="bg-white text-gray-700 w-[110px]"
            labelClassName="text-slate-500 tracking-wider"
            value={timeInput}
            onChange={(e) => setTimeInput(e.target.value)}
          />
          <div>
            <Button
              title="Create New"
              onClick={() => saveTodo()}
              className="py-2 px-8 bg-light text-white rounded-2xl"
            />
          </div>
        </div>
      </div>
      <p className="text-red-500">{error && "Please fill all the fields!"}</p>
      <div className="border-b my-4 " />
      {filteredTodos.length > 0 ? (
        <div className=" overflow-y-scroll h-[400px]">
          {filteredTodos.map((todo: any) => {
            return (
              <TodoItem
                key={todo.id}
                id={todo.id}
                title={todo.text}
                reminder={todo.time}
              />
            );
          })}
        </div>
      ) : (
        <div className="text-center mt-40">
          <div className="flex mb-2 justify-center text-6xl text-gray-300">
            <IoMdAddCircle />
          </div>
          <p className="text-sm text-gray-400">
            No todo at the moment. Please create new
          </p>
        </div>
      )}
    </div>
  );
}
