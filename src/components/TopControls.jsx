import React from 'react';
import { Search, ChevronDown, Filter } from 'lucide-react';

const FilterButton = ({ label }) => (
  <button className="flex items-center gap-2 px-3 py-1.5 bg-white border border-gray-200 rounded-md text-sm font-medium text-gray-600 hover:bg-gray-50 hover:border-gray-300 transition-all shadow-sm">
    {label} <ChevronDown size={14} className="text-gray-400" />
  </button>
);

export default function TopControls() {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
      
      {/* Search Bar */}
      <div className="relative w-full max-w-sm">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
        <input 
          type="text" 
          placeholder="Search by Document ID..." 
          className="w-full pl-10 pr-4 py-2 bg-white border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-100 focus:border-blue-400 transition-all shadow-sm"
        />
      </div>

      {/* Filters */}
      <div className="flex items-center gap-2 overflow-x-auto pb-1">
        <span className="text-sm text-gray-400 flex items-center gap-1 mr-1">
            <Filter size={14}/> Filters:
        </span>
        <FilterButton label="Pipeline" />
        <FilterButton label="Error Type" />
        <FilterButton label="Status" />
      </div>
    </div>
  );
}