import React from 'react';
import { FaUtensils, FaShoppingCart } from 'react-icons/fa';

const Loader = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-[#121212] bg-opacity-80 z-50">
      <div className="flex flex-col items-center space-y-6">
        <div className="w-16 h-16 border-4 border-t-4 border-[#4e8bdb] border-solid rounded-full animate-spin"></div>
        <div className="text-[#4e8bdb] text-xl font-semibold animate-pulse">Loading...</div>
        
        <div className="text-[#4e8bdb] text-3xl">
          <FaUtensils className="mb-2" />
          <FaShoppingCart className="mb-2" />
        </div>

        <div className="text-[#4e8bdb] text-md font-medium">
          Please wait while we fetch your delicious recipes!
        </div>
      </div>
    </div>
  );
};

export default Loader;
