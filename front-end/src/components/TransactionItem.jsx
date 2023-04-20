import { Icon } from "@iconify/react";

const TransactionItem = ({
  amount,
  receiverName,
  receiverLastName,
  senderName,
  senderLastName,
}) => {
  return (
    <div className="flex items-center justify-between p-4 ">
      <div className="flex items-center gap-x-4">
        <Icon
          icon="mdi:user-circle-outline"
          color="white"
          className="text-4xl"
        />
        <div>
          <p className="text-lg text-gray-300">
            De {senderName} {senderLastName}
          </p>
          <p className="text-sm">
            A {receiverName} {receiverLastName}
          </p>
        </div>
      </div>
      <div className="flex items-center gap-x-2">
        <p className="text-lg font-semibold">${amount}</p>
      </div>
    </div>
  );
};

export default TransactionItem;
