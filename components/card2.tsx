import React from "react";

// icon
import { UserCircleIcon } from "@heroicons/react/24/outline";

const Card2 = () => {
  return (
    <div className="md:flex grid bg-white rounded-lg shadow-md">
      <div className="text-center m-auto bg-slate-800 p-3 rounded-lg">
        <UserCircleIcon className="w-6 h-6 mx-auto text-white" />
      </div>
      <div className="md:text-right text-center m-auto">
        <p className="text-xl font-semibold mt-2">nama</p>
        <p className="text-gray-500">9238479723</p>
      </div>
    </div>
  );
};

export default Card2;
