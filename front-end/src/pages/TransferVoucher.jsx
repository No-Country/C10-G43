import React, { useEffect, useState } from "react";
import { Icon } from "@iconify/react";
import { Link, useParams } from "react-router-dom";
import icon from "../assets/icon.svg";
import { getTransactionsById } from "../utils/api";

const TransferVoucher = () => {
  const { id } = useParams();
  const [transactions, setTransactions] = useState(null);
  useEffect(() => {
    const fetchTransactions = async () => {
      const transactions = await getTransactionsById(id);
      setTransactions(transactions);
    };
    fetchTransactions();
  }, []);
  return (
    <div className="flex flex-col min-h-screen text-white bg-neutral-900">
      <div className="relative flex items-center p-6 ">
        <Link to="/homepage" className="absolute mt-4">
          <Icon icon="ic:round-close" color="white" className="text-2xl" />
        </Link>
      </div>
      <div className="flex flex-col items-center justify-center p-6 mt-20 text-center">
        <img src={icon} alt="icon" className="w-20 h-20" />
        <h1 className="mt-4">¡Listo! Ya hiciste tu transferencia.</h1>
        {transactions ? (
          <>
            <h1 className="mt-2">
              A {transactions.receiver.firstName} {transactions.receiver.lastName}
            </h1>
            <h1 className="mt-2 text-2xl font-bold">${transactions.amount}</h1>
          </>
        ) : (
          ""
        )}
        <h1 className="mt-8">
          Tu numero de referencia es:
          <span className="font-bold"> {id}</span>
        </h1>
      </div>
      <div className="px-6 mt-auto">
        <Link
          className="flex justify-center w-full p-4 px-4 my-4 font-bold text-white rounded bg-gradient-to-r from-blue-600 to-fuchsia-600"
          to="/homepage"
        >
          <div className="flex justify-center gap-2">
            <Icon icon="octicon:arrow-left-16" className="inline-block ml-2 text-2xl" />
            <h1>Volver al inicio</h1>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default TransferVoucher;
