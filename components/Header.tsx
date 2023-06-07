import Button from "@/ui_components/Button";
import { formatAddress } from "@/utils";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const Header = () => {
  const dispatch = useDispatch();
  const address = useSelector((state: any) => state.address);

  const handleDisconnect = () => {
    if (typeof window.ethereum !== "undefined") {
      window.ethereum.removeAllListeners(); // Remove all event listeners from the Ethereum provider

      // Reset the connected wallet address in the Redux store
      dispatch({ type: "SET_ADDRESS", payload: null });

      // Handle any additional cleanup or state resets
      // ...

      console.log("Wallet disconnected");
    } else {
      console.error("No ethereum wallet found!");
    }
  };

  return (
    <div className="flex justify-end items-center gap-10 mb-5">
      <p className="text-sm tracking-wider text-gray-500">
        {formatAddress(address)}
      </p>
      <Button
        title="Disconnect"
        onClick={() => handleDisconnect()}
        className="text-light border border-light px-4 py-1 rounded-xl"
      />
    </div>
  );
};

export default Header;
