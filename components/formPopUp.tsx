import React, { useState } from 'react';

const Popup = ({ isOpen, onClose }: any) => {
  const [formData, setFormData] = useState({
    name: '',
    category: '',
    office: '',
    phoneNumber: '',
    email: '',
    status: '',
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
    onClose(); // Tutup popup setelah submit
  };

  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-lg shadow-md w-96">
        <h2 className="text-xl text-center font-bold mb-4">Form Data</h2>
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
              value={formData.name}
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
              value={formData.name}
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
              value={formData.name}
              onChange={handleChange}
              className="border rounded-md px-2 py-1 w-full"
            />
          </div>
            {/* status */}
          <div className="mb-3">
            <label htmlFor="name" className="block font-medium">
            status
            </label>
            {/* <input
              type="select"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="border rounded-md px-2 py-1 w-full"
            /> */}
            <select className="border rounded-md px-2 py-1 w-full">
              <option>1</option>
              <option>2</option>
              {/* ... more page options */}
            </select>
          </div>
          
          {/* Tambahkan input lain sesuai kebutuhan */}
          <div className="flex justify-evenly mt-4">
            <button
              type="button"
              onClick={onClose}
              className="mr-2 px-4 py-2 border rounded-md"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded-md"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Popup;
