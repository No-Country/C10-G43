import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";
import Card from "../components/Card";

const MyCards = () => {
  return (
    <div className="min-h-screen text-white bg-neutral-900">
      <div className="relative flex items-center p-6 ">
        <Link to="/homepage" className="absolute">
          <Icon
            icon="material-symbols:arrow-back-ios-rounded"
            color="white"
            className="text-2xl"
          />
        </Link>
        <h1 className="flex-1 text-xl text-center">Tarjetas</h1>
      </div>
      <div className="flex flex-col gap-6 p-6">
        <div>
          <h1 className="mb-4">Tarjeta Virtual</h1>
          <Card />
        </div>
        <div>
          <h1 className="mb-4">Tarjetas adheridas</h1>
          <Card />
        </div>
      </div>
    </div>
  );
};

export default MyCards;
