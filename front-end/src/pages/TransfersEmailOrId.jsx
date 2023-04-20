import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";
import { useState } from "react";
import { verifyAccountEmail, verifyAccountId } from "../utils/api";
import ContactItem from "../components/ContactItem";
import Notiflix from "notiflix";

const TransfersEmailOrId = ({ byEmail }) => {
  const [result, setResult] = useState(null);
  const [search, setSearch] = useState("");

  Notiflix.Notify.init({
    timeout: 2000,
    clickToClose: true,
    showOnlyTheLastOne: true,
  });

  const handleEmailChange = (e) => {
    setSearch(e.target.value.trim().toLowerCase());
  };

  const notifyError = (res) => {
    if (!res) {
      Notiflix.Notify.failure("No se encontró el destinatario");
    }
  };

  const handleSearchClick = async () => {
    if (byEmail) {
      const result = await verifyAccountEmail(search);
      result.success ? setResult(result.data) : setResult(null);
      notifyError(result.success);
    } else {
      const result = await verifyAccountId(search);
      result.success ? setResult(result.data) : setResult(null);
      notifyError(result.success);
    }
  };

  return (
    <div className="flex flex-col min-h-screen text-white bg-neutral-900">
      <div className="relative flex items-center p-6 ">
        <Link to="/transfers" className="absolute">
          <Icon icon="material-symbols:arrow-back-ios-rounded" color="white" className="text-2xl" />
        </Link>
        <h1 className="flex-1 text-xl text-center">Transferir dinero</h1>
      </div>
      <div className="flex items-center gap-3 p-2 mx-6 bg-neutral-800">
        <Icon icon="uil:search" color="white" className="text-2xl" />
        <input
          type="text"
          placeholder={
            byEmail ? "Ingresa el e-mail del destinatario" : "Ingresa el ID del destinatario"
          }
          className="flex-1 px-2 text-white bg-transparent outline-none"
          onChange={handleEmailChange}
        />
      </div>
      <div className="p-6 mt-8">{result ? <ContactItem data={result} /> : ""}</div>
      <div className="px-6 mt-auto">
        <button
          className="w-full p-4 px-4 my-4 font-bold text-white rounded bg-gradient-to-r from-blue-600 to-fuchsia-600"
          onClick={handleSearchClick}
        >
          Buscar
          <Icon icon="octicon:arrow-right-16" className="inline-block ml-2 text-2xl" />
        </button>
      </div>
    </div>
  );
};

export default TransfersEmailOrId;
