import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";

const Menu = ({ hidden, onClick }) => {
  return (
    <div
      className={
        hidden
          ? "hidden"
          : "flex flex-col z-10 fixed top-0 left-0 w-full h-full bg-neutral-900 text-white"
      }
    >
      <div className="flex p-6">
        <button onClick={onClick}>
          <Icon icon="ic:round-close" color="white" className="text-3xl" />
        </button>
      </div>
      <ul className="flex flex-col gap-8 px-6 text-xl">
        <div className="flex flex-col gap-8 pb-4 text-xl border-b-2 border-neutral-700">
          <li>
            <Link to="/homepage" className="flex items-center gap-5">
              <Icon
                icon="mdi:home-outline"
                color="white"
                className="text-3xl"
              />
              Inicio
            </Link>
          </li>
          <li>
            <Link to="/profile" className="flex items-center gap-5">
              <Icon icon="ph:user" color="white" className="text-3xl" />
              Perfil
            </Link>
          </li>
        </div>
        <div className="flex flex-col gap-8 pb-4 text-xl border-b-2 border-neutral-700">
          <li>
            <Link to="/balance" className="flex items-center gap-5">
              <Icon icon="uil:wallet" color="white" className="text-3xl" />
              Tu dinero
            </Link>
          </li>
          <li>
            <Link to="/cards" className="flex items-center gap-5">
              <Icon
                icon="mdi:credit-card-outline"
                color="white"
                className="text-3xl"
              />
              Tarjetas
            </Link>
          </li>
          <li>
            <Link to="/transfers" className="flex items-center gap-5">
              <Icon icon="uil:transaction" color="white" className="text-3xl" />
              Transferencias
            </Link>
          </li>
          <li>
            <Link to="/activity" className="flex items-center gap-5">
              <Icon
                icon="material-symbols:insert-chart-outline-rounded"
                hFlip={true}
                color="white"
                className="text-3xl"
              />
              Actividad
            </Link>
          </li>
        </div>
        <div className="flex flex-col gap-8 pb-4 text-xl border-b-2 border-neutral-700">
          <li>
            <Link to="/help" className="flex items-center gap-5">
              <Icon
                icon="tabler:exclamation-circle"
                vFlip={true}
                color="white"
                className="text-3xl"
              />
              Ayuda
            </Link>
          </li>
          <li>
            <Link to="/signoff" className="flex items-center gap-5">
              <Icon
                icon="fluent:door-arrow-right-16-regular"
                color="white"
                className="text-3xl"
              />
              Cerrar sesion
            </Link>
          </li>
        </div>
      </ul>
    </div>
  );
};

export default Menu;
