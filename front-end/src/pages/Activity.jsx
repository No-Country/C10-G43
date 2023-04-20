import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";
import TransactionContainer from "../components/TransactionContainer";
import { useState, useEffect } from "react";
import axios from "axios";
import getConfig from "../utils/getConfig";

const Activity = () => {
  const [transactions, setTransactions] = useState([]);
  useEffect(() => {
    const fetchTransactions = async () => {
      const { data } = await axios.post(
        "http://localhost:9000/api/transactions/get-all-transactions-by-user",
        {},
        getConfig()
      );
      setTransactions(data.data);
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
      {/* <div className="flex items-center gap-3 p-2 mx-6 bg-neutral-800">
        <Icon icon="uil:search" color="white" className="text-2xl" />
        <input
          type="text"
          placeholder="Buscar"
          className="flex-1 px-2 text-white bg-transparent outline-none"
        />
      </div> */}
      <h1 className="px-6 py-2 mt-4 text-xl font-semibold">Tu actividad</h1>
      <div className="flex flex-col px-6">
        <TransactionContainer transactions={transactions} viewMore={true} />
      </div>
    </div>
  );
};

export default Activity;
