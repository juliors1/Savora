// --- Search is the home page ---
//import React, { useEffect, useState } from "react";
//import axios from "axios";
import Spinner from "../../components/Spinner";
import { Link } from "react-router-dom";
import { AiOutlineEdit } from "react-icons/ai";
import { BsInfoCircle } from "react-icons/bs";
import { MdOutlineAddBox, MdOutlineDelete } from "react-icons/md";
import NavBar from "../../components/NavBar/NavBar";

const Search = () => {
//   const [recipes, setRecipes] = useState([]);
//   const [loading, setLoading] = useState(false);

//   useEffect(() => {
//     setLoading(true);
//     axios
//       .get("http://localhost:5001/recipes")
//       .then((response) => {
//         setRecipes(response.data.data);
//         setLoading(false);
//       })
//       .catch((error) => {
//         console.error("Error fetching recipes:", error);
//         setLoading(false);
//       });
//   }, []);
  return (
    <>
      <NavBar />
      <>
        <div className="px-40 flex flex-1 justify-center py-5">
          <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
            <div className="px-4 py-3">
              <label className="flex flex-col min-w-40 h-12 w-full">
                <div className="flex w-full flex-1 items-stretch rounded-xl h-full">
                  <div
                    className="text-[#9a6e4c] flex border-none bg-[#f3ece7] items-center justify-center pl-4 rounded-l-xl border-r-0"
                    data-icon="MagnifyingGlass"
                    data-size="24px"
                    data-weight="regular"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24px"
                      height="24px"
                      fill="currentColor"
                      viewBox="0 0 256 256"
                    >
                      <path d="M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z" />
                    </svg>
                  </div>
                  <input
                    placeholder="Find a recipe"
                    className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#1b130d] focus:outline-0 focus:ring-0 border-none bg-[#f3ece7] focus:border-none h-full placeholder:text-[#9a6e4c] px-4 rounded-l-none border-l-0 pl-2 text-base font-normal leading-normal"
                    defaultValue=""
                  />
                </div>
              </label>
            </div>
            <h2 className="text-[#1b130d] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
              Popular Recipes
            </h2>
            <div className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3 p-4">
              <div className="flex flex-col gap-3 pb-3">
                <div
                  className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl"
                  style={{
                    backgroundImage:
                      'url("https://cdn.usegalileo.ai/sdxl10/df8dbebc-f9bc-440a-a982-1792277f803a.png")',
                  }}
                />
                <div>
                  <p className="text-[#1b130d] text-base font-medium leading-normal">
                    Easy Chicken Alfredo
                  </p>
                  <p className="text-[#9a6e4c] text-sm font-normal leading-normal">
                    30 min · 4.8 ★ (1.2k) · 3.5M saves
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-3 pb-3">
                <div
                  className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl"
                  style={{
                    backgroundImage:
                      'url("https://cdn.usegalileo.ai/sdxl10/9026df6d-36cf-44a8-b70e-d96cd0863d92.png")',
                  }}
                />
                <div>
                  <p className="text-[#1b130d] text-base font-medium leading-normal">
                    Shrimp Scampi Pasta
                  </p>
                  <p className="text-[#9a6e4c] text-sm font-normal leading-normal">
                    25 min · 4.7 ★ (1k) · 3M saves
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-3 pb-3">
                <div
                  className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl"
                  style={{
                    backgroundImage:
                      'url("https://cdn.usegalileo.ai/sdxl10/498fc60a-522f-407b-8ad2-8e35849d4e0d.png")',
                  }}
                />
                <div>
                  <p className="text-[#1b130d] text-base font-medium leading-normal">
                    Classic Margarita Pizza
                  </p>
                  <p className="text-[#9a6e4c] text-sm font-normal leading-normal">
                    20 min · 4.6 ★ (900) · 2.5M saves
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-3 pb-3">
                <div
                  className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl"
                  style={{
                    backgroundImage:
                      'url("https://cdn.usegalileo.ai/sdxl10/009b2eb6-d014-4e73-bdee-f05f0b475247.png")',
                  }}
                />
                <div>
                  <p className="text-[#1b130d] text-base font-medium leading-normal">
                    Beef &amp; Broccoli Stir-Fry
                  </p>
                  <p className="text-[#9a6e4c] text-sm font-normal leading-normal">
                    35 min · 4.9 ★ (1.5k) · 4M saves
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-3 pb-3">
                <div
                  className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl"
                  style={{
                    backgroundImage:
                      'url("https://cdn.usegalileo.ai/sdxl10/f13ef344-7fc6-4c6c-bbb6-893c1a3f3b03.png")',
                  }}
                />
                <div>
                  <p className="text-[#1b130d] text-base font-medium leading-normal">
                    Vegetable Lo Mein
                  </p>
                  <p className="text-[#9a6e4c] text-sm font-normal leading-normal">
                    40 min · 4.5 ★ (800) · 2M saves
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    </>
  );
};

export default Search;
