import React from "react";

const AddNews = () => {
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
      <div className="text-gray-500">
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
    </div>
  );
};

export default AddNews;
