import React from "react";

// store
import useHandleStore from "@/store/handleStore";
import { dummyCategoryUser } from "@/store/dummyDaya";

const DropDownFilter = () => {
    const {isDropDownFilter} = useHandleStore((state) => state)
  const handleToggles = useHandleStore((state) => state.handleToggles);
  return (
    <div className="absolute top-10 mt-3 z-50 right-0 bg-white shadow-xl min-w-[250px] md:min-w-[300px]  max-h-[400px] overflow-y-auto rounded-md">
      <p className="py-3 px-4">Time Rage</p>
      <div className="flex justify-between items-center bg-slate-100 py-3 px-4">
        <button className="border-2 border-gray-800 py-1 px-3 text-xs rounded-md">
          jan 10 2001
        </button>
        <p>to</p>
        <button className="border-2 border-gray-800 py-1 px-3 text-xs rounded-md">
          jan 10 2001
        </button>
      </div>
      <p className="py-3 px-4">Category</p>
      <div className="py-3 px-4 bg-slate-100">
        <ul>
          {dummyCategoryUser.map((data: any, i: number) => (
          <li key={i} className="flex items-center">
            <input className="mr-3" type="checkbox" name="customer" />
            <label>{data}</label>
          </li>))}
        </ul>
      </div>
      <p className="py-3 px-4">Status</p>
      <div className="py-3 px-4 bg-slate-100">
        <ul>
          <li className="flex items-center">
            <input className="mr-3" type="checkbox" name="Active" />
            <label>Active</label>
          </li>
          <li className="flex items-center">
            <input className="mr-3" type="checkbox" name="custoNonActivemer" />
            <label>NonActive</label>
          </li>
        </ul>
      </div>
      <div className="flex justify-between items-center  py-3 px-4 gap-4">
        <button onClick={() => { handleToggles("isDropDownFilter")}} className="border-2 w-2/6 border-gray-800 py-2  px-3 rounded-md">
          Cancel
        </button>
        <button onClick={() => { handleToggles("isDropDownFilter")}} className=" bg-blue-500 w-4/6 text-white py-2 px-3 rounded-md ">
          Apply Filter
        </button>
      </div>
    </div>
  );
};

export default DropDownFilter;
