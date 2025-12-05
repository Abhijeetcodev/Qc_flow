import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import DetailPanel from '../components/DetailPanel';
import StatusPill from '../components/StatusPill';
import TopControls from '../components/TopControls';
import { ChevronRight } from 'lucide-react';

export default function Dashboard() {
  const { tasks, userRole } = useApp();
  const [selectedTask, setSelectedTask] = useState(null);

  // Filter Data based on Role
  const filteredTasks = tasks.filter(t => {
    if (userRole === 'customer') return t.customer === 'Acme Corp' && t.status !== 'Closed';
    return t.status !== 'Closed'; 
  });

  return (
    <div className="flex-1 p-8 bg-gray-50 relative overflow-hidden flex flex-col">
      <header className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900">
          {userRole === 'customer' ? 'My Documents' : 'Internal QC Dashboard'}
        </h1>
      </header>

      {/* Search & Filters */}
      <TopControls />

      {/* Table */}
      <div className="bg-white border border-gray-200 rounded-lg shadow-sm flex-1 overflow-auto">
        <table className="w-full text-left text-sm">
          <thead className="bg-gray-50 border-b border-gray-200">
            <tr>
              <th className="px-6 py-3 font-medium text-gray-500 uppercase tracking-wider text-xs">Document ID</th>
              {userRole === 'internal' && (
                <th className="px-6 py-3 font-medium text-gray-500 uppercase tracking-wider text-xs">Customer</th>
              )}
              <th className="px-6 py-3 font-medium text-gray-500 uppercase tracking-wider text-xs">Pipeline</th>
              <th className="px-6 py-3 font-medium text-gray-500 uppercase tracking-wider text-xs">Error Type</th>
              {/* NEW COLUMN */}
              <th className="px-6 py-3 font-medium text-gray-500 uppercase tracking-wider text-xs">Date Received</th>
              <th className="px-6 py-3 font-medium text-gray-500 uppercase tracking-wider text-xs">Status</th>
              <th className="px-6 py-3"></th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {filteredTasks.map(task => (
              <tr 
                key={task.id} 
                onClick={() => setSelectedTask(task)}
                className="hover:bg-blue-50 cursor-pointer transition-colors group"
              >
                <td className="px-6 py-4 font-medium text-gray-900">{task.id}</td>
                {userRole === 'internal' && (
                  <td className="px-6 py-4 text-gray-600">{task.customer}</td>
                )}
                <td className="px-6 py-4 text-gray-600">
                   <span className={`inline-block w-2 h-2 rounded-full mr-2 ${task.type === 'Invoice' ? 'bg-purple-400' : 'bg-indigo-400'}`}></span>
                   {task.type}
                </td>
                <td className="px-6 py-4 text-gray-600">{task.error}</td>
                {/* DATE DATA */}
                <td className="px-6 py-4 text-gray-600 whitespace-nowrap">{task.dateReceived}</td>
                <td className="px-6 py-4"><StatusPill status={task.status} /></td>
                <td className="px-6 py-4 text-right text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity">
                    <ChevronRight size={18} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {filteredTasks.length === 0 && (
            <div className="p-12 text-center text-gray-400">No documents found.</div>
        )}
      </div>

      {selectedTask && <DetailPanel task={selectedTask} onClose={() => setSelectedTask(null)} />}
    </div>
  );
}