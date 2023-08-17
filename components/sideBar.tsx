"use client";
import React, { useState } from "react";
import {
  BeakerIcon,
  Bars3Icon,
  XCircleIcon,
  PowerIcon,
} from "@heroicons/react/24/solid";

// components
import SideBarContent from "./sideBarContent";

const Header = ({ children }: { children: React.ReactNode }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleLogout = () => {
    // Handle logout logic here
  };

  return (
    <>
      <div className="flex w-full">
        {/* Sidebar */}
        {isSidebarOpen && (
          <div
            className={`fixed h-screen ${
              isSidebarOpen ? `w-10/12 sm:w-4/12 md:w-3/12 lg:w-2/12 ` : ``
            }  bg-gray-700 text-white`}
          >
            <SideBarContent />
          </div>
        )}
        <header
          className={`flex justify-between fixed right-0  items-center p-4 bg-white text-gray-800 ${
            isSidebarOpen ? `w-2/12 sm:w-8/12 md:w-9/12 lg:w-10/12` : `w-full`
          }`}
        >
          <div className="flex items-center">
            <button className="text-xl mr-4" onClick={toggleSidebar}>
              {isSidebarOpen ? (
                <XCircleIcon className="w-6 h-6 text-gray-800" />
              ) : (
                <Bars3Icon className="w-6 h-6 stroke-current  bg-gray-800 text-white rounded" />
              )}
            </button>
            {isSidebarOpen ? (
              ``
            ) : (
              <h1 className="text-xl font-semibold  sm:hidden">
                Your App Name
              </h1>
            )}
            <h1 className="text-xl font-semibold hidden sm:flex">
              Your App Name
            </h1>
          </div>
          {isSidebarOpen ? (
            ``
          ) : (
            <div className="sm:hidden items-center">
              <button className="mr-4 flex items-center" onClick={handleLogout}>
                <PowerIcon className="w-6 h-6  mr-2 stroke-current" />
                Logout
              </button>
            </div>
          )}

          <div className="hidden sm:flex items-center">
            <button className="mr-4 flex items-center" onClick={handleLogout}>
              <PowerIcon className="w-4 h-4 mr-2 stroke-current" />
              Logout
            </button>
          </div>

          {/* Add any additional elements you need */}
        </header>
      </div>
      <div className={`absolute z-[-1] right-0  items-center p-4 mt-[60px] bg-gray-100  text-gray-800 ${
            isSidebarOpen ? `relative md:absolute w-2/12 sm:w-8/12 md:w-9/12 lg:w-10/12` : `w-full`
          }`}>
        {children}
      </div>
    </>
  );
};

export default Header;
