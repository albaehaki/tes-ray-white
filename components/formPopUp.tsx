import React, { useState } from "react";

// store
import useHandleStore from "@/store/handleStore";
import useTableStore from "@/store/tableStore";

// icon
import {
  BeakerIcon,
  Bars3Icon,
  XCircleIcon,
  PowerIcon,
} from "@heroicons/react/24/solid";

const Popup = ({ isOpen, onClose }: any) => {
  const { isPopUpEditUser } = useHandleStore((state) => state);
  const handleToggles = useHandleStore((state) => state.handleToggles);
  const editData = useTableStore((state) => state.editData);

  const [formData, setFormData] = useState({
    name: "",
    category: "",
    office: "",
    phone: "",
    email: "",
    status: "",
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    // Lakukan sesuatu dengan data yang diisi di form
    console.log(formData);
    handleToggles("isPopUpEditUser"); // Tutup popup setelah submit
  };

  if (!isPopUpEditUser) {
    return null;
  }

  return (
    <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 overflow-y-auto">

      <button><XCircleIcon onClick={() =>  handleToggles("isPopUpEditUser")} className="w-6 h-6 absolute right-2 top-2" /></button>
      <div className="bg-white p-6 rounded-lg shadow-md w-96">
        <h2
          className={`text-xl text-center font-bold mb-4 ${
            editData !== null ? `` : ``
          }`}
        >
          {" "}
          {editData !== null ? `Edit User` : `Add User`}
        </h2>
        <form onSubmit={handleSubmit}>
          {/* name */}
          <div className="mb-3">
            <label htmlFor="name" className="block font-medium">
              Nama
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={editData !== null ? editData.name : formData.name}
              onChange={handleChange}
              className="border rounded-md px-2 py-1 w-full"
            />
          </div>
          {/* category */}
          <div className="mb-3">
            <label htmlFor="name" className="block font-medium">
              category
            </label>
            <select className="border rounded-md px-2 py-1 w-full">
              <option>1</option>
              <option>2</option>
              {/* ... more page options */}
            </select>
          </div>
          {/* office */}
          <div className="mb-3">
            <label htmlFor="name" className="block font-medium">
              office
            </label>
            <select className="border rounded-md px-2 py-1 w-full">
              <option>1</option>
              <option>2</option>
              {/* ... more page options */}
            </select>
          </div>
          {/* phone */}
          <div className="mb-3">
            <label htmlFor="name" className="block font-medium">
              phone
            </label>
            <input
              type="number"
              id="name"
              name="name"
              value={editData !== null ? editData.phone : formData.phone}
              onChange={handleChange}
              className="border rounded-md px-2 py-1 w-full"
            />
          </div>
          {/* email */}
          <div className="mb-3">
            <label htmlFor="name" className="block font-medium">
              email
            </label>
            <input
              type="email"
              id="name"
              name="name"
              value={editData !== null ? editData.email : formData.email}
              onChange={handleChange}
              className="border rounded-md px-2 py-1 w-full"
            />
          </div>
          {/* status */}
          <div className="mb-3">
            <label htmlFor="name" className="block font-medium">
              status
            </label>
            <select className="border rounded-md px-2 py-1 w-full">
              <option>Active</option>
              <option>NonActive</option>
              {/* ... more page options */}
            </select>
          </div>

          {/* Tambahkan input lain sesuai kebutuhan */}
          <div className="flex justify-evenly mt-4">
          {editData !== null ? (<button
              type="button"
              onClick={() => {
                handleToggles("isPopUpEditUser");
              }}
              className="mr-2 px-4 py-2 border rounded-md"
            >
              Cancel
            </button>) : ``}
            
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded-md"
            >
              {editData !== null ? `Submit`: `Add`}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Popup;
