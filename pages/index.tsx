import Connect from "@/screens/Connect";
import Dashboard from "@/screens/Dashboard";
import { useSelector } from "react-redux";

export default function Home() {
  const address = useSelector((state: any) => state.address);
  return <main>{address ? <Dashboard /> : <Connect />}</main>;
}
