import React from "react";
import financial_wallet from "../assets/financial_wallet.svg";
import desktop_info from "../assets/desktop_info.svg";
import alert from "../assets/alert.svg";
import icon from "../assets/icon.svg";

const DesktopPage = () => {
  return (
    <div className="h-screen overflow-hidden text-white bg-[#2C2C2C]">
      <div className="flex flex-col items-start justify-center px-32 py-8 bg-[#212121]">
        <img src={financial_wallet} alt="financial wallet" />
      </div>
      <div className="flex h-full">
        <div className="flex justify-center w-1/2">
          <img src={desktop_info} alt="desktop info" className="w-3/5 " />
        </div>
        <div className="relative flex justify-center w-1/2 bg-[#252525]">
          <img src={alert} alt="alert" className="absolute w-12 right-4 top-4" />
          <img
            src={icon}
            alt="icon"
            className="absolute bottom-12 w-72 -right-32 opacity-[.01] grayscale"
          />
          <div className="flex flex-col justify-center gap-6 px-24">
            <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-fuchsia-600">
              Por los momentos no se puede abrir en este dispositivo
            </h1>
            <p className="text-xl">
              Sigue disfrutando de esta aplicación a través de tu teléfono móvil. ¡Pronto estará
              disponible en este dispositivo y muchos más!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DesktopPage;
