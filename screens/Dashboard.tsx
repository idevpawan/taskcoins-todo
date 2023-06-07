import HeaderTab from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import Todo from "@/components/Todo";
import { useState } from "react";

export default function Dashboard() {
  return (
    <main className="flex">
      <Sidebar />
      {/* Panel */}
      <div className="w-full p-4">
        <HeaderTab />
        {<Todo />}
      </div>
    </main>
  );
}
