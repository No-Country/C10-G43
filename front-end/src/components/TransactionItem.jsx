const TransactionItem = () => {
  return (
    <div className="flex items-center justify-between p-4 ">
      <div className="flex items-center gap-x-4">
        <i className="text-2xl fa-solid fa-user-circle"></i>
        <div>
          <p className="text-lg font-semibold">Transferencia</p>
          <p className="text-sm text-gray-500">A Pilar González</p>
        </div>
      </div>
      <div className="flex items-center gap-x-2">
        <p className="text-lg font-semibold">-$ 1.000,00</p>
      </div>
    </div>
  );
};

export default TransactionItem;
