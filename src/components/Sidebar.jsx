import React from 'react';
import { useApp } from '../context/AppContext';
import { LayoutDashboard, FileText, Users, Settings, PieChart, ShieldAlert, List } from 'lucide-react';

const MenuItem = ({ icon: Icon, label, active }) => (
  <div className={`flex items-center gap-3 px-3 py-2.5 rounded-md text-sm font-medium cursor-pointer transition-colors ${
    active 
      ? 'bg-blue-50 text-blue-700' 
      : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
  }`}>
    <Icon size={18} />
    <span>{label}</span>
  </div>
);

export default function Sidebar() {
  const { userRole } = useApp();

  return (
    <aside className="w-64 bg-white border-r flex flex-col flex-shrink-0 h-full">
      {/* Header */}
      <div className="h-16 flex items-center px-6 border-b border-gray-100">
        <div className="flex items-center gap-2 font-bold text-lg text-gray-800">
           <div className="w-7 h-7 bg-blue-600 rounded flex items-center justify-center text-white">Q</div>
           QC Workspace
        </div>
      </div>

      {/* Menu List */}
      <div className="p-4 space-y-1 overflow-y-auto">
        
        {/* --- CUSTOMER SIDEBAR --- */}
        {userRole === 'customer' && (
          <>
            <div className="px-3 mb-2 mt-2 text-xs font-semibold text-gray-400 uppercase tracking-wider">
              Customer Menu
            </div>
            <MenuItem icon={FileText} label="My Documents" active />
            <MenuItem icon={Users} label="Team Documents" />
            <MenuItem icon={PieChart} label="Analytics" />
            <div className="my-4 border-t border-gray-100"></div>
            <MenuItem icon={Settings} label="Settings" />
          </>
        )}

        {/* --- INTERNAL SIDEBAR --- */}
        {userRole === 'internal' && (
          <>
            <div className="px-3 mb-2 mt-2 text-xs font-semibold text-gray-400 uppercase tracking-wider">
              Internal Ops
            </div>
            <MenuItem icon={ShieldAlert} label="Internal Dashboard" active />
            <MenuItem icon={List} label="All Queues" />
            <MenuItem icon={Users} label="User Management" />
            <MenuItem icon={PieChart} label="System Overview" />
            <div className="my-4 border-t border-gray-100"></div>
            <MenuItem icon={Settings} label="Settings" />
          </>
        )}

      </div>

      {/* User Footer */}
      <div className="mt-auto p-4 border-t border-gray-100">
        <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-gray-200 border border-gray-300"></div>
            <div className="text-sm">
                <p className="font-medium text-gray-700">{userRole === 'customer' ? 'Acme User' : 'Ops Manager'}</p>
                <p className="text-xs text-gray-500">{userRole === 'customer' ? 'Tenant: 8842' : 'Admin Role'}</p>
            </div>
        </div>
      </div>
    </aside>
  );
}