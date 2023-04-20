import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";
import TransactionContainer from "../components/TransactionContainer";
import { useState, useEffect } from "react";
import { getTransactions } from "../utils/api";

const Transfers = () => {
  const [transactions, setTransactions] = useState([]);
  useEffect(() => {
    const fetchTransactions = async () => {
      const transactions = await getTransactions();
      setTransactions(transactions);
    };
    fetchTransactions();
  }, []);
  return (
    <div className="min-h-screen text-white bg-neutral-900">
      <div className="relative flex items-center p-6">
        <Link to="/homepage" className="absolute">
          <Icon icon="material-symbols:arrow-back-ios-rounded" color="white" className="text-2xl" />
        </Link>
        <h1 className="flex-1 text-xl text-center">Transferencias</h1>
      </div>
      <div className="flex flex-col gap-3">
        <Link to="/transfers/email" className="flex items-center p-4 mx-6 bg-neutral-700">
          <Icon icon="mdi:person-switch" color="white" className="text-4xl" />
          <div className="flex flex-col flex-1 ml-4 text-start">
            <p className="">Con E-mail o celular</p>
            <p className="text-sm text-slate-200">A cuentas con financial wallet</p>
          </div>
        </Link>
        <Link className="flex items-center p-4 mx-6 bg-neutral-700" to="/transfers/byId">
          <Icon icon="mdi:person-switch" color="white" className="text-4xl" />
          <div className="flex flex-col flex-1 ml-4">
            <p className="">Con ID o aliasr</p>
            <p className="text-sm text-slate-200">A cuentas bancarias o digitales</p>
          </div>
        </Link>
      </div>
      <div className="flex flex-col p-6 space-y-4 ">
        <h2 className="font-semibold">Recientes</h2>
        <TransactionContainer transactions={transactions} viewMore={true} />
      </div>
    </div>
  );
};

export default Transfers;
