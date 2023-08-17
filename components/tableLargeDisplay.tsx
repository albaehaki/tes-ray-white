import React from "react";

// components

// store
import useHandleStore from "@/store/handleStore";
import useTableStore from "@/store/tableStore";
import { dummyCategoryUser, dummyDataTable } from "@/store/dummyDaya";

const TableLargeDisplay = () => {
  const handleToggles = useHandleStore((state) => state.handleToggles);
  const { categoryTable } = useTableStore((state) => state);
  const addEditData = useTableStore((state) => state.addEditData);
  return (
    <div className=" hidden sm:block">
      <table className="min-w-full border ">
        <thead className="bg-slate-800 text-white text-left">
          <tr>
            <th className="px-2 py-3">No</th>
            <th className="px-2 py-3">Name</th>
            {categoryTable === "Advisor" ||
            categoryTable === "Admin Office" ||
            categoryTable === "Principal" ||
            categoryTable === "Principal LMI" ? (
              <th className="px-2 py-3">Office</th>
            ) : (
              ``
            )}
            <th className="px-2 py-3">Phone</th>
            <th className="px-2 py-3">Email</th>
            <th className="px-2 py-3">Action</th>
          </tr>
        </thead>
        {dummyDataTable
          .filter((data: any) => data.category == categoryTable)
          .map((data: any, i: number) => (
            <tbody
              key={data.id}
              className={`${i % 2 !== 0 ? `bg-gray-100` : ``}`}
            >
              <tr key={data.id}>
                <td className="px-2 py-3">{data.id}</td>
                <td className="px-2 py-3">{data.name}</td>
                {categoryTable === "Advisor" ||
                categoryTable === "Admin Office" ||
                categoryTable === "Principal" ||
                categoryTable === "Principal LMI" ? (
                  <td className="px-2 py-3">{data.office}</td>
                ) : (
                  ``
                )}
                <td className="px-2 py-3">{data.phone}</td>
                <td className="px-2 py-3">{data.email}</td>
                <td className="px-2 py-3">
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
          ))}
      </table>
    </div>
  );
};

export default TableLargeDisplay;
