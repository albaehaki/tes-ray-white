import React from 'react'

// icons 
import {
    MagnifyingGlassCircleIcon,
    MagnifyingGlassIcon,
    UserPlusIcon,
    FunnelIcon,
    ChevronRightIcon,
    ChevronLeftIcon,
    ChevronDownIcon,
  } from "@heroicons/react/24/outline";

const SearchBox = () => {
  return (
    <div className="flex items-center mb-4 relative bg-gray-100 rounded-md p-2">
          <input
            type="text"
            className="w-full p-2 border rounded-md shadow-sm"
            
          />
          <div className="absolute inset-y-3 left-3 pl-2 flex items-center pointer-events-none">
            <MagnifyingGlassIcon className="w-5 h-5 text-gray-400" />
          </div>
          <button className="flex p-2 ml-2 border border-slate-800 bg-white rounded-md shadow-sm">
            <FunnelIcon className="w-5 h-5 mr-2" />
            <p className="hidden md:block">Filter</p>
          </button>
        </div>
  )
}

export default SearchBox