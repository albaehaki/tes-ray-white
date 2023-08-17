"use client";
import React, { useState } from "react";

// components
import SideBarContent from "./sideBarContent";
import NavBar from "./navBar";

// store
import useHandleStore from "@/store/handleStore";

const Header = ({ children }: { children: React.ReactNode }) => {
  const { isSideBarOpen, isPopUpEditUser } = useHandleStore((state) => state);

  return (
    <>
      <div className="flex w-full">
        {/* Sidebar */}
        {isSideBarOpen && (
          <div
            className={`${isPopUpEditUser? `absolute` : `fixed`} h-screen ${
              isSideBarOpen ? `w-10/12 sm:w-4/12 md:w-3/12 lg:w-2/12 ` : ``
            }  bg-gray-700 text-white`}
          >
            <SideBarContent />
          </div>
        )}
        <NavBar />
      </div>
      <div
        className={`absolute z-[-1] right-0  items-center p-4 mt-[60px] bg-gray-100  text-gray-800 ${
          isSideBarOpen
            ? `relative md:absolute w-2/12 sm:w-8/12 md:w-9/12 lg:w-10/12`
            : `w-full`
        }`}
      >
        {children}
      </div>
    </>
  );
};

export default Header;
