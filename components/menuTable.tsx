import React, { use } from "react";
// store
import useTableStore from "@/store/tableStore";
import { dummyCategoryUser } from "@/store/dummyDaya";

const MenuTable = () => {   
    const category = useTableStore((state) => state.categoryTable)
  const addCategory = useTableStore((state) => state.choiceCategoryTable);
  return (
    <div className="overflow-x-auto">
      <div className="flex space-x-4  mb-5 border-b-2 ">
        {dummyCategoryUser.map((name: any, i: number) => (
          <button
          key={i}
            onClick={() => {
              addCategory(name);
            }}
            className={`text-gray-800 py-2 px-1 hover:border-b-2 ${category === name? `border-b-2 font-bold` : ``} border-gray-800 text-sm`}
          >
            {name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default MenuTable;
