const Purchases = () => {
  return (
    <>
      <header className="h-14 border-b bg-white flex items-center px-6 font-semibold">
        Purchases
      </header>

      <div className="flex-1 flex items-center justify-center h-[calc(100vh-56px)]">
        <div className="text-center">
          <div className="w-20 h-20 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center">
            🛒
          </div>
          <h3 className="font-semibold">No products found!</h3>
          <p className="text-sm text-gray-500">
            Switch to creators from whom you've bought products
          </p>
        </div>
      </div>
    </>
  );
};

export default Purchases;
