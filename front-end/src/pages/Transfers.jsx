import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";
import TransactionContainer from "../components/TransactionContainer";

const Transfers = () => {
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
      <div className="relative flex items-center p-6">
        <Link to="/homepage" className="absolute">
          <Icon
            icon="material-symbols:arrow-back-ios-rounded"
            color="white"
            className="text-2xl"
          />
        </Link>
        <h1 className="flex-1 text-xl text-center">Transferencias</h1>
      </div>
      <div className="flex flex-col gap-3">
        <Link
          to="/transfers/email"
          className="flex items-center p-4 mx-6 bg-neutral-700"
        >
          <Icon icon="mdi:person-switch" color="white" className="text-4xl" />
          <div className="flex flex-col flex-1 ml-4 text-start">
            <p className="">Con E-mail o celular</p>
            <p className="text-sm text-slate-200">
              A cuentas con financial wallet
            </p>
          </div>
        </Link>
        <div className="flex items-center p-4 mx-6 bg-neutral-700">
          <Icon icon="mdi:person-switch" color="white" className="text-4xl" />
          <div className="flex flex-col flex-1 ml-4">
            <p className="">Con ID o aliasr</p>
            <p className="text-sm text-slate-200">
              A cuentas bancarias o digitales
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col p-6 space-y-4 ">
        <h2 className="font-semibold">Recientes</h2>
        <TransactionContainer transactions={transactions} viewMore={true} />
      </div>
    </div>
  );
};

export default Transfers;
