import React from "react";

const Users = () => {
  return (
    <>  
      <div
        className="relative flex size-full flex-col bg-[#FFFFFF] group/design-root overflow-x-hidden"
        style={{ fontFamily: '"Plus Jakarta Sans", "Noto Sans", sans-serif' }}
      >
        <div className="px-40 flex flex-1 justify-center py-5">
          <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
            <div className="flex flex-wrap justify-between gap-3 p-4">
              <p className="text-[#1C160C] text-4xl font-black leading-tight tracking-[-0.033em] min-w-72">
                Users
              </p>
            </div>
            <div className="px-4 py-3">
              <label className="flex flex-col min-w-40 h-12 w-full">
                <div className="flex w-full flex-1 items-stretch rounded-xl h-full">
                  <div
                    className="text-[#A18249] flex border-none bg-[#F4EFE6] items-center justify-center pl-4 rounded-l-xl border-r-0"
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
                    placeholder="Search users"
                    className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#1C160C] focus:outline-0 focus:ring-0 border-none bg-[#F4EFE6] focus:border-none h-full placeholder:text-[#A18249] px-4 rounded-l-none border-l-0 pl-2 text-base font-normal leading-normal"
                    defaultValue=""
                  />
                </div>
              </label>
            </div>
            <div className="px-4 py-3 @container">
              <div className="flex overflow-hidden rounded-xl border border-[#E9DFCE] bg-[#FFFFFF]">
                <table className="flex-1">
                  <thead>
                    <tr className="bg-[#FFFFFF]">
                      <th className="table-83961380-e8dd-47a9-889a-20bb851d7580-column-120 px-4 py-3 text-left text-[#1C160C] w-[400px] text-sm font-medium leading-normal">
                        User
                      </th>
                      <th className="table-83961380-e8dd-47a9-889a-20bb851d7580-column-240 px-4 py-3 text-left text-[#1C160C] w-[400px] text-sm font-medium leading-normal">
                        Recipes
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-t border-t-[#E9DFCE]">
                      <td className="table-83961380-e8dd-47a9-889a-20bb851d7580-column-120 h-[72px] px-4 py-2 w-[400px] text-[#1C160C] text-sm font-normal leading-normal">
                        julio
                      </td>
                      <td className="table-83961380-e8dd-47a9-889a-20bb851d7580-column-240 h-[72px] px-4 py-2 w-[400px] text-[#A18249] text-sm font-normal leading-normal">
                        12
                      </td>
                    </tr>
                    <tr className="border-t border-t-[#E9DFCE]">
                      <td className="table-83961380-e8dd-47a9-889a-20bb851d7580-column-120 h-[72px] px-4 py-2 w-[400px] text-[#1C160C] text-sm font-normal leading-normal">
                        michael
                      </td>
                      <td className="table-83961380-e8dd-47a9-889a-20bb851d7580-column-240 h-[72px] px-4 py-2 w-[400px] text-[#A18249] text-sm font-normal leading-normal">
                        3
                      </td>
                    </tr>
                    <tr className="border-t border-t-[#E9DFCE]">
                      <td className="table-83961380-e8dd-47a9-889a-20bb851d7580-column-120 h-[72px] px-4 py-2 w-[400px] text-[#1C160C] text-sm font-normal leading-normal">
                        luna
                      </td>
                      <td className="table-83961380-e8dd-47a9-889a-20bb851d7580-column-240 h-[72px] px-4 py-2 w-[400px] text-[#A18249] text-sm font-normal leading-normal">
                        12
                      </td>
                    </tr>
                    <tr className="border-t border-t-[#E9DFCE]">
                      <td className="table-83961380-e8dd-47a9-889a-20bb851d7580-column-120 h-[72px] px-4 py-2 w-[400px] text-[#1C160C] text-sm font-normal leading-normal">
                        angel
                      </td>
                      <td className="table-83961380-e8dd-47a9-889a-20bb851d7580-column-240 h-[72px] px-4 py-2 w-[400px] text-[#A18249] text-sm font-normal leading-normal">
                        14
                      </td>
                    </tr>
                    <tr className="border-t border-t-[#E9DFCE]">
                      <td className="table-83961380-e8dd-47a9-889a-20bb851d7580-column-120 h-[72px] px-4 py-2 w-[400px] text-[#1C160C] text-sm font-normal leading-normal">
                        ali
                      </td>
                      <td className="table-83961380-e8dd-47a9-889a-20bb851d7580-column-240 h-[72px] px-4 py-2 w-[400px] text-[#A18249] text-sm font-normal leading-normal">
                        2
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <style
                dangerouslySetInnerHTML={{
                  __html:
                    "\n                          @container(max-width:120px){.table-83961380-e8dd-47a9-889a-20bb851d7580-column-120{display: none;}}\n                @container(max-width:240px){.table-83961380-e8dd-47a9-889a-20bb851d7580-column-240{display: none;}}\n                @container(max-width:360px){.table-83961380-e8dd-47a9-889a-20bb851d7580-column-360{display: none;}}\n                @container(max-width:480px){.table-83961380-e8dd-47a9-889a-20bb851d7580-column-480{display: none;}}\n                @container(max-width:600px){.table-83961380-e8dd-47a9-889a-20bb851d7580-column-600{display: none;}}\n              ",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Users;
