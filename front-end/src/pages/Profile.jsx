import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";
import { getUserInfo } from "../utils/api";
import { useEffect, useState } from "react";
//import ButtonOptions from "../components/ButtonOptions";

const Profile = () => {
  const [userName, setUserName] = useState();
  const [userId, setUserId] = useState();
  useEffect(() => {
    const fetchUser = async () => {
      const user = await getUserInfo();
      setUserName(user.firstName + " " + user.lastName);
      setUserId(user._id);
    };
    fetchUser();
  }, []);
  return (
    <div className="min-h-screen text-white bg-neutral-900">
      <div className="relative flex items-center p-6 ">
        <Link to="/homepage" className="absolute">
          <Icon icon="material-symbols:arrow-back-ios-rounded" color="white" className="text-2xl" />
        </Link>
        <h1 className="flex-1 text-xl text-center">Perfil</h1>
      </div>
      <div className="flex flex-col items-center gap-1">
        <img
          src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
          alt="UserImg"
          className="w-32 h-32 rounded-full"
        />
        <h3 className="mt-4 text-2xl font-semibold">{userName}</h3>
        <h3 className="mt-8 text-lg font-semibold">Mi ID:</h3>
        <h3 className="text-lg font-semibold">{userId}</h3>
      </div>
      {/* <div className="flex flex-col gap-3 mx-6 mt-8">
        <ButtonOptions icon={"ph:user"} title={"ID y Alias"} />
        <ButtonOptions
          icon={"ph:user"}
          title={"Datos de validación"}
          subTitle={"Necesarios para validar tu cuenta."}
        />
        <ButtonOptions
          icon={"ph:user"}
          title={"Datos personales"}
          subTitle={"Otros datos de interés."}
        />
        <ButtonOptions
          icon={"ph:user"}
          title={"Seguridad de tu cuenta"}
          subTitle={"Configuración de seguridad."}
        />
        <ButtonOptions
          icon={"ph:user"}
          title={"Privacidad"}
          subTitle={"Preferencias y control de tus datos."}
        />
      </div> */}
    </div>
  );
};

export default Profile;
