import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";
import TransactionContainer from "../components/TransactionContainer";
import { useState, useEffect } from "react";
import { getTransactions } from "../utils/api";

const Activity = () => {
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
        <h1 className="flex-1 text-xl text-center">Actividad</h1>
      </div>
      <h1 className="px-6 py-2 mt-4 text-xl font-semibold">Tu actividad</h1>
      <div className="flex flex-col px-6">
        <TransactionContainer transactions={transactions} viewMore={true} />
      </div>
    </div>
  );
};

export default Activity;
