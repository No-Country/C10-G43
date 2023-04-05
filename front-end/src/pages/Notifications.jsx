import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";

const Notifications = () => {
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
        <h1 className="flex-1 text-xl text-center">Notificaciones</h1>
      </div>
    </div>
  );
};

export default Notifications;
