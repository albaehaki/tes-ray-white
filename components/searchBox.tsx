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

  // components 
  import DropDownFilter from './dropDownFilter';

  // store
  import useHandleStore from '@/store/handleStore';

const SearchBox = () => {
  const {isDropDownFilter} = useHandleStore((state) => state)
  const handleToggles = useHandleStore((state) => state.handleToggles);
  return (
    <div className="flex items-center mb-4 relative bg-gray-100 rounded-md p-2">
          <input
            type="text"
            className="w-full p-2 border rounded-md shadow-sm"
            // placeholder='search'
          />
          <div className="absolute inset-y-3 left-3 pl-2 flex items-center pointer-events-none">
            <MagnifyingGlassIcon className="w-5 h-5 text-gray-400" />
          </div>
          <div className='relative'>
          <button onClick={() => {handleToggles("isDropDownFilter")}} className="flex p-2 ml-2 border border-slate-800 bg-white rounded-md shadow-sm">
            <FunnelIcon className="w-5 h-5 mr-2" />
            <p className="hidden md:block">Filter</p>
          </button>
          {
            isDropDownFilter? <DropDownFilter /> : ``
          }
          </div>
        </div>
  )
}

export default SearchBox