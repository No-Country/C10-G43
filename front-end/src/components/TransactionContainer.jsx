import React, { useState } from "react";
import TransactionItem from "../components/TransactionItem";
import { Link } from "react-router-dom";

const TransactionContainer = ({ transactions, viewMore }) => {
  const [lista, setLista] = useState({});
  const getTransactionBlocks = (transactions) => {
    const transactionBlocks = [];
    let currentBlock = [];
    let currentDay = new Date(transactions[0].createdAt).getDate();
    for (let i = 0; i < transactions.length; i++) {
      const transaction = transactions[i];
      const transactionDay = new Date(transaction.createdAt).getDate();
      if (transactionDay === currentDay) {
        console.log("Mismo día");
        currentBlock.push(transaction);
      } else {
        console.log("Día diferente");
        transactionBlocks.push(currentBlock);
        currentBlock = [transaction];
        currentDay = transactionDay;
      }
    }
    transactionBlocks.push(currentBlock);
    console.log("Bloques ", transactionBlocks.length);
    return transactionBlocks;
  };
  const convertirFecha = (fecha) => {
    const meses = [
      "Enero",
      "Febrero",
      "Marzo",
      "Abril",
      "Mayo",
      "Junio",
      "Julio",
      "Agosto",
      "Septiembre",
      "Octubre",
      "Noviembre",
      "Diciembre",
    ];
    const partes = fecha.split("/");
    const dia = parseInt(partes[0]);
    const mes = meses[parseInt(partes[1]) - 1];
    const fechaObj = new Date(`${partes[2]}-${partes[1]}-${partes[0]}`);
    const diaSemana = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"][
      fechaObj.getDay()
    ];
    return `${diaSemana}, ${dia} de ${mes}`;
  };

  return transactions.length ? (
    <>
      <p className={viewMore ? "hidden" : "text-lg font-medium"}>Tu actividad</p>
      <div className="flex flex-col bg-neutral-800 text-slate-200">
        {
          getTransactionBlocks(transactions).map((transactionBlock, index) => {
            console.log("Bloque " + index);
            const transactionDay = new Date(transactionBlock[0].createdAt).getDate();
            const transactionMonth = new Date(transactionBlock[0].createdAt).getMonth();
            const transactionYear = new Date(transactionBlock[0].createdAt).getFullYear();
            const transactionDate = `${transactionDay}/${transactionMonth}/${transactionYear}`;
            return (
              <React.Fragment key={index}>
                <div className=" bg-[#202020]">
                  <p className="flex justify-start px-4 py-2 text-xl text-white ">
                    {convertirFecha(transactionDate)}
                  </p>
                </div>
                {transactionBlock.map((transaction) => {
                  return (
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
                  );
                })}
              </React.Fragment>
            );
          })
          /* else {
            return (
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
            );
          } */
        }
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
