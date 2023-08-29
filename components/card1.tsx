import React from "react";

// icon
import { UserCircleIcon } from "@heroicons/react/24/outline";

const Card1 = () => {
  return (
    <div className="grid bg-white p-3 rounded-lg shadow-md">
      <div className="text-center m-auto bg-slate-800 p-5 rounded-lg">
        <UserCircleIcon className="w-12 h-12 mx-auto text-white" />
      </div>
      <div className="text-center m-auto">
        <p className="text-xl font-semibold mt-2">82734</p>
        <p className="text-gray-500">nama</p>
      </div>
    </div>
  );
};

export default Card1;
