import React from "react";
import { Link } from "react-router-dom";
import icon from "../assets/icon.svg";

const LandingPage = () => {
  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen gap-10 p-6 bg-neutral-800">
      <div className="w-[152px] h-[152px]  rounded-full">
        <img src={icon} alt="icon" className="w-full h-full" />
      </div>
      <div className="text-center">
        <p className="p-3 text-xl font-semibold text-white">¡Te damos la bienvenida!</p>
        <p className="text-sm text-slate-300">
          Inicia sesión o crea una cuenta para comenzar a administrar tu dinero.
        </p>
      </div>
      <div className="flex flex-col w-full gap-6">
        <Link
          to="/login"
          className="flex items-center justify-center rounded h-14 bg-gradient-to-r from-blue-600 to-fuchsia-600"
        >
          <button className="text-sm font-semibold text-white">Inicia sesión</button>
        </Link>
        <Link
          className="flex items-center justify-center h-14 rounded bg-gradient-to-r from-blue-600 to-fuchsia-600 p-0.5"
          to="/register"
        >
          <button className="w-full h-full p-4 text bg-neutral-800">
            <h1 className="text-transparent bg-gradient-to-r from-blue-400 to-fuchsia-600 bg-clip-text">
              Crea tu cuenta
            </h1>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default LandingPage;
