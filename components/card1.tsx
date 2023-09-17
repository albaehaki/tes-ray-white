import React, {Children, ReactNode, FC} from "react";

// icon
import { UserCircleIcon } from "@heroicons/react/24/outline";

interface Card1D {
  name: string;
  value: number;
  Children : ReactNode;
}


const Card1: FC<Card1D> = ({ Children, name, value }) => {


  // console.log(Children)
  return (
    <div className="grid bg-white p-3 rounded-lg shadow-md">
      <div className="text-center m-auto bg-slate-800 p-5 rounded-lg">
        {/* <UserCircleIcon className="w-12 h-12 mx-auto text-white" /> */}
        {Children}
        {/* {data.data[0].icon} */}
      </div>
      <div className="text-center m-auto">
        <p className="text-xl font-semibold mt-2">{value}</p>
        <p className="text-gray-500">{name}</p>
      </div>
    </div>
  );
};


export default Card1;

