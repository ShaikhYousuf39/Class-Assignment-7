import React from "react";
import Link from "next/link";
import Image from "next/image";

interface IProduct {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

const Server = async () => {
  const response = await fetch("https://fakestoreapi.com/products");
  const parsedResponse: IProduct[] = await response.json();

  console.log("products >>>", parsedResponse);

  return (
    <>
      <div className=" text-white">
        <div className="flex justify-center items-center font-bold text-5xl my-5  text-white">
          <h1>Products</h1>
        </div>
        <div className="p-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 ">
          {parsedResponse.map((pro) => (
            <div
              key={pro.id}
              className="border border-gray-700 rounded-sm overflow-hidden shadow-lg bg-gray-800 transform transition-transform duration-300 hover:scale-105"
            >
              <Link href={`/products/${pro.id}`}>
                <Image
                  src={pro.image}
                  alt={pro.title}
                  className="w-full h-auto object-cover"
                  width={500}
                  height={400}
                  priority
                />
              </Link>

              <div className="p-5 flex flex-col gap-3">
                <h2 className="text-xl font-bold text-gray-100">{pro.title}</h2>
                <p className="text-gray-300">{pro.description}</p>
                <p className="text-lg font-semibold text-gray-100">
                  Price: ${pro.price}
                </p>
                <p className="text-gray-300">
                  <strong>Category:</strong> {pro.category}
                </p>
                <p className="text-gray-300">
                  <strong>Rating:</strong> {pro.rating.rate} ⭐ (
                  {pro.rating.count} reviews)
                </p>
                <button className="mt-3 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300">
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Server;
