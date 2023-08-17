import React from 'react';
import { UserCircleIcon, HomeIcon, InboxIcon, BookmarkIcon, DocumentTextIcon, ChevronDownIcon, UserGroupIcon } from "@heroicons/react/24/outline";
import Link from 'next/link';
import { usePathname } from 'next/navigation'

const ContentSidebar = () => {
  const pathname = usePathname()
  const listMenuItems = [
    {
      id: 1,
      name: 'Dasboard',
      link: "/dasboard",
      icon: <HomeIcon className="w-6 h-6" />
    },
    {
      id: 2,
      name: 'User Management',
      link: "/user-management",
      icon: <UserGroupIcon className="w-6 h-6" />
    },
    {
      id: 3,
      name: 'News',
      link: "/news",
      icon: <DocumentTextIcon className="w-6 h-6" />,
      icon2: <ChevronDownIcon className="w-6 h-6 justify-self-end absolute right-3" />
    },
  ];
  console.log(pathname)
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
          {listMenuItems.map((item: any) =>(<><Link href={item.link} className={`flex items-center space-x-2 py-3 px-6 ${pathname === item.link? `bg-gray-900 border-l-4 border-[#fcffe0]` : ``}`}>
            {item.icon}
            <span className="text-xs">{item.name}</span>
            {item.icon2}
          </Link></>))}
          {/* <li className="flex items-center space-x-2 relative py-3 px-14">
            
            <span className="text-xs ">Add News</span>
            
          </li> */}
          
        </ul>
      </div>

      {/* Notes */}
      <div className="mt-5 px-6">
        <div className="bg-gray-700 p-4 rounded">
          <h3 className="text-lg font-semibold mb-2">Notes</h3>
          <p></p>
        </div>
      </div>
    </div>
  );
};

export default ContentSidebar;
