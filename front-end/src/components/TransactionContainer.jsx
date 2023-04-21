import TransactionItem from "../components/TransactionItem";
import { Link } from "react-router-dom";

const TransactionContainer = ({ transactions, viewMore }) => {
  return transactions.length ? (
    <>
      <p className={viewMore ? "hidden" : "text-lg font-medium"}>Tu actividad</p>
      <div className="flex flex-col bg-neutral-800 text-slate-200">
        {transactions.map((transaction) => (
          <TransactionItem
            key={transaction._id}
            amount={transaction.amount}
            receiverName={transaction.receiver.firstName}
            receiverLastName={transaction.receiver.lastName}
            senderName={transaction.sender.firstName}
            senderLastName={transaction.sender.lastName}
            transactionType={transaction.transactionType}
            reference={transaction.reference}
          />
        ))}
        <Link to="/activity" className={viewMore ? "hidden" : "flex justify-center py-2 text-xl "}>
          <p className="flex justify-center py-2 text-xl text-purple-600 ">Ver más</p>
        </Link>
      </div>
    </>
  ) : (
    ""
  );
};

export default TransactionContainer;
