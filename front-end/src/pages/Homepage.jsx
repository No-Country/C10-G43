import Navbar from "../components/Navbar";
import TransactionItem from "../components/TransactionItem";

const Homepage = () => {
  return (
    <>
      <div className="flex justify-between p-6 bg-gray-300">
        <i className="text-2xl fa-solid fa-bars"></i>
        <i className="text-2xl fa-regular fa-bell"></i>
      </div>
      <div className="flex flex-col px-5 py-4">
        <div className="flex items-center gap-x-5">
          <i className="text-5xl fa-solid fa-user-circle"></i>
          <h3 className="text-2xl font-semibold">¡Buen día, Juan Alberto!</h3>
        </div>
        <div className="p-4 mt-8 bg-gray-200">
          <p className="text-xl">Dinero disponible:</p>
          <p className="text-2xl font-bold text-slate-700">
            $<span className="text-3xl">4.890</span>,00
          </p>
          <div className="flex gap-4 mt-4">
            <button className="flex-1 px-5 py-2 bg-gray-300">
              Ingresar dinero
            </button>
            <button className="flex-1 px-5 py-2 bg-gray-300">
              Transferir dinero
            </button>
          </div>
        </div>
        <div className="mt-4">
          <p className="text-xl font-medium">Tu actividad</p>
          <div className="flex flex-col mt-4 bg-gray-200">
            <TransactionItem />
            <TransactionItem />
            <TransactionItem />
            <i className="flex justify-center py-2 text-xl fa-solid fa-chevron-down"></i>
          </div>
        </div>
      </div>
      <Navbar />
    </>
  );
};

export default Homepage;
