import HeaderTab from "@/components/HeaderTab";
import Sidebar from "@/components/Sidebar";
import Todo from "@/components/Todo";
import { useState } from "react";

export default function Dashboard() {
  const [tabNum, setTabNum] = useState<number>(1);
  const handleUpdateTab = (e: number) => {
    setTabNum(e);
  };
  return (
    <main className="flex">
      <Sidebar />
      {/* Panel */}

      <div className="w-full p-4">
        <HeaderTab handleUpdateTab={handleUpdateTab} />
        <div>{tabNum === 1 && <Todo />}</div>
      </div>
    </main>
  );
}
