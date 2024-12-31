"use client";
import React, { useEffect, useState } from "react";
import Loader from "../components/Loader";
import Image from "next/image";

interface IRecipe {
  id: number;
  name: string;
  ingredients: string[];
  instructions: string[];
  prepTimeMinutes: number;
  cookTimeMinutes: number;
  servings: string;
  difficulty: string;
  cuisine: string;
  caloriesPerServing: number;
  tags: string[];
  image: string;
  rating: number;
  reviewCount: number;
  mealType: string[];
}

const Clientside = () => {
  const [data, setData] = useState<IRecipe[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://dummyjson.com/recipes");
        if (!response.ok) {
          throw new Error("Failed to fetch recipes");
        }
        const recipe = await response.json();
        setData(recipe.recipes || []);
      } catch (error) {
        setError("Failed to load recipes");
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="min-h-screen bg-[#121212] text-white">
      {loading ? (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-50">
          <Loader />
        </div>
      ) : error ? (
        <div className="text-center text-red-500 mt-10">{error}</div>
      ) : (
        <>
          <div
            className="flex justify-center items-center font-bold text-4xl my-5 text-[#4e8bdb]"
            data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="1500"
          >
            <h1>Recipes</h1>
          </div>
          <div
            className="p-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 bg-[#121212]"
            data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="1500"
          >
            {data.map((recipe) => (
              <div
                key={recipe.id}
                className="bg-[#1c1c1c] shadow-lg overflow-hidden transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-xl"
              >
                <Image
                  src={recipe.image}
                  alt={recipe.name}
                  className="w-full h-60 object-cover transition-all duration-300 transform hover:scale-105"
                  width={500}
                  height={400}
                  unoptimized={true}
                />

                <div className="p-6 flex flex-col gap-4">
                  <h2 className="text-xl font-semibold text-[#4e8bdb]">{recipe.name}</h2>
                  <p className="text-gray-400 text-sm">
                    {recipe.instructions.slice(0, 2).join(", ")}...
                  </p>

                  <div className="flex flex-col items-center">
                    <h3 className="font-semibold mt-3 text-xl py-3 text-[#4e8bdb]">
                      Ingredients:
                    </h3>
                    <ul className="list-disc list-inside text-gray-300 text-sm text-center">
                      {recipe.ingredients.map((ingredient, index) => (
                        <li key={index}>{ingredient}</li>
                      ))}
                    </ul>
                  </div>
                  <button className="mt-4 bg-[#4e8bdb] text-white px-4 py-2 rounded-lg hover:bg-[#3478b7] transition duration-300 transform hover:scale-105">
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Clientside;
