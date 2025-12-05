import React from 'react';
import { useApp } from '../context/AppContext';
import { X, AlertCircle, CheckCircle, Send, ShieldCheck, Archive, MessageSquare } from 'lucide-react';

export default function DetailPanel({ task, onClose }) {
  const { userRole, updateStatus } = useApp();
  if (!task) return null;

  const handleEscalate = () => { updateStatus(task.id, 'Escalated'); onClose(); };
  const handleResolve = () => { updateStatus(task.id, 'Resolved'); onClose(); };
  const handleClose = () => { updateStatus(task.id, 'Closed'); onClose(); };

  return (
    <div className="w-[420px] bg-white border-l border-gray-200 shadow-2xl h-full absolute right-0 top-0 z-40 flex flex-col">
      <div className="h-14 border-b flex items-center justify-between px-6 bg-gray-50">
        <span className="font-semibold text-gray-700">Task Details</span>
        <button onClick={onClose}><X size={20} className="text-gray-400 hover:text-gray-600" /></button>
      </div>
      <div className="flex-1 p-6 overflow-y-auto space-y-6">
        <div className={`p-4 rounded-lg border flex gap-3 ${task.status === 'Resolved' ? 'bg-green-50 border-green-200' : 'bg-red-50 border-red-100'}`}>
          {task.status === 'Resolved' ? <CheckCircle className="text-green-600 mt-1" size={18} /> : <AlertCircle className="text-red-600 mt-1" size={18} />}
          <div>
            <h4 className="text-sm font-bold text-gray-900">{task.error}</h4>
            <p className="text-sm text-gray-600 mt-1">{task.reason}</p>
          </div>
        </div>
        <div className="space-y-4 border-t pt-4">
          <h3 className="text-xs font-bold uppercase text-gray-400">Extracted Data</h3>
          <div className="grid grid-cols-2 gap-4">
             <div className="bg-gray-50 p-3 rounded border border-gray-100">
                <label className="text-xs text-gray-500 block mb-1">Vendor</label>
                <div className="font-medium text-sm">{task.vendor}</div>
             </div>
             <div className="bg-gray-50 p-3 rounded border border-gray-100">
                <label className="text-xs text-gray-500 block mb-1">Amount</label>
                <div className="font-medium text-sm">{task.amount}</div>
             </div>
          </div>
        </div>
        <button className="flex items-center gap-2 text-sm text-blue-600 font-medium hover:underline">
            <MessageSquare size={16}/> Add Comment
        </button>
      </div>
      <div className="p-6 border-t bg-gray-50">
        {userRole === 'customer' && (
          <div className="flex gap-3">
             {task.status === 'Resolved' ? (
               <button onClick={handleClose} className="w-full py-2 bg-green-600 text-white rounded hover:bg-green-700 flex justify-center gap-2 items-center text-sm font-medium shadow-sm">
                 <Archive size={16}/> Verify & Close
               </button>
             ) : task.status === 'Escalated' ? (
                <div className="w-full text-center text-sm text-gray-500 italic">Waiting for Ops...</div>
             ) : (
               <>
                <button className="flex-1 py-2 border bg-white rounded hover:bg-gray-50 text-sm font-medium shadow-sm">Edit</button>
                <button onClick={handleEscalate} className="flex-1 py-2 bg-red-600 text-white rounded hover:bg-red-700 flex justify-center gap-2 items-center text-sm font-medium shadow-sm">
                  <Send size={16}/> Send to Internal
                </button>
               </>
             )}
          </div>
        )}
        {userRole === 'internal' && (
            task.status === 'Escalated' ? (
              <button onClick={handleResolve} className="w-full py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 flex justify-center gap-2 items-center text-sm font-medium shadow-sm">
                <ShieldCheck size={16}/> Fix & Resolve
              </button>
            ) : (
              <div className="w-full text-center text-sm text-gray-500 italic">Read Only Mode</div>
            )
        )}
      </div>
    </div>
  );
}