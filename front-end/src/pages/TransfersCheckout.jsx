import React from "react";
import { Icon } from "@iconify/react";
import { transferFunds } from "../utils/api";
import { useNavigate } from "react-router-dom";

const TransfersCheckout = ({ amount, changePage, name, id, reference }) => {
  const navigate = useNavigate();
  const handleTransfer = async () => {
    const transferData = {
      receiver: id,
      amount: amount,
      reference: reference,
    };
    const { success, data } = await transferFunds(transferData);
    const { _id: transactionId } = data;
    if (success) {
      navigate(`/transfers/${transactionId}`);
    }
  };

  return (
    <div className="flex flex-col min-h-screen text-white bg-neutral-900">
      <div className="relative flex items-center p-6">
        <button to="/transfers" className="absolute" onClick={changePage}>
          <Icon icon="material-symbols:arrow-back-ios-rounded" color="white" className="text-2xl" />
        </button>
        <h1 className="flex-1 text-xl text-center">Transferir dinero</h1>
      </div>
      <div className="flex flex-col items-center justify-center p-6 text-center">
        <div className="flex flex-col w-full py-4 mt-6 border-b-2 border-neutral-700">
          <div className="flex justify-start mb-2">
            <h1 className="text-xl">Transferir a {name}</h1>
          </div>
          <div className="flex justify-start mb-8">
            <h1 className="">Motivo: {reference}</h1>
          </div>
          <div className="flex justify-between">
            <h1 className="text-xl">Dinero a transferirir</h1>
            <h1 className="text-xl">${amount}</h1>
          </div>
          <div className="flex justify-between text-neutral-400">
            <h1>Cargo (2%) </h1>
            <h1>${amount * 0.02}</h1>
          </div>
        </div>
        <div className="flex justify-between w-full mt-4">
          <h1 className="text-xl">Total a pagar</h1>
          <h1 className="text-xl">${amount * 1.02}</h1>
        </div>
      </div>
      <div className="px-6 mt-auto">
        <button
          className="w-full p-4 px-4 my-4 font-bold text-white rounded bg-gradient-to-r from-blue-600 to-fuchsia-600"
          onClick={handleTransfer}
        >
          Transferir
          <Icon icon="octicon:arrow-right-16" className="inline-block ml-2 text-2xl" />
        </button>
      </div>
    </div>
  );
};

export default TransfersCheckout;
