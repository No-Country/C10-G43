import { Icon } from "@iconify/react";
import MoneyCard from "../components/MoneyCard";
import TransactionContainer from "../components/TransactionContainer";
import Menu from "../components/Menu";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getBalance, getUserName, getTransactions } from "../utils/api";

const Homepage = () => {
  const [menuHidden, setMenuHidden] = useState(true);
  const [balance, setBalance] = useState(0);
  const [userName, setUserName] = useState("");
  const [transactions, setTransactions] = useState([]);
  const handleMenuClick = () => {
    setMenuHidden(!menuHidden);
  };
  useEffect(() => {
    const fetchBalance = async () => {
      const balance = await getBalance();
      setBalance(balance);
    };
    const fetchUserName = async () => {
      const userName = await getUserName();
      setUserName(userName);
    };
    const fetchTransactions = async () => {
      const transactions = await getTransactions(3);
      setTransactions(transactions);
    };
    fetchBalance();
    fetchUserName();
    fetchTransactions();
  }, []);
  return (
    <div className="min-h-screen bg-neutral-900">
      <Menu hidden={menuHidden} onClick={handleMenuClick} />
      <div className="flex justify-between p-6 ">
        <button onClick={handleMenuClick}>
          <Icon icon="ic:round-menu" color="#7e22ce" className="text-3xl" />
        </button>
        <Link to="/notifications">
          <Icon icon="mdi:bell-outline" color="#7e22ce" className="text-3xl" />
        </Link>
      </div>
      <div className="flex flex-col px-5 py-4 text-white ">
        <div className="flex items-center gap-x-5">
          <Icon icon="mdi:user-circle-outline" color="white" className="text-5xl" />
          <h3 className="text-2xl font-semibold">¡Buen día, {userName}!</h3>
        </div>
        <MoneyCard balance={balance} />
        <div className="mt-6">
          <TransactionContainer transactions={transactions} />
        </div>
      </div>
    </div>
  );
};

export default Homepage;
