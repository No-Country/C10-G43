import { Link } from "react-router-dom";

const MoneyCard = ({ balance }) => {
  const balanceFormatted = balance.toLocaleString("es-MX", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
  const balanceParts = balanceFormatted.split(".");
  const integerPart = balanceParts[0].replace(",", ".");
  const decimalPart = balanceParts[1];
  return (
    <div className="flex flex-col gap-2 mt-8">
      <p className="text-lg font-medium">Tu dinero</p>
      <div className="p-4 bg-neutral-800">
        <p className="text-xl">Saldo disponible:</p>
        <p className="text-2xl font-bold ">
          $<span className="text-3xl">{integerPart}</span>,{decimalPart}
        </p>
        <div className="flex gap-4 mt-4">
          <button className="flex-1 py-2 bg-neutral-700">
            Ingresar dinero
          </button>
          <Link
            to="/transfers"
            className="flex-1 py-2 text-center bg-neutral-700"
          >
            Transferir dinero
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MoneyCard;
