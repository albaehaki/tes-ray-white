"use client";
import React, { useState, useMemo } from "react";
// import ReactQuill from "react-quill";
// const ReactQuill = typeof window === 'object' ? require('react-quill') : () => false;
import dynamic from "next/dynamic";
import "react-quill/dist/quill.snow.css";

const AddNews = () => {
  const [tags, setTags] = useState<string[]>([]);
  const [inputValue, setInputValue] = useState<string>("");
  const ReactQuill = useMemo(
    () => dynamic(() => import("react-quill"), { ssr: false }),
    []
  );

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleInputKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && inputValue.trim() !== "") {
      setTags([...tags, inputValue.trim()]);
      setInputValue("");
    }
  };
  return (
    <div className="p-10">
      <h2 className={`text-xl font-bold mb-4 text-left`}>
        {" "}
        {/* {editData !== null ? `Edit User` : `Add User`} */}
        Add News
      </h2>
      {/* Category */}
      <div className="mb-3">
        <label htmlFor="name" className="block font-medium">
          Category
        </label>
        <input
          type="text"
          id="name"
          name="name"
          // value={editData !== null ? editData.name : formData.name}
          // onChange={handleChange}
          className="border rounded-md px-2 py-1 w-full"
          placeholder="Choose a category"
        />
      </div>
      {/* Title */}
      <div className="mb-3">
        <label htmlFor="name" className="block font-medium">
          Title
        </label>
        <input
          type="text"
          id="name"
          name="name"
          // value={editData !== null ? editData.name : formData.name}
          // onChange={handleChange}
          className="border rounded-md px-2 py-1 w-full"
          placeholder="Whrite the description of the news"
        />
      </div>
      {/* Meta Title */}
      <div className="mb-3">
        <label htmlFor="name" className="block font-medium">
          Meta Title
        </label>
        <input
          type="text"
          id="name"
          name="name"
          // value={editData !== null ? editData.name : formData.name}
          // onChange={handleChange}
          className="border rounded-md px-2 py-1 w-full"
          placeholder="Write the meta title of the news"
        />
      </div>
      {/* Meta Desc */}
      <div className="mb-3">
        <label htmlFor="name" className="block font-medium">
          Meta Desc
        </label>
        <input
          type="text"
          id="name"
          name="name"
          // value={editData !== null ? editData.name : formData.name}
          // onChange={handleChange}
          className="border rounded-md px-2 py-1 w-full"
          placeholder="Write the description of the news"
        />
      </div>
      {/* Slug */}
      <div className="mb-3">
        <label htmlFor="name" className="block font-medium">
          Slug
        </label>
        <input
          type="text"
          id="name"
          name="name"
          // value={editData !== null ? editData.name : formData.name}
          // onChange={handleChange}
          className="border rounded-md px-2 py-1 w-full"
          placeholder="Write the slug of the content`s URL"
        />
      </div>
      {/* Intro */}
      <div className="mb-3">
        <label htmlFor="name" className="block font-medium">
          Intro
        </label>
        <input
          type="text"
          id="name"
          name="name"
          // value={editData !== null ? editData.name : formData.name}
          // onChange={handleChange}
          className="border rounded-md px-2 py-1 w-full"
          placeholder="Write the intro of to attract readers"
        />
      </div>
      {/* Input Image */}
      <div className="text-gray-500 border-[2px] border-gray-600 rounded-md p-2 mb-3">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="mx-auto w-12 h-12"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M8 12l-4 4m0 0l4-4m-4 4h14a2 2 0 002-2V6a2 2 0 00-2-2H4a2 2 0 00-2 2v8a2 2 0 002 2z"
          />
        </svg>
        <p>Drag & drop an image here</p>
      </div>
      {/* Input text */}
      <div className="mb-3">
        <ReactQuill
          // value={value}
          // onChange={handleChange}
          modules={{
            toolbar: [
              [{ font: [] }],
              [{ header: "1" }, { header: "2" }],
              ["bold", "italic", "underline", "strike"],
              [{ list: "ordered" }, { list: "bullet" }],
              ["link"],
              ["clean"],
            ],
          }}
        />
      </div>

      {/* input teg */}
      <div className="flex flex-wrap mb-3 border-2 border-gray-600  rounded-md">
        {tags.map((tag, index) => (
          <div
            key={index}
            className="bg-blue-500 text-white rounded-full px-2 py-1 m-1"
          >
            {tag}
          </div>
        ))}
        <input
          type="text"
          placeholder="Tambahkan tag..."
          value={inputValue}
          onChange={handleInputChange}
          onKeyDown={handleInputKeyDown}
          className=" p-2 focus:outline-none bg-transparent"
        />
      </div>
      {/* Screadule Date */}
      <div className="flex w-full gap-5">
      <div className="mb-4 w-full">
        <label
          htmlFor="scheduleDate"
          className="block text-sm font-medium text-gray-700"
        >
          Schedule Date
        </label>
        <input
          type="date"
          id="scheduleDate"
          name="scheduleDate"
          // value={scheduleDate}
          // onChange={handleScheduleChange}
          className="w-full border-gray-300 rounded-md p-2"
          required
        />
      </div>
      <div className="mb-4 w-full">
        <label
          htmlFor="startTime"
          className="block text-sm font-medium text-gray-700"
        >
          Start Time
        </label>
        <input
          type="time"
          id="startTime"
          name="startTime"
          // value={startTime}
          // onChange={handleStartTimeChange}
          className="w-full border-gray-300 rounded-md p-2"
          required
        />
      </div>
      </div>

      {/* Input Status */}
      <div className="mb-3">
        <label htmlFor="name" className="block font-medium">
          Status
        </label>
        <input
          type="text"
          id="status"
          name="status"
          // value={editData !== null ? editData.name : formData.name}
          // onChange={handleChange}
          className="border rounded-md px-2 py-1 w-full"
          placeholder="Choose the status"
        />
      </div>
      <div className="mt-4 flex justify-end gap-5">
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
        >
          Save as Draft
        </button>
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default AddNews;
