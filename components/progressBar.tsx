import React from "react";

// icon
import { UserCircleIcon, XCircleIcon } from "@heroicons/react/24/outline";

const ProgressBar = () => {
  return (
    <div className="px-5 py-3 ">
      <div className="flex justify-between">
        <div className="flex gap-5">
          <XCircleIcon className="w-6 h-6" />
          <p>belum diproses </p>
        </div>
        <p>75%</p>
      </div>
      <div className="relative h-4 w-full bg-gray-200 rounded">
        <div className="absolute h-full bg-green-500 rounded w-[75%]"></div>
      </div>
    </div>
  );
};

export default ProgressBar;
