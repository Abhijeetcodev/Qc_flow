import React from 'react';
import { useApp } from '../context/AppContext';
import { Users, ShieldAlert } from 'lucide-react';

export default function DemoControls() {
  const { userRole, setUserRole } = useApp();

  return (
    <div className="bg-slate-900 text-white px-6 py-2.5 flex items-center justify-between shadow-md z-50 relative shrink-0">
      <div className="flex items-center gap-4">
        <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Demo Persona:</span>
        <div className="flex bg-slate-800 rounded-lg p-0.5">
          <button
            onClick={() => setUserRole('customer')}
            className={`flex items-center gap-2 px-3 py-1 rounded-md text-xs font-medium transition-all ${
              userRole === 'customer' ? 'bg-blue-600 text-white shadow' : 'text-slate-400 hover:text-white'
            }`}
          >
            <Users size={14} /> Customer (Acme)
          </button>
          <button
            onClick={() => setUserRole('internal')}
            className={`flex items-center gap-2 px-3 py-1 rounded-md text-xs font-medium transition-all ${
              userRole === 'internal' ? 'bg-indigo-500 text-white shadow' : 'text-slate-400 hover:text-white'
            }`}
          >
            <ShieldAlert size={14} /> Internal Ops
          </button>
        </div>
      </div>
      <div className="text-xs text-slate-400">
        Viewing as: <strong className="text-white">{userRole === 'customer' ? 'Acme Corp User' : 'Global Ops Manager'}</strong>
      </div>
    </div>
  );
}