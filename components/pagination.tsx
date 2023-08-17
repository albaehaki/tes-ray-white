import React from 'react'

// icons
import {
    ChevronLeftIcon,
    ChevronRightIcon,
  } from "@heroicons/react/24/solid";

const Pagination = () => {
  return (
    <div className="flex justify-between items-center mt-4 bg-white px-10 py-3 rounded">
        <div className="flex items-center">
          <span className="mr-2">1 - 10</span>
        </div>
        <div className="flex items-center">
          <span className="mr-2 hidden md:block">
            This page you are on: {`  `}
          </span>
          <select className="p-1 border-2 rounded-md shadow-sm border-gray-800">
            <option>1</option>
            <option>2</option>
            {/* ... more page options */}
          </select>
          <div className="flex border-l-2 border-gray-800 ml-3">
            <button className="mr-2 ml-3 border-2 rounded-md shadow-sm border-gray-300 text-gray-300">
              <ChevronLeftIcon className="w-6 h-6" />
            </button>
            <button className="border-2 rounded-md shadow-sm border-gray-800">
              <ChevronRightIcon className="w-6 h-6 " />
            </button>
          </div>
        </div>
      </div>
  )
}

export default Pagination