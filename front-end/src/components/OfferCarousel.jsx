import React from "react";
import { Icon } from "@iconify/react";

const OfferCarousel = () => {
  return (
    <div className="mt-6">
      <p className="text-lg font-medium">Descuentos y promociones</p>
      <div className="flex flex-col gap-4 mt-4">
        <div className="flex items-center gap-4 p-4 bg-neutral-800">
          <Icon
            icon="mdi:ticket-percent-outline"
            color="white"
            className="text-3xl"
          />
          <div className="flex flex-col gap-2">
            <p className="text-lg font-semibold">¡Descuento del 50%!</p>
            <p className="text-sm">En tu próxima compra en el supermercado.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OfferCarousel;
