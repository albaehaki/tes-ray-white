import React from "react";

// icons
import { ChevronDownIcon } from "@heroicons/react/24/outline";

//   store
import useHandleStore from "@/store/handleStore";
import useTableStore from "@/store/tableStore";
import { dummyCategoryUser, dummyDataTable } from "@/store/dummyDaya";

// hooks
import handleHooks from "@/hooks/handleHooks";

const TableSmallDisplay = () => {
  const { categoryTable, idDetail } = useTableStore((state) => state);
  const { isDropDownTable } = useHandleStore((state) => state);
  const handleToggles = useHandleStore((state) => state.handleToggles);
  const updateId = useTableStore((state) => state.updateId);
  const addEditData = useTableStore((state) => state.addEditData);

  const { handleDropDownTables } = handleHooks();
  return (
    <>
      {dummyDataTable
        .filter((data: any) => data.category == categoryTable)
        .map((data: any, i: number) => (
          <div className="relative w-full min-w-full block md:hidden py-2">
            <button
              key={i}
              onClick={() => {
                updateId(data.id);
                handleToggles("isDropDownTable");
                handleDropDownTables(data.id);
              }}
              className={`flex items-center bg-gray-100 space-x-2 relative py-3 px-6 w-full ${
                isDropDownTable ? `rounded-t-md` : `rounded-md`
              }`}
            >
              <span className="text-sm ">{data.name}</span>
              <ChevronDownIcon className="w-6 h-6 justify-self-end absolute right-3" />
            </button>
            {isDropDownTable && data.id === idDetail ? (
              <div className="relative right-0 mt-0 bg-white border rounded-b-md border-gray-300 w-full">
                <table className="table-auto w-full mx-3 my-2">
                  <tbody>
                    <tr className="my-5 space-y-3">
                      <th className="text-left">Name </th>
                      <td>:</td>
                      <td>{data.name}</td>
                    </tr>
                    {categoryTable === "Advisor" ||
                    categoryTable === "Admin Office" ||
                    categoryTable === "Principal" ||
                    categoryTable === "Principal LMI" ? (
                      <tr className="my-5">
                        <th className="text-left">Office </th>
                        <td>:</td>
                        <td>{data.office}</td>
                      </tr>
                    ) : null}
                    {categoryTable === "Bank Officer" ||
                    categoryTable === "Bank Admin" ||
                    categoryTable === "Bank Principal" ? (
                      <tr className="my-5">
                        <th className="text-left">Bank </th>
                        <td>:</td>
                        <td>{data.office}</td>
                      </tr>
                    ) : null}
                    <tr className="my-5">
                      <th className="text-left">Phone </th>
                      <td>:</td>
                      <td>{data.phone}</td>
                    </tr>
                    <tr className="my-5">
                      <th className="text-left">Email </th>
                      <td>:</td>
                      <td>{data.email}</td>
                    </tr>
                    <tr className="my-5">
                      <th className="text-left">Action </th>
                      <td>:</td>
                      <td>
                        <button
                          onClick={() => {
                            addEditData(data);
                            handleToggles("isPopUpEditUser");
                          }}
                          className="mr-2 text-gray-800 border-collapse border-2 border-gray-800 px-3 py-1"
                        >
                          Edit
                        </button>
                        <button className="text-white px-3 py-1 bg-red-500 ">
                          Delete
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            ) : (
              ``
            )}
          </div>
        ))}
    </>
  );
};

export default TableSmallDisplay;
