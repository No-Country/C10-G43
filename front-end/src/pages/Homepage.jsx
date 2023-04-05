import { Icon } from "@iconify/react";
import MoneyCard from "../components/MoneyCard";
import TransactionContainer from "../components/TransactionContainer";
import OfferCarousel from "../components/OfferCarousel";
import Menu from "../components/Menu";
import { useState } from "react";
import { Link } from "react-router-dom";

const Homepage = () => {
  const [menuHidden, setMenuHidden] = useState(true);
  const handleMenuClick = () => {
    setMenuHidden(!menuHidden);
  };
  const personalInfo = {
    name: "Juan",
    balance: 123456.78,
  };
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
  ];
  return (
    <div className="min-h-screen bg-neutral-900">
      <Menu hidden={menuHidden} onClick={handleMenuClick} />
      <div className="flex justify-between p-6 ">
        <button onClick={handleMenuClick}>
          <Icon icon="ic:round-menu" color="white" className="text-3xl" />
        </button>
        <Link to="/notifications">
          <Icon icon="mdi:bell-outline" color="white" className="text-3xl" />
        </Link>
      </div>
      <div className="flex flex-col px-5 py-4 text-white ">
        <div className="flex items-center gap-x-5">
          <Icon
            icon="mdi:user-circle-outline"
            color="white"
            className="text-5xl"
          />
          <h3 className="text-2xl font-semibold">
            ¡Buen día, {personalInfo.name}!
          </h3>
        </div>
        <MoneyCard balance={personalInfo.balance} />
        <div className="mt-6">
          <p className="text-lg font-medium">Tu actividad</p>
          <TransactionContainer transactions={transactions} />
        </div>
        <OfferCarousel />
      </div>
    </div>
  );
};

export default Homepage;
