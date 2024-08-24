"use client";
import { useState } from 'react';
import Sidebar from './(components)/Sidebar';
import UploadPage from './(components)/UploadPage';
import { useSession } from 'next-auth/react';

import { redirect } from 'next/navigation';

export default function Home() {
  const [isSidebarOpen, setSidebarOpen] = useState(true);
 
  const { data: session } = useSession({
    required: true,
    onUnauthenticated() {
      redirect("/api/auth/signin?callbackUrl=/");
    },
  });
  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex h-screen bg-gray-800 overflow-hidden">
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      <main className="flex-1 ml-64 overflow-auto p-8 text-white bg-gray-800">
        <UploadPage />
      </main>
    </div>
  );
}
