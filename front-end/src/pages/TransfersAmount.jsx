import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";
import TransfersPaymentMethod from "./TransfersPaymentMethod";

const Contacts = [
  {
    id: 1,
    name: "Maria isabel",
    type: "Financial Wallet",
  },
  {
    id: 2,
    name: "Andres Alguacil",
    type: "Financial Wallet",
  },
  {
    id: 3,
    name: "Juan Garcia",
    type: "Financial Wallet",
  },
  {
    id: 4,
    name: "Maria isabel",
    type: "Financial Wallet",
  },
  {
    id: 5,
    name: "Pilar Gonzalez",
    type: "Financial Wallet",
  },
];

const TransfersAmount = () => {
  const { id } = useParams();
  const [next, setNext] = useState(false);
  const [amount, setAmount] = useState(0);
  const changePage = () => {
    setNext(!next);
  };
  const handleAmount = (e) => {
    setAmount(e.target.value);
  };
  const searchContact = (id) => {
    return Contacts.find((contact) => contact.id === parseInt(id));
  };
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
          <h1 className="text-sm text-neutral-400">
            A {searchContact(id).name}
          </h1>
        </div>
        <div className="flex flex-col items-center justify-center gap-3 p-2 mx-6 mt-12">
          <input
            type="text"
            placeholder="$0"
            className="max-w-xl text-2xl text-center text-white bg-transparent outline-none m-width-8"
            onChange={handleAmount}
          />
          <h1 className="text-sm">$4.890,00 disponible</h1>
        </div>
        <div className="px-6 mt-auto">
          <button
            className="w-full p-4 px-4 my-4 font-bold text-white rounded bg-gradient-to-r from-blue-600 to-fuchsia-600"
            onClick={changePage}
          >
            Continuar
            <Icon
              icon="octicon:arrow-right-16"
              className="inline-block ml-2 text-2xl"
            />
          </button>
        </div>
      </div>
    );
  }
  return (
    <TransfersPaymentMethod
      amount={amount}
      changePage={changePage}
      name={searchContact(id).name}
    />
  );
};

export default TransfersAmount;
