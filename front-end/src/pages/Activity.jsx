import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";
import TransactionContainer from "../components/TransactionContainer";

const Activity = () => {
  const transactions = [
    {
      id: 1,
      type: "transferencia",
      amount: 1000,
      name: "Maria Isabel",
    },
    {
      id: 2,
      type: "deposito",
      amount: 1000,
      name: "Andrés Alguacil",
    },
    {
      id: 3,
      type: "retiro",
      amount: 1000,
      name: "Juan Garcia",
    },
    {
      id: 4,
      type: "transferencia",
      amount: 1000,
      name: "Maria Isabel",
    },
    {
      id: 5,
      type: "deposito",
      amount: 1000,
      name: "Andrés Alguacil",
    },
    {
      id: 6,
      type: "retiro",
      amount: 1000,
      name: "Juan Garcia",
    },
    {
      id: 7,
      type: "transferencia",
      amount: 1000,
      name: "Maria Isabel",
    },
    {
      id: 8,
      type: "deposito",
      amount: 1000,
      name: "Andrés Alguacil",
    },
    {
      id: 9,
      type: "retiro",
      amount: 1000,
      name: "Juan Garcia",
    },
    {
      id: 10,
      type: "transferencia",
      amount: 1000,
      name: "Maria Isabel",
    },
    {
      id: 11,
      type: "deposito",
      amount: 1000,
      name: "Andrés Alguacil",
    },
    {
      id: 12,
      type: "retiro",
      amount: 1000,
      name: "Juan Garcia",
    },
  ];
  return (
    <div className="min-h-screen text-white bg-neutral-900">
      <div className="flex items-center p-6">
        <Link to="/homepage">
          <Icon
            icon="material-symbols:arrow-back-ios-rounded"
            color="white"
            className="text-2xl"
          />
        </Link>
        <h1 className="flex-1 text-xl text-center">Actividad</h1>
      </div>
      <div className="flex items-center gap-3 p-2 mx-6 bg-neutral-800">
        <Icon icon="uil:search" color="white" className="text-2xl" />
        <input
          type="text"
          placeholder="Buscar"
          className="flex-1 px-2 text-white bg-transparent outline-none"
        />
      </div>
      <h1 className="px-6 py-2 mt-4 text-xl font-semibold">Tu actividad</h1>
      <div className="flex flex-col px-6">
        <TransactionContainer transactions={transactions} viewMore={true} />
      </div>
    </div>
  );
};

export default Activity;
