import React from "react";
import "./Board.css"; // Assuming you have a CSS file for styling
import NavBar from "../../components/NavBar/NavBar";

const Board = () => {
  return (
    <>
      <NavBar />
      <>
        <div
          className="relative flex size-full min-h-screen flex-col bg-[#FFFFFF] group/design-root overflow-x-hidden"
          style={{ fontFamily: 'Epilogue, "Noto Sans", sans-serif' }}
        >
          <div className="header-container">
            <h1 className="text-3xl font-bold mb-6 text-center">
              Recipe Board
            </h1>
          </div>
          <div className="px-40 flex flex-1 justify-center py-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-[1150px]">
              {[
                "Recipe 1",
                "Recipe 2",
                "Recipe 3",
                "Recipe 4",
                "Recipe 5",
                "Recipe 6",
              ].map((recipe, index) => (
                <div
                  key={index}
                  className="p-4 border rounded-lg shadow-md hover:shadow-lg transition-shadow bg-white"
                >
                  <h2 className="text-xl font-semibold mb-2">{recipe}</h2>
                  <p className="text-gray-600">
                    A short description of the recipe.
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </>
    </>
  );
};

export default Board;
