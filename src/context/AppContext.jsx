import React, { createContext, useContext, useState } from 'react';

const AppContext = createContext();

const INITIAL_DATA = [
  {
    id: 'DOC-1001',
    customer: 'Acme Corp',
    type: 'Invoice',
    error: 'Confidence Score',
    dateReceived: 'Oct 24, 2023',
    status: 'Needs Review',
    amount: '$1,250.00',
    vendor: 'Acme Supply',
    reason: 'Vendor name confidence (42%) is too low.',
  },
  {
    id: 'DOC-1002',
    customer: 'Acme Corp',
    type: 'Order',
    error: 'Missing Field',
    dateReceived: 'Oct 24, 2023',
    status: 'New',
    amount: '$5,400.00',
    vendor: 'Global Logistics',
    reason: 'PO Number not found in header.',
  },
  {
    id: 'DOC-8850',
    customer: 'Beta Industries',
    type: 'Invoice',
    error: 'Validation Error',
    dateReceived: 'Oct 25, 2023',
    status: 'Escalated',
    amount: '$900.00',
    vendor: 'Beta Inc',
    reason: 'Line items do not sum to total.',
  },
  {
    id: 'DOC-9901',
    customer: 'Acme Corp',
    type: 'Invoice',
    error: 'Duplicate',
    dateReceived: 'Oct 20, 2023',
    status: 'Resolved',
    amount: '$120.00',
    vendor: 'Staples',
    reason: 'Flagged as potential duplicate.',
  },
  {
    id: 'DOC-9905',
    customer: 'Gamma LLC',
    type: 'Order',
    error: 'Format Error',
    dateReceived: 'Oct 26, 2023',
    status: 'Escalated',
    amount: '$300.00',
    vendor: 'Unknown',
    reason: 'Date format invalid.',
  }
];

export function AppProvider({ children }) {
  const [tasks, setTasks] = useState(INITIAL_DATA);
  const [userRole, setUserRole] = useState('customer'); // 'customer' or 'internal'

  const updateStatus = (id, newStatus) => {
    setTasks(prev => prev.map(t => 
      t.id === id ? { ...t, status: newStatus } : t
    ));
  };

  return (
    <AppContext.Provider value={{ tasks, userRole, setUserRole, updateStatus }}>
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  return useContext(AppContext);
}