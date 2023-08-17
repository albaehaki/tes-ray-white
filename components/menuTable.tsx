import React from 'react'
// store
import useHandleStore from "@/store/handleStore";
import { dummyCategoryUser } from "@/store/dummyDaya";

const MenuTable = () => {
  return (
    <div className="overflow-x-auto">
          <div className="flex space-x-4  mb-5 border-b-2 ">
            {dummyCategoryUser.map((name: any) => (<button className="text-gray-800 py-2 px-1 hover:border-b-2 border-gray-800 text-sm">
              {name}
            </button>))}
          </div>
        </div>
  )
}

export default MenuTable