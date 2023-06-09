import { Icon } from "@iconify/react";
import { Link, useNavigate } from "react-router-dom";
import Notiflix from "notiflix";

const Menu = ({ hidden, onClick }) => {
  const navigate = useNavigate();
  Notiflix.Confirm.init({
    backgroundColor: "#171717",
    titleColor: "#ffffff",
    messageColor: "#ffffff",
    okButtonBackground: "#ff0000",
  });
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
          <Icon icon="ic:round-close" color="#7e22ce" className="text-3xl" />
        </button>
      </div>
      <ul className="flex flex-col gap-8 px-6 text-xl">
        <div className="flex flex-col gap-8 pb-4 text-xl border-b-2 border-neutral-700">
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
              Tus gastos
            </Link>
          </li>
          <li>
            <Link to="/cards" className="flex items-center gap-5">
              <Icon icon="mdi:credit-card-outline" color="white" className="text-3xl" />
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
            <button
              onClick={() =>
                Notiflix.Confirm.show(
                  "Cerrar sesion",
                  "¿Estas seguro que deseas cerrar sesion?",
                  "Si",
                  "No",
                  () => {
                    localStorage.clear();
                    navigate("/login");
                  }
                )
              }
              className="flex items-center gap-5"
            >
              <Icon icon="fluent:door-arrow-right-16-regular" color="white" className="text-3xl" />
              Cerrar sesion
            </button>
          </li>
        </div>
      </ul>
    </div>
  );
};

export default Menu;
