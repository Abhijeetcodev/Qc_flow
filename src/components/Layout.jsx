import React from 'react';
import DemoControls from './DemoControls';
import Sidebar from './Sidebar';

export default function Layout({ children }) {
  return (
    <div className="h-screen flex flex-col font-sans text-gray-900 overflow-hidden">
      <DemoControls />
      <div className="flex-1 flex overflow-hidden">
        <Sidebar />
        <main className="flex-1 flex flex-col relative bg-gray-50">
          {children}
        </main>
      </div>
    </div>
  );
}