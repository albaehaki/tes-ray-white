import React, {FC, ReactNode} from "react";

// icon
import { UserCircleIcon, XCircleIcon } from "@heroicons/react/24/outline";

interface ProgressBarD {
  name: string;
  progress: number;
  icon: ReactNode;
}

const ProgressBar: FC<ProgressBarD> = ({progress, icon, name}) => {
  return (
    <div className="px-5 py-3 ">
      <div className="flex justify-between">
        <div className="flex gap-5">
          <XCircleIcon className="w-6 h-6" />
          <p>{name}</p>
        </div>
        <p>{progress}%</p>
      </div>
      <div className="relative h-4 w-full bg-gray-200 rounded">
        <div className={`absolute h-full  ${progress >= 75 && progress <= 100 ? 'bg-green-500' : progress < 75 && progress >= 50 ? "bg-yellow-500" : progress <= 50 && progress >= 25 ? "bg-red-500": "bg-red-800"} rounded `}
        style={{ width: `${progress}%` }}
        ></div>
      </div>
    </div>
  );
};

export default ProgressBar;
