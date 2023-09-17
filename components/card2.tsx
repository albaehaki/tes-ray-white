import React, {ReactNode, FC} from "react";

// icon
import { UserCircleIcon } from "@heroicons/react/24/outline";

interface Card2D {
  name: string;
  value: number;
  Children : ReactNode;
}

const Card2: FC<Card2D> = ({Children, value, name}) => {
  return (
    <div className="lg:flex grid bg-white rounded-lg shadow-md py-3">
      <div className="text-center m-auto bg-slate-800 p-3 rounded-lg">
        {/* <UserCircleIcon className="w-6 h-6 mx-auto text-white" /> */}
        {Children}
      </div>
      <div className="lg:text-right text-center m-auto">
        <p className="text-xl font-semibold mt-2">{name}</p>
        <p className="text-gray-500 text-sm">{value}</p>
      </div>
    </div>
  );
};

export default Card2;
