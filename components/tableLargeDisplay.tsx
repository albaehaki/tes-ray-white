import React from 'react'

// components

// store
import useHandleStore from '@/store/handleStore';
import { dummyCategoryUser } from '@/store/dummyDaya';

const TableLargeDisplay = () => {
  const handleToggles = useHandleStore((state) => state.handleToggles);
    const customers = [
        { id: 1, name: "John Doe", phone: "1234567890", email: "john@example.com" },
        { id: 2, name: "John Doe", phone: "1234567890", email: "john@example.com" },
        // ... more customer data
      ];
  return (
    <div className=" hidden sm:block">
          <table className="min-w-full border ">
            <thead className="bg-slate-800 text-white text-left">
              <tr>
                <th className="px-2 py-3">No</th>
                <th className="px-2 py-3">Name</th>
                <th className="px-2 py-3">Phone</th>
                <th className="px-2 py-3">Email</th>
                <th className="px-2 py-3">Action</th>
              </tr>
            </thead>
            {customers.map((customer) => (
              <tbody key={customer.id}
                className={`${customer.id % 2 !== 0 ? `bg-gray-100` : ``}`}
              >
                <tr key={customer.id}>
                  <td className="px-2 py-3">{customer.id}</td>
                  <td className="px-2 py-3">{customer.name}</td>
                  <td className="px-2 py-3">{customer.phone}</td>
                  <td className="px-2 py-3">{customer.email}</td>
                  <td className="px-2 py-3">
                    <button
                      onClick={() => {
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
  )
}

export default TableLargeDisplay