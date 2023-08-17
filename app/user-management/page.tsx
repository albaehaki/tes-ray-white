"use client";
import React, { useState } from "react";
import {
  MagnifyingGlassCircleIcon,
  MagnifyingGlassIcon,
  UserPlusIcon,
  FunnelIcon,
  ChevronRightIcon,
  ChevronLeftIcon,
  ChevronDownIcon,
} from "@heroicons/react/24/outline";

// store
import useHandleStore from "@/store/handleStore";
import { dummyCategoryUser } from "@/store/dummyDaya";

// components
import FormPopUp from "@/components/formPopUp";
import SearchBox from "@/components/searchBox";
import MenuTable from "@/components/menuTable";
import TableLargeDisplay from "@/components/tableLargeDisplay";
import TableSmallDisplay from "@/components/tableSmallDisplay";
import Pagination from "@/components/pagination";

const App: React.FC = () => {
  const { isPopUpEditUser } = useHandleStore((state) => state);
  const handleToggles = useHandleStore((state) => state.handleToggles);
  return (
    <>
      <div className="flex pb-10 justify-end bg-gray-100">
        <button onClick={() => {handleToggles("isPopUpEditUser")}} className="py-2 px-4 flex items-center bg-slate-800 text-white">
          <UserPlusIcon className="w-6 h-6  mr-2 stroke-current" />
          Add User
        </button>
      </div>

      <div className="min-h-screen bg-white">
        <div className="flex flex-col items-center">
          <div className="w-full lg:max-w-screen-lg md:max-w-screen-md sm:max-w-screen-sm px-5 mt-8">
            <SearchBox />
            <MenuTable />
            <TableLargeDisplay />
            {/* table smartphone view */}
            <TableSmallDisplay />
            <FormPopUp />
          </div>
          {/* popup */}
        </div>
      </div>

      <Pagination />
    </>
  );
};

export default App;
