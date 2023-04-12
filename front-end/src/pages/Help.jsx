import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";
import HelpOptions from "../components/HelpOptions";

const Help = () => {
  return (
    <div className="h-screen text-white bg-neutral-900">
      <div className="flex items-center p-6">
        <Link to="/homepage">
          <Icon
            icon="material-symbols:arrow-back-ios-rounded"
            color="white"
            className="text-2xl"
          />
        </Link>
        <h1 className="flex-1 text-xl text-center">Ayuda</h1>
      </div>
      <h1 className="p-2 mx-6">¿Con que podemos ayudarte?</h1>
      <div className="flex items-center gap-3 p-2 mx-6 bg-neutral-800">
        <Icon icon="uil:search" color="white" className="text-2xl" />
        <input
          type="text"
          placeholder="Buscar en Ayuda"
          className="flex-1 px-2 text-white bg-transparent outline-none"
        />
      </div>
      <div className="flex flex-col gap-3 mx-6 mt-6">
        <HelpOptions
          icon="ph:user"
          title="Tu perfil"
          subTitle="Datos y problemas para ingresar"
        />
        <HelpOptions
          icon="uil:money-insert"
          title="Cuenta"
          subTitle="Ingresos, transferencias y extracciones"
        />
        <HelpOptions
          icon="uil:transaction"
          title="Pagos"
          subTitle="Compras, pagos y suscripciones"
        />
        <HelpOptions
          icon="uil:lock-alt"
          title="Seguridad"
          subTitle="Privacidad, robos o pérdidas"
        />
        <h1 className="mt-4">¿Necesitas ayuda personalizada?</h1>
        <HelpOptions
          icon="simple-line-icons:earphones"
          title="Atención al cliente"
          subTitle="Contáctanos para una mejor atención"
        />
      </div>
    </div>
  );
};

export default Help;
