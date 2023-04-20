import React from "react";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";
import under_construction from "../assets/under_construction.svg";
import alert from "../assets/alert.svg";
import icon from "../assets/icon.svg";

const UnderConstruction = ({ name }) => {
  return (
    <div className="h-screen overflow-hidden text-white bg-neutral-900">
      <div className="relative flex items-center p-6">
        <Link to="/homepage" className="absolute">
          <Icon icon="material-symbols:arrow-back-ios-rounded" color="white" className="text-2xl" />
        </Link>
        <h1 className="flex-1 text-xl text-center">{name}</h1>
      </div>
      <div className="flex flex-col justify-center h-full">
        <div className="z-10 bg-neutral-800 h-3/6">
          <div className="flex flex-col items-center justify-center p-6">
            <img src={under_construction} alt="under_construction" className="" />
          </div>
        </div>
        <div className="relative flex flex-col items-center gap-2 mt-12 h-3/6">
          <img src={alert} alt="alert" className="w-10" />
          <h1 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-fuchsia-600">
            Ups! Lo sentimos
          </h1>
          <p className="w-3/4 text-xl text-center">
            Estamos trabajando en esta sección, muy pronto estará disponible
          </p>
          <div className="absolute bottom-20 -right-44">
            <img src={icon} alt="icon" className="w-80 opacity-[.01] grayscale" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default UnderConstruction;
