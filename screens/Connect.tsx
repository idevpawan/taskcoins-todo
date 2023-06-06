import Loader from "@/components/Loader";
import Button from "@/ui_components/Button";
import React, { useState } from "react";
import { useDispatch } from "react-redux";

const Connect = () => {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const handleConnect = () => {
    setIsLoading(true);

    if (typeof window.ethereum !== "undefined") {
      window.ethereum
        .request({ method: "eth_requestAccounts" })
        .then((accounts: any) => {
          const address = accounts[0];
          dispatch({ type: "SET_ADDRESS", payload: address });
          setIsLoading(false);
        })
        .catch((error: any) => {
          setIsLoading(false);
          console.error("Error connecting:", error);
        });
    } else {
      console.error("No ethereum wallet found!");
    }
  };

  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="absolute top-20 left-80 w-48 h-48 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 rounded-full mix-blend-multiply filter blur-lg opacity-70"></div>
      <div className="absolute top-0 right-40 w-64 h-64 bg-gradient-to-b from-purple-500 via-pink-500 to-blue-500 rounded-full mix-blend-multiply filter blur-lg opacity-70"></div>
      <div className="absolute bottom-0 left-0 w-60 h-40 bg-gradient-to-b from-pink-500 via-blue-500 to-purple-500 rounded-full mix-blend-multiply filter blur-lg opacity-70"></div>
      <div className="absolute bottom-0 right-0 w-56 h-56 bg-gradient-to-b from-pink-500 via-purple-500 to-blue-500 rounded-full mix-blend-multiply filter blur-lg opacity-70"></div>
      <div className="max-w-md mx-auto px-4 text-center">
        <h1 className="font-bold text-4xl sm:text-5xl md:text-6xl tracking-wider mb-4">
          TaskCoins
        </h1>
        <p className="text-gray-400 text-sm sm:text-base mb-6">
          We believe in the power of productivity and the potential of
          cryptocurrency. TaskCoins is a unique todo application that rewards
          you with cryptocurrency for completing your daily tasks.
        </p>
        {isLoading ? (
          <div className="flex justify-center mb-12">
            <Loader />
          </div>
        ) : (
          <Button
            title="Connect Wallet"
            onClick={() => handleConnect()}
            className="py-2 px-8 bg-light text-white rounded-2xl mb-10"
          />
        )}
      </div>
    </div>
  );
};

export default Connect;
