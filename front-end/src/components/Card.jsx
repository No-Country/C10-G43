import { Icon } from "@iconify/react";

const Card = () => {
  return (
    <div className="relative flex flex-col items-center justify-center w-full h-56 p-4 bg-neutral-800 rounded-xl shadow-card">
      <div className="absolute flex items-center gap-4 left-4 top-4">
        <Icon icon="logos:mastercard" className="text-3xl" />
        <h1 className="text-2xl">Mastercard</h1>
      </div>
      <div className="absolute flex flex-col w-full gap-2 bottom-4 left-4">
        <div>
          <h1>Juan Alberto </h1>
          <h1 className="text-xl">**** **** **** 1234</h1>
        </div>
        <div>
          <h1>Valido hasta</h1>
          <h1 className="text-xl">12/24</h1>
        </div>
      </div>
    </div>
  );
};

export default Card;
