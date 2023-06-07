import Connect from "@/screens/Connect";
import Dashboard from "@/screens/Dashboard";
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

  const address = useSelector((state: any) => state.address);
  return <main>{address ? <Dashboard /> : <Connect />}</main>;
}
