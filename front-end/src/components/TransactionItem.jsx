import { Icon } from "@iconify/react";

const TransactionItem = ({ type, amount, name }) => {
  return (
    <div className="flex items-center justify-between p-4 ">
      <div className="flex items-center gap-x-4">
        <Icon
          icon="mdi:user-circle-outline"
          color="white"
          className="text-4xl"
        />
        <div>
          <p className="text-lg font-semibold">
            {type.charAt(0).toUpperCase() + type.slice(1)}
          </p>
          <p className="text-sm text-gray-400">{name}</p>
        </div>
      </div>
      <div className="flex items-center gap-x-2">
        <p className="text-lg font-semibold">
          {type === "transferencia" ? "-" : type === "retiro" ? "-" : "+"} $
          {amount}
        </p>
      </div>
    </div>
  );
};

export default TransactionItem;
