import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";
import TransfersCheckout from "./TransfersCheckout";
import { verifyAccountId } from "../utils/api";
import { getBalance } from "../utils/api";

const TransfersAmount = () => {
  const { id } = useParams();
  const [next, setNext] = useState(false);
  const [amount, setAmount] = useState(0);
  const [receiverName, setReceiverName] = useState("");
  const [reference, setReference] = useState("");
  const [balance, setBalance] = useState(0);
  const changePage = () => {
    if (!next) {
      //validate required fields
      if (!amount) return;
      if (!reference) return;
      if (amount > balance) {
        return;
      }
    }
    setNext(!next);
  };
  const handleAmount = (e) => {
    setAmount(e.target.value);
  };
  useEffect(() => {
    const getReceiverName = async () => {
      const { data } = await verifyAccountId(id);
      const { firstName, lastName } = data;
      setReceiverName(firstName + " " + lastName);
    };
    const getBalanceData = async () => {
      const data = await getBalance();
      setBalance(data);
    };
    getBalanceData();
    getReceiverName();
  }, [id]);
  if (!next) {
    return (
      <div className="flex flex-col min-h-screen text-white bg-neutral-900">
        <div className="relative flex items-center p-6">
          <Link to="/transfers/email" className="absolute">
            <Icon
              icon="material-symbols:arrow-back-ios-rounded"
              color="white"
              className="text-2xl"
            />
          </Link>
          <h1 className="flex-1 text-xl text-center">Transferir dinero</h1>
        </div>
        <div className="flex flex-col justify-center mt-8 text-center">
          <h1 className="">¿Cuánto dinero quieres transferir?</h1>
          <h1 className="text-sm text-neutral-400">A {receiverName}</h1>
        </div>
        <div className="flex flex-col items-center justify-center gap-3 p-2 mx-6 mt-12">
          <input
            type="number"
            placeholder="$0"
            className={`max-w-xl text-2xl text-center text-white bg-transparent outline-none m-width-8 ${
              amount ? "border-b-2 border-blue-600" : "border-b-2 border-red-700"
            }`}
            onChange={handleAmount}
            required
          />
          <h1 className="text-sm">${balance} disponible</h1>
        </div>
        <div className="p-6">
          <input
            type="text"
            placeholder="Motivo de la transferencia"
            className={`w-full p-4 mt-8 text-xl text-center text-white outline-none bg-neutral-800 ${
              reference ? "border-2 border-blue-600" : "border-2 border-red-700"
            }`}
            onChange={(e) => setReference(e.target.value)}
            required
          />
        </div>
        <div className="px-6 mt-auto">
          <button
            className="w-full p-4 px-4 my-4 font-bold text-white rounded bg-gradient-to-r from-blue-600 to-fuchsia-600"
            onClick={changePage}
          >
            Continuar
            <Icon icon="octicon:arrow-right-16" className="inline-block ml-2 text-2xl" />
          </button>
        </div>
      </div>
    );
  }
  return (
    <TransfersCheckout
      amount={amount}
      changePage={changePage}
      name={receiverName}
      id={id}
      reference={reference}
    />
  );
};

export default TransfersAmount;
