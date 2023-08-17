import React from 'react';
import { UserCircleIcon, HomeIcon, InboxIcon, BookmarkIcon, DocumentTextIcon, ChevronDownIcon } from "@heroicons/react/24/outline";

const ContentSidebar: React.FC = () => {
  return (
    <div className="flex flex-col bg-gray-800 text-white h-screen">
      {/* Profile */}
      <div className="flex flex-col  space-y-2 p-6">
        <div className="w-24 h-24  bg-gray-700 flex items-center justify-center">
          <UserCircleIcon className="w-12 h-12" />
        </div>
        <p className="font-bold">Your Name</p>
        <p className="text-xs">Your Name</p>
      </div>

      {/* Menu List */}
      <div className="mt-8">
        <ul className="space-y-2">
          <li className="flex items-center space-x-2 py-3 px-6">
            <HomeIcon className="w-6 h-6" />
            <span className="text-xs">Dasboard</span>
          </li>
          <li className="flex items-center space-x-2 py-3 px-6">
            <BookmarkIcon className="w-6 h-6" />
            <span className="text-xs">User Management</span>
          </li>
          <li className="flex items-center space-x-2 relative py-3 px-6">
            <DocumentTextIcon className="w-6 h-6" />
            <span className="text-xs ">News</span>
            <ChevronDownIcon className="w-6 h-6 justify-self-end absolute right-3" />
          </li>
          {/* <li className="flex items-center space-x-2 relative py-3 px-14">
            
            <span className="text-xs ">Add News</span>
            
          </li> */}
          
        </ul>
      </div>

      {/* Notes */}
      <div className="mt-5 px-6">
        <div className="bg-gray-700 p-4 rounded">
          <h3 className="text-lg font-semibold mb-2">Notes</h3>
          <p>Your notes go here...</p>
        </div>
      </div>
    </div>
  );
};

export default ContentSidebar;
