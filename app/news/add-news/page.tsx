"use client";
import React, {useState} from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const AddNews = () => {
  const [tags, setTags] = useState<string[]>([]);
  const [inputValue, setInputValue] = useState<string>("");

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
      <div className="flex flex-wrap mb-3">
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
          className="border border-gray-300 rounded-md p-2"
        />
      </div>
    </div>
  );
};

export default AddNews;
