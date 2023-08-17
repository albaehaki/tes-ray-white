import React from 'react'

// icons
import {
    BeakerIcon,
    Bars3Icon,
    XCircleIcon,
    PowerIcon,
  } from "@heroicons/react/24/solid";

// store
import useHandleStore from "@/store/handleStore";

  

const NavBar = () => {
    const {isSideBarOpen, isPopUpEditUser} = useHandleStore((state) => state)
  const handleToggles = useHandleStore((state) => state.handleToggles)
  return (
    <header
          className={`flex justify-between ${isPopUpEditUser? `absolute` : `fixed`} right-0  items-center p-4 bg-white text-gray-800 ${
            isSideBarOpen ? `w-2/12 sm:w-8/12 md:w-9/12 lg:w-10/12` : `w-full`
          }`}
        >
          <div className="flex items-center">
            <button className="text-xl mr-4" onClick={() => {handleToggles("isSideBarOpen")}}>
              {isSideBarOpen ? (
                <XCircleIcon className="w-6 h-6 text-gray-800" />
              ) : (
                <Bars3Icon className="w-6 h-6 stroke-current  bg-gray-800 text-white rounded" />
              )}
            </button>
            {isSideBarOpen ? (
              ``
            ) : (
              <h1 className="md:text-xl font-semibold  sm:hidden">
                Your App Name
              </h1>
            )}
            <h1 className="md:text-xl font-semibold hidden sm:flex">
              Your App Name
            </h1>
          </div>
          {isSideBarOpen ? (
            ``
          ) : (
            <div className="sm:hidden items-end md:items-center">
              <button className="mr-4 flex items-end md:items-center" >
                <PowerIcon className="w-6 h-6  mr-2 stroke-current" />
                <span className="hidden md:block">Logout</span>
              </button>
            </div>
          )}

          <div className="hidden sm:flex items-end md:items-center">
            <button className="mr-4 flex items-end md:items-center" >
              <PowerIcon className="w-4 h-4 mr-2 stroke-current" />
              <span className="hidden md:block">Logout</span>
            </button>
          </div>

          {/* Add any additional elements you need */}
        </header>
  )
}

export default NavBar