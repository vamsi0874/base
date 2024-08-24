import { useState } from 'react';
import {
  HomeIcon,
  UploadIcon,
  ReceiptRefundIcon as InvoiceIcon,
  CalendarIcon,
  BellIcon,
  CogIcon,
} from '@heroicons/react/outline';
import Image from 'next/image';
const Sidebar = ({ isOpen, toggleSidebar }) => {
  const items = [
    { name: 'Dashboard', icon: HomeIcon },
    { name: 'Upload', icon: UploadIcon },
    { name: 'Invoice', icon: InvoiceIcon },
    { name: 'Schedule', icon: CalendarIcon },
    { name: 'Calendar', icon: CalendarIcon },
    { name: 'Notification', icon: BellIcon },
    { name: 'Settings', icon: CogIcon },
  ];

  return (
    <div className={`fixed top-0 left-0 h-full bg-gray-900 text-white flex flex-col p-4 ${isOpen ? 'w-64' : 'w-20'} transition-all duration-300`}>
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center space-x-4">

          <div className='bg-blue-600 w-12 h-12 rounded-full'></div>
          {isOpen && <span className="text-xl font-bold">Base</span>}
        </div>
        <button onClick={toggleSidebar}>
          <svg className="h-5 w-5 text-gray-400 hover:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M3 12h18M3 6h18M3 18h18'} />
          </svg>
        </button>
      </div>
      <ul className="flex-grow">
        {items.map((item, index) => (
          <li key={index} className="mb-6 flex items-center hover:bg-gray-700 p-2 rounded-md cursor-pointer">
            <item.icon className="h-6 w-6 text-gray-400" />
            {isOpen && <span className="ml-4">{item.name}</span>}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
