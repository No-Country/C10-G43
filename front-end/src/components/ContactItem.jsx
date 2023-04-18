import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";

const ContactItem = ({ name, type, id }) => {
  return (
    <Link
      className="flex items-center w-full gap-4 p-2 bg-neutral-800"
      to={`/transfers/email/${id}`}
    >
      <div className="flex items-center justify-center w-12 h-12 rounded-full bg-neutral-700">
        <Icon icon="uil:user" color="white" className="text-2xl" />
      </div>
      <div className="flex flex-col">
        <h1 className="text-xl">{name}</h1>
        <h1 className="text-xs text-neutral-400">{type}</h1>
      </div>
    </Link>
  );
};

export default ContactItem;
