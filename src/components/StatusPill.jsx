import React from 'react';

export default function StatusPill({ status }) {
  const styles = {
    'New': 'bg-blue-100 text-blue-700 border-blue-200',
    'Needs Review': 'bg-yellow-100 text-yellow-800 border-yellow-200',
    'Escalated': 'bg-orange-100 text-orange-700 border-orange-200',
    'Resolved': 'bg-green-100 text-green-700 border-green-200',
  };

  return (
    <span className={`px-2.5 py-0.5 rounded-full text-xs font-bold border ${styles[status] || 'bg-gray-100 border-gray-200'}`}>
      {status}
    </span>
  );
}