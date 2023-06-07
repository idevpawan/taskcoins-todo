import Connect from "@/screens/Connect";
import Dashboard from "@/screens/Dashboard";
import { timeToEpoch } from "@/utils";
import { scheduleNotification } from "@/utils/Notification";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

export default function Home() {
  const dispatch = useDispatch();
  if (typeof window !== "undefined") {
    window.ethereum.on("chainChanged", (chainId: string | number) => {
      if (chainId != 5) {
        alert("Please add or Select Goerli Testnet!");
      }
    });

    window.ethereum.on("accountsChanged", (accounts: any[]) => {
      const newAddress = accounts[0];
      dispatch({ type: "SET_ADDRESS", payload: newAddress });
    });
  }

  useEffect(() => {
    if (Notification.permission !== "granted") {
      Notification.requestPermission().then(() => {
        return;
      });
    }
  }, []);

  function checkTodoNotifications() {
    const todos = JSON.parse(localStorage.getItem("todos") as string) || [];

    todos.forEach((todo: { text: string; date: string; time: string }) => {
      const currentDate = new Date().toDateString();
      const currentTime = new Date().getTime().toString();

      if (todo.date === currentDate && timeToEpoch(todo.time) === currentTime) {
        scheduleNotification({ text: todo.text });
      }
    });
  }

  useEffect(() => {
    const interval = setInterval(() => {
      checkTodoNotifications();
    }, 60000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const address = useSelector((state: any) => state.address);
  return <main>{address ? <Dashboard /> : <Connect />}</main>;
}
