import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";

const ContactItem = ({ data }) => {
  const { firstName, lastName, userId } = data;
  return (
    <Link
      className="flex items-center w-full gap-4 p-2 bg-neutral-800"
      to={`/transfers/email/${userId}`}
    >
      <div className="flex items-center justify-center w-12 h-12 rounded-full bg-neutral-700">
        <Icon icon="uil:user" color="white" className="text-2xl" />
      </div>
      <div className="flex flex-col">
        <h1 className="text-xl">
          {firstName} {lastName}
        </h1>
      </div>
    </Link>
  );
};

export default ContactItem;
