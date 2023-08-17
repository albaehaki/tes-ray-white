import React from "react";

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

//   store
import useHandleStore from "@/store/handleStore";

const TableSmallDisplay = () => {
  const { isDropDownTable } = useHandleStore((state) => state);
  const handleToggles = useHandleStore((state) => state.handleToggles);
  return (
    <div className="relative w-full min-w-full block md:hidden">
      <button
        onClick={() => {
          handleToggles("isDropDownTable");
        }}
        className={`flex items-center bg-gray-100 space-x-2 relative py-3 px-6 w-full ${
          isDropDownTable ? `rounded-t-md` : `rounded-md`
        }`}
      >
        <span className="text-sm ">Your Name</span>
        <ChevronDownIcon className="w-6 h-6 justify-self-end absolute right-3" />
      </button>
      {isDropDownTable && (
        <div className="relative right-0 mt-0 bg-white border rounded-b-md border-gray-300 w-full">
          <table className="table-auto w-full mx-3 my-2">
            <tbody>
            <tr className="my-5 space-y-3">
              <th className="text-left">Name </th>
              <td>:</td>
              <td>zacky al baehaki</td>
            </tr>
            <tr className="my-5">
              <th className="text-left">Phone </th>
              <td>:</td>
              <td>089839338</td>
            </tr>
            <tr className="my-5">
              <th className="text-left">Email </th>
              <td>:</td>
              <td>jijsdhihweiuhwe</td>
            </tr>
            <tr className="my-5">
              <th className="text-left">Action </th>
              <td>:</td>
              <td><button
                      onClick={() => {
                        handleToggles("isPopUpEditUser");
                      }}
                      className="mr-2 text-gray-800 border-collapse border-2 border-gray-800 px-3 py-1"
                    >
                      Edit
                    </button>
                    <button className="text-white px-3 py-1 bg-red-500 ">
                      Delete
                    </button></td>
            </tr>
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default TableSmallDisplay;
