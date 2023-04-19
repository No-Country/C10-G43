import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";
import Donut from "../components/Donut";

const Balance = () => {
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
        <h1 className="flex-1 text-xl text-center">Tu dinero</h1>
      </div>
      <div className="flex flex-col gap-6 p-6">
        <div>
          <h1 className="mb-4">Tu dinero</h1>
          <div className="flex flex-col gap-2 p-4 bg-neutral-800">
            <p className="text-neutral-400">Saldo disponible</p>
            <h1 className="text-2xl">
              $1.000,<span className="text-xl">00</span>
            </h1>
            <p className="text-neutral-500">$123,00 a liquidar</p>
          </div>
        </div>
        <div>
          <h1 className="mb-4">Tus gastos</h1>
          <div className="flex flex-col items-center justify-center gap-4 p-4 bg-neutral-800">
            <div className="w-full text-start">
              <p className="text-neutral-400">Abril</p>
            </div>
            <Donut series={[20, 30, 50]} total={"$2.346,89"} />
            <div className="flex flex-col w-full gap-4">
              <div className="flex items-center justify-between py-2 border-b-2 border-neutral-700">
                <div className="flex items-center justify-center gap-2">
                  <div className="p-2 rounded-full bg-neutral-500">
                    <Icon
                      icon="uil:pizza-slice"
                      hFlip={true}
                      vFlip={true}
                      color="white"
                      className="text-2xl"
                    />
                  </div>
                  <p>Comidas y bebidas</p>
                </div>
                <p>$1.050,45</p>
              </div>
              <div className="flex items-center justify-between py-2 border-b-2 border-neutral-700">
                <div className="flex items-center justify-center gap-2">
                  <div className="p-2 rounded-full bg-neutral-500">
                    <Icon
                      icon="mdi:cart-outline"
                      color="white"
                      className="text-2xl"
                    />
                  </div>
                  <p>Supermercado</p>
                </div>
                <p>$413,00</p>
              </div>
              <div className="flex items-center justify-between py-2 border-b-2 border-neutral-700">
                <div className="flex items-center justify-center gap-2">
                  <div className="p-2 rounded-full bg-neutral-500">
                    <Icon
                      icon="uil:puzzle-piece"
                      color="white"
                      className="text-2xl"
                    />
                  </div>
                  <p>Entretenimiento</p>
                </div>
                <p>$883,44</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Balance;
