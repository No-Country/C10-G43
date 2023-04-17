import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";
import { useState } from "react";
import ContactsContainer from "../components/ContactsContainer";

const Contacts = [
  {
    id: 1,
    name: "Maria isabel",
    type: "Financial Wallet",
  },
  {
    id: 2,
    name: "Andres Alguacil",
    type: "Financial Wallet",
  },
  {
    id: 3,
    name: "Juan Garcia",
    type: "Financial Wallet",
  },
  {
    id: 4,
    name: "Maria isabel",
    type: "Financial Wallet",
  },
  {
    id: 5,
    name: "Pilar Gonzalez",
    type: "Financial Wallet",
  },
];

const TransfersEmail = () => {
  const [results, setResults] = useState([]);

  const handleSearch = (value) => {
    const results = Contacts.filter((contact) => {
      return contact.name.toLowerCase().includes(value.toLowerCase());
    });
    setResults(results);
  };
  return (
    <div className="min-h-screen text-white bg-neutral-900">
      <div className="relative flex items-center p-6 ">
        <Link to="/transfers" className="absolute">
          <Icon
            icon="material-symbols:arrow-back-ios-rounded"
            color="white"
            className="text-2xl"
          />
        </Link>
        <h1 className="flex-1 text-xl text-center">Transferir dinero</h1>
      </div>
      <div className="flex items-center gap-3 p-2 mx-6 bg-neutral-800">
        <Icon icon="uil:search" color="white" className="text-2xl" />
        <input
          type="text"
          placeholder="Buscar por e-mail o teléfono"
          className="flex-1 px-2 text-white bg-transparent outline-none"
          onChange={(e) => handleSearch(e.target.value)}
        />
      </div>
      <div className="mx-6 my-4">
        <h1>Contactos recientes</h1>
        <ContactsContainer contacts={results.length > 0 ? results : Contacts} />
      </div>
    </div>
  );
};

export default TransfersEmail;
