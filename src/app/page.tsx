import Link from "next/link";
import React from "react";

const Page = () => {
  return (
    <div className="min-h-screen bg-gray-900 flex flex-col items-center justify-center px-4">
      <div className="bg-gray-800 shadow-2xl rounded-xl p-8 max-w-lg w-full text-center transform transition duration-300 hover:scale-105">
        <h1 className="text-3xl font-extrabold text-white mb-6">
          Data Fetching Assignment
        </h1>
        <p className="text-gray-300 mb-8 leading-relaxed">
          Learn about different data fetching techniques for{" "}
          <span className="font-semibold text-blue-400">Client Side</span> and{" "}
          <span className="font-semibold text-purple-400">Server Side</span>.
        </p>
        <div className="flex flex-col md:flex-row gap-6 justify-center mb-6">
          <Link
            href="/server"
            className="w-full md:w-auto bg-blue-500 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-blue-600 focus:ring focus:ring-blue-300 focus:outline-none transition duration-300"
          >
            Products <span className="font-semibold">(Server Side)</span>
          </Link>
          <Link
            href="/client"
            className="w-full md:w-auto bg-purple-500 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-purple-600 focus:ring focus:ring-purple-300 focus:outline-none transition duration-300"
          >
            Recipes <span className="font-semibold">(Client Side)</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Page;
