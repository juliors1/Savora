//import React, { useEffect, useState } from "react";
//import axios from "axios";
import Spinner from "../../components/Spinner";
import { Link } from "react-router-dom";
// import { AiOutlineEdit } from "react-icons/ai";
// import { BsInfoCircle } from "react-icons/bs";
// import { MdOutlineAddBox, MdOutlineDelete } from "react-icons/md";
import NavBar from "../../components/NavBar/NavBar";

const CreateRecipe = () => {
  return (
    <>
      <NavBar />
      <div
        className="relative flex size-full flex-col bg-[#fcfaf8] group/design-root overflow-x-hidden"
        style={{ fontFamily: 'Epilogue, "Noto Sans", sans-serif' }}
      >
        <div className="layout-container flex grow flex-col">
          <header className="flex items-center justify-between whitespace-nowrap border-solid border-b-[#f3ece7] px-10 py-3">
            <div className="flex items-center gap-4 text-[#1b130d]">
              <div className="size-6">
                <svg
                  viewBox="0 0 48 48"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M44 11.2727C44 14.0109 39.8386 16.3957 33.69 17.6364C39.8386 18.877 44 21.2618 44 24C44 26.7382 39.8386 29.123 33.69 30.3636C39.8386 31.6043 44 33.9891 44 36.7273C44 40.7439 35.0457 44 24 44C12.9543 44 4 40.7439 4 36.7273C4 33.9891 8.16144 31.6043 14.31 30.3636C8.16144 29.123 4 26.7382 4 24C4 21.2618 8.16144 18.877 14.31 17.6364C8.16144 16.3957 4 14.0109 4 11.2727C4 7.25611 12.9543 4 24 4C35.0457 4 44 7.25611 44 11.2727Z"
                    fill="currentColor"
                  />
                </svg>
              </div>
            </div>

            <h2 className="text-[#1b130d] text-lg font-bold leading-tight tracking-[-0.015em]">
              Create Your Own 🧑‍🍳
            </h2>

            <div className="flex gap-2">
              <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-4 bg-[#F2A37D] text-[#1b130d] text-sm font-bold leading-normal tracking-[0.015em]">
                <span className="truncate">Save</span>
              </button>
              <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-4 bg-[#f3ece7] text-[#1b130d] text-sm font-bold leading-normal tracking-[0.015em]">
                <span className="truncate">Cancel</span>
              </button>
            </div>
          </header>
          <div className="px-40 flex flex-1 justify-center py-5">
            <div className="layout-content-container flex flex-col w-[512px] max-w-[512px] py-5 max-w-[960px] flex-1">
              <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
                <label className="flex flex-col min-w-40 flex-1">
                  <p className="text-[#1b130d] text-base font-medium leading-normal pb-2">
                    Title
                  </p>
                  <input
                    placeholder="Enter recipe title"
                    className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#1b130d] focus:outline-0 focus:ring-0 border-none bg-[#f3ece7] focus:border-none h-14 placeholder:text-[#9a6e4c] p-4 text-base font-normal leading-normal"
                    defaultValue=""
                  />
                </label>
              </div>
              <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
                <label className="flex flex-col min-w-40 flex-1">
                  <p className="text-[#1b130d] text-base font-medium leading-normal pb-2">
                    Description
                  </p>
                  <textarea
                    placeholder="Tell us about this recipe"
                    className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#1b130d] focus:outline-0 focus:ring-0 border-none bg-[#f3ece7] focus:border-none min-h-36 placeholder:text-[#9a6e4c] p-4 text-base font-normal leading-normal"
                    defaultValue={""}
                  />
                </label>
              </div>
              <div className="flex gap-3 p-3 flex-wrap pr-4">
                <div className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-full bg-[#f3ece7] pl-4 pr-4">
                  <p className="text-[#1b130d] text-sm font-medium leading-normal">
                    Healthy
                  </p>
                </div>
                <div className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-full bg-[#f3ece7] pl-4 pr-4">
                  <p className="text-[#1b130d] text-sm font-medium leading-normal">
                    Vegan
                  </p>
                </div>
                <div className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-full bg-[#f3ece7] pl-4 pr-4">
                  <p className="text-[#1b130d] text-sm font-medium leading-normal">
                    Gluten-Free
                  </p>
                </div>
                <div className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-full bg-[#f3ece7] pl-4 pr-4">
                  <p className="text-[#1b130d] text-sm font-medium leading-normal">
                    Dessert
                  </p>
                </div>
                <div className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-full bg-[#f3ece7] pl-4 pr-4">
                  <p className="text-[#1b130d] text-sm font-medium leading-normal">
                    Quick
                  </p>
                </div>
              </div>
              <div className="flex gap-3 p-3 flex-wrap pr-4">
                <button className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-full bg-[#f3ece7] pl-4 pr-2">
                  <p className="text-[#1b130d] text-sm font-medium leading-normal">
                    Appetizer
                  </p>
                  <div
                    className="text-[#1b130d]"
                    data-icon="CaretDown"
                    data-size="20px"
                    data-weight="regular"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20px"
                      height="20px"
                      fill="currentColor"
                      viewBox="0 0 256 256"
                    >
                      <path d="M213.66,101.66l-80,80a8,8,0,0,1-11.32,0l-80-80A8,8,0,0,1,53.66,90.34L128,164.69l74.34-74.35a8,8,0,0,1,11.32,11.32Z" />
                    </svg>
                  </div>
                </button>
                <button className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-full bg-[#f3ece7] pl-4 pr-2">
                  <p className="text-[#1b130d] text-sm font-medium leading-normal">
                    Main Course
                  </p>
                  <div
                    className="text-[#1b130d]"
                    data-icon="CaretDown"
                    data-size="20px"
                    data-weight="regular"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20px"
                      height="20px"
                      fill="currentColor"
                      viewBox="0 0 256 256"
                    >
                      <path d="M213.66,101.66l-80,80a8,8,0,0,1-11.32,0l-80-80A8,8,0,0,1,53.66,90.34L128,164.69l74.34-74.35a8,8,0,0,1,11.32,11.32Z" />
                    </svg>
                  </div>
                </button>
                <button className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-full bg-[#f3ece7] pl-4 pr-2">
                  <p className="text-[#1b130d] text-sm font-medium leading-normal">
                    Dessert
                  </p>
                  <div
                    className="text-[#1b130d]"
                    data-icon="CaretDown"
                    data-size="20px"
                    data-weight="regular"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20px"
                      height="20px"
                      fill="currentColor"
                      viewBox="0 0 256 256"
                    >
                      <path d="M213.66,101.66l-80,80a8,8,0,0,1-11.32,0l-80-80A8,8,0,0,1,53.66,90.34L128,164.69l74.34-74.35a8,8,0,0,1,11.32,11.32Z" />
                    </svg>
                  </div>
                </button>
                <button className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-full bg-[#f3ece7] pl-4 pr-2">
                  <p className="text-[#1b130d] text-sm font-medium leading-normal">
                    Side Dish
                  </p>
                  <div
                    className="text-[#1b130d]"
                    data-icon="CaretDown"
                    data-size="20px"
                    data-weight="regular"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20px"
                      height="20px"
                      fill="currentColor"
                      viewBox="0 0 256 256"
                    >
                      <path d="M213.66,101.66l-80,80a8,8,0,0,1-11.32,0l-80-80A8,8,0,0,1,53.66,90.34L128,164.69l74.34-74.35a8,8,0,0,1,11.32,11.32Z" />
                    </svg>
                  </div>
                </button>
              </div>
              <div className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3 p-4">
                <div className="flex flex-col gap-3">
                  <div
                    className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl"
                    style={{
                      backgroundImage:
                        'url("https://cdn.usegalileo.ai/sdxl10/3a2d6e72-72bf-4e89-8d59-c0f54bab31a4.png")',
                    }}
                  />
                </div>
                <div className="flex flex-col gap-3">
                  <div
                    className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl"
                    style={{
                      backgroundImage:
                        'url("https://cdn.usegalileo.ai/sdxl10/cfc7bef1-3753-41aa-a463-bb37a0afd880.png")',
                    }}
                  />
                </div>
                <div className="flex flex-col gap-3">
                  <div
                    className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl"
                    style={{
                      backgroundImage:
                        'url("https://cdn.usegalileo.ai/sdxl10/f0f07be5-60e1-49cd-b29e-7e6584054210.png")',
                    }}
                  />
                </div>
                <div className="flex flex-col gap-3">
                  <div
                    className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl"
                    style={{
                      backgroundImage:
                        'url("https://cdn.usegalileo.ai/sdxl10/b4095502-b994-47c5-8dc8-c395854825cc.png")',
                    }}
                  />
                </div>
                <div className="flex flex-col gap-3">
                  <div
                    className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl"
                    style={{
                      backgroundImage:
                        'url("https://cdn.usegalileo.ai/sdxl10/41169deb-d292-41ff-b700-6cfd46f6ce10.png")',
                    }}
                  />
                </div>
                <div className="flex flex-col gap-3">
                  <div
                    className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl"
                    style={{
                      backgroundImage:
                        'url("https://cdn.usegalileo.ai/sdxl10/89ca3039-5824-4460-8f5e-a766a9b248b9.png")',
                    }}
                  />
                </div>
              </div>
              <h2 className="text-[#1b130d] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
                Ingredients
              </h2>
              <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
                <label className="flex flex-col min-w-40 flex-1">
                  <input
                    placeholder="Qty"
                    className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#1b130d] focus:outline-0 focus:ring-0 border-none bg-[#f3ece7] focus:border-none h-14 placeholder:text-[#9a6e4c] p-4 text-base font-normal leading-normal"
                    defaultValue=""
                  />
                </label>
                <label className="flex flex-col min-w-40 flex-1">
                  <input
                    placeholder="Ingredient"
                    className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#1b130d] focus:outline-0 focus:ring-0 border-none bg-[#f3ece7] focus:border-none h-14 placeholder:text-[#9a6e4c] p-4 text-base font-normal leading-normal"
                    defaultValue=""
                  />
                </label>
              </div>
              <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
                <label className="flex flex-col min-w-40 flex-1">
                  <input
                    placeholder="Qty"
                    className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#1b130d] focus:outline-0 focus:ring-0 border-none bg-[#f3ece7] focus:border-none h-14 placeholder:text-[#9a6e4c] p-4 text-base font-normal leading-normal"
                    defaultValue=""
                  />
                </label>
                <label className="flex flex-col min-w-40 flex-1">
                  <input
                    placeholder="Ingredient"
                    className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#1b130d] focus:outline-0 focus:ring-0 border-none bg-[#f3ece7] focus:border-none h-14 placeholder:text-[#9a6e4c] p-4 text-base font-normal leading-normal"
                    defaultValue=""
                  />
                </label>
              </div>
              <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
                <label className="flex flex-col min-w-40 flex-1">
                  <input
                    placeholder="Qty"
                    className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#1b130d] focus:outline-0 focus:ring-0 border-none bg-[#f3ece7] focus:border-none h-14 placeholder:text-[#9a6e4c] p-4 text-base font-normal leading-normal"
                    defaultValue=""
                  />
                </label>
                <label className="flex flex-col min-w-40 flex-1">
                  <input
                    placeholder="Ingredient"
                    className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#1b130d] focus:outline-0 focus:ring-0 border-none bg-[#f3ece7] focus:border-none h-14 placeholder:text-[#9a6e4c] p-4 text-base font-normal leading-normal"
                    defaultValue=""
                  />
                </label>
              </div>
              <div className="flex px-4 py-3 justify-end">
                <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-4 bg-[#f3ece7] text-[#1b130d] text-sm font-bold leading-normal tracking-[0.015em]">
                  <span className="truncate">Add Ingredient</span>
                </button>
              </div>
              <h2 className="text-[#1b130d] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
                Instructions
              </h2>
              <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
                <label className="flex flex-col min-w-40 flex-1">
                  <textarea
                    placeholder="Write a step-by-step guide for making your recipe. Be as detailed as you'd like."
                    className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#1b130d] focus:outline-0 focus:ring-0 border-none bg-[#f3ece7] focus:border-none min-h-36 placeholder:text-[#9a6e4c] p-4 text-base font-normal leading-normal"
                    defaultValue={""}
                  />
                </label>
              </div>
              <div className="flex px-4 py-3 justify-end">
                <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-4 bg-[#f3ece7] text-[#1b130d] text-sm font-bold leading-normal tracking-[0.015em]">
                  <span className="truncate">Add Step</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreateRecipe;
