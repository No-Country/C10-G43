import TransactionItem from "../components/TransactionItem";
import { Link } from "react-router-dom";

const TransactionContainer = ({ transactions, viewMore }) => {
  return (
    <div className="flex flex-col bg-neutral-800 text-slate-200">
      {transactions.map((transaction) => (
        <TransactionItem
          key={transaction.id}
          type={transaction.type}
          amount={transaction.amount}
          name={transaction.name}
        />
      ))}
      <Link
        to="/activity"
        className={viewMore ? "hidden" : "flex justify-center py-2 text-xl "}
      >
        <p className="flex justify-center py-2 text-xl ">Ver más</p>
      </Link>
    </div>
  );
};

export default TransactionContainer;
