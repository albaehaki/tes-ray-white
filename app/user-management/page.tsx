"use client";
import React, { useState } from "react";
import {
  MagnifyingGlassCircleIcon,
  MagnifyingGlassIcon,
  UserPlusIcon,
  FunnelIcon,
  ChevronRightIcon,
  ChevronLeftIcon,
  ChevronDownIcon,
} from "@heroicons/react/24/outline";
// components
import FormPopUp from "@/components/formPopUp";

const CustomerTable: React.FC = () => {
  // Dummy data for customer table
  const [popupOpen, setPopupOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const openPopup = () => {
    setPopupOpen(true);
  };

  const closePopup = () => {
    setPopupOpen(false);
  };

  const customers = [
    { id: 1, name: "John Doe", phone: "1234567890", email: "john@example.com" },
    { id: 2, name: "John Doe", phone: "1234567890", email: "john@example.com" },
    // ... more customer data
  ];

  return (
    <div className="flex flex-col items-center">
      <div className="w-full lg:max-w-screen-lg md:max-w-screen-md sm:max-w-screen-sm px-5 mt-8">
        <div className="flex items-center mb-4 relative bg-gray-100 rounded-md p-2">
          <input
            type="text"
            className="w-full p-2 border rounded-md shadow-sm"
            // placeholder={<MagnifyingGlassCircleIcon className="w-5 h-5" />}
          />
          <div className="absolute inset-y-3 left-3 pl-2 flex items-center pointer-events-none">
            <MagnifyingGlassIcon className="w-5 h-5 text-gray-400" />
          </div>
          <button className="flex p-2 ml-2 border border-slate-800 bg-white rounded-md shadow-sm">
            <FunnelIcon className="w-5 h-5 mr-2" />
            <p className="hidden md:block">Filter</p>
          </button>
        </div>
        <div className="overflow-x-auto">
          <div className="flex space-x-4  mb-5 border-b-2 border-gray-300">
            <button className="text-gray-800 py-2 px-1 hover:border-b-2 border-gray-800 text-sm">
              Menu 1
            </button>

            {/* Tambahkan lebih banyak menu sesuai kebutuhan */}
          </div>
        </div>
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
              <tbody
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
                        openPopup();
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
        {/* table smartphone view */}

        <div className="relative w-full min-w-full block md:hidden">
            <button
              onClick={toggleDropdown}
              className={`flex items-center bg-gray-100 space-x-2 relative py-3 px-6 w-full ${
                isOpen ? `rounded-t-md` : `rounded-md`
              }`}
            >
              <span className="text-sm ">Your Name</span>
              <ChevronDownIcon className="w-6 h-6 justify-self-end absolute right-3" />
            </button>
            {isOpen && (
              <div className="relative right-0 mt-0 bg-white border rounded-b-md border-gray-300 w-full">
                <table className="table-auto w-full mx-3 my-2">
                  <tr>
                    <th className="text-left">Name </th>
                    <td>:</td>
                    <td>zacky al baehaki</td>
                  </tr>
                </table>
              </div>
            )}
          </div>
      </div>
      {/* popup */}
      <FormPopUp isOpen={popupOpen} onClose={closePopup} />
    </div>
  );
};

const App: React.FC = () => {
  return (
    <>
      <div className="flex pb-10 justify-end bg-gray-100">
        <button className="py-2 px-4 flex items-center bg-slate-800 text-white">
          <UserPlusIcon className="w-6 h-6  mr-2 stroke-current" />
          Add User
        </button>
      </div>

      <div className="min-h-screen bg-white">
        <CustomerTable />
      </div>
      <div className="flex justify-between items-center mt-4 bg-white px-10 py-3 rounded">
        <div className="flex items-center">
          <span className="mr-2">1 - 10</span>
        </div>
        <div className="flex items-center">
          <span className="mr-2 hidden md:block">
            This page you are on: {`  `}
          </span>
          <select className="p-1 border-2 rounded-md shadow-sm border-gray-800">
            <option>1</option>
            <option>2</option>
            {/* ... more page options */}
          </select>
          <div className="flex border-l-2 border-gray-800 ml-3">
            <button className="mr-2 ml-3 border-2 rounded-md shadow-sm border-gray-300 text-gray-300">
              <ChevronLeftIcon className="w-6 h-6" />
            </button>
            <button className="border-2 rounded-md shadow-sm border-gray-800">
              <ChevronRightIcon className="w-6 h-6 " />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
