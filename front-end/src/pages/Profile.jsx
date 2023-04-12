import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";

const Profile = () => {
  const profileInfo = {
    name: "Juan",
    lastName: "Garcia",
  };
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
        <h1 className="flex-1 text-xl text-center">Perfil</h1>
      </div>
      <div className="flex flex-col items-center gap-5">
        <img
          src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
          alt="UserImg"
          className="w-32 h-32 rounded-full"
        />
        <h3 className="text-2xl font-semibold">
          {profileInfo.name} {profileInfo.lastName}
        </h3>
      </div>
    </div>
  );
};

export default Profile;
