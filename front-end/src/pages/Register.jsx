import React from "react";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";

const Register = () => {
  return (
    <div className="w-screen h-screen bg-neutral-800">
      <Link to="/" className="w-full h-[5%] flex items-center backdrop-blur pl-6">
        <Icon icon="ic:outline-navigate-next" color="#f1f1f1" width="24" height="24" hFlip={true} />
      </Link>
      <div className="w-screen h-[95%] flex flex-col justify-center items-center gap-32 p-6">
        <div className="text-center">
          <p className="p-3 text-xl font-semibold text-white">Crea una nueva cuenta</p>
          <p className="text-sm text-slate-300">
            Para hacerlo necesitamos validar tus datos, solo te tomará unos minutos.
          </p>
        </div>
        <div className="flex flex-col w-full gap-6">
          <Link
            to="/data-validation"
            className="flex items-center justify-center rounded h-14 bg-gradient-to-r from-blue-600 to-fuchsia-600"
          >
            <button className="text-base font-semibold text-white">Crear cuenta personal</button>
          </Link>
          <Link
            className="flex items-center justify-center h-14 rounded bg-gradient-to-r from-blue-600 to-fuchsia-600 p-0.5"
            to="/data-validation"
          >
            <button className="w-full h-full p-4 text bg-neutral-800">
              <h1 className="text-transparent bg-gradient-to-r from-blue-400 to-fuchsia-600 bg-clip-text">
                Crear cuenta de negocios
              </h1>
            </button>
          </Link>
          <p className="pt-5 text-sm text-slate-300">
            ¿Ya te registraste?
            <Link to="/login" className="font-bold text-white">
              {" "}
              Inicia sesión.
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
