import React, { useState } from 'react';

const StaticDropdownMenu = () => {
  const [hoveredItem, setHoveredItem] = useState<null | 'export' | 'contact' | 'disable' | 'logout'>(null);

  return (
    <div className="flex flex-col w-48 bg-white rounded-2xl shadow-sm overflow-hidden">
      {/* Export wallet option */}
      <div 
        className={`flex flex-col p-3 ${hoveredItem === 'export' ? 'bg-gray-100' : 'bg-white'}`}
        onMouseEnter={() => setHoveredItem('export')}
        onMouseLeave={() => setHoveredItem(null)}
      >
        <div className="flex flex-row items-center gap-1">
          {/* Trash icon */}
          <div className="w-5 h-5 flex items-center justify-center text-blue-500">
            <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" fill="none">
              <path d="M3 6h18M19 6v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6m3 0V4a2 2 0 012-2h4a2 2 0 012 2v2" />
            </svg>
          </div>
          <span className="ml-1 text-sm font-medium bg-gradient-to-r from-blue-400 to-indigo-500 bg-clip-text text-transparent">
            Export wallet
          </span>
        </div>
      </div>
      
      <div className="w-full h-px bg-gray-100" />
      
      {/* Contact support option */}
      <div 
        className={`flex flex-col p-3 ${hoveredItem === 'contact' ? 'bg-gray-100' : 'bg-white'}`}
        onMouseEnter={() => setHoveredItem('contact')}
        onMouseLeave={() => setHoveredItem(null)}
      >
        <div className="flex flex-row items-center gap-1">
          {/* User circle icon */}
          <div className="w-5 h-5 flex items-center justify-center text-gray-400">
            <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" fill="none">
              <path d="M12 2a10 10 0 100 20 10 10 0 000-20z" />
              <path d="M12 8a3 3 0 100 6 3 3 0 000-6z" />
              <path d="M6.2 18.4C6.9 16.5 9.2 15 12 15s5.1 1.5 5.8 3.4" />
            </svg>
          </div>
          <span className="ml-1 text-sm font-medium text-gray-400">
            Contact support
          </span>
        </div>
      </div>
      
      <div className="w-full h-px bg-gray-100" />
      
      {/* Disable account option */}
      <div 
        className={`flex flex-col p-3 ${hoveredItem === 'disable' ? 'bg-gray-100' : 'bg-white'}`}
        onMouseEnter={() => setHoveredItem('disable')}
        onMouseLeave={() => setHoveredItem(null)}
      >
        <div className="flex flex-row items-center gap-1">
          {/* User circle icon */}
          <div className="w-5 h-5 flex items-center justify-center text-gray-400">
            <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" fill="none">
              <path d="M12 2a10 10 0 100 20 10 10 0 000-20z" />
              <path d="M12 8a3 3 0 100 6 3 3 0 000-6z" />
              <path d="M6.2 18.4C6.9 16.5 9.2 15 12 15s5.1 1.5 5.8 3.4" />
            </svg>
          </div>
          <span className="ml-1 text-sm font-medium text-gray-400">
            Disable account
          </span>
        </div>
      </div>
      
      <div className="w-full h-px bg-gray-100" />
      
      {/* Log out option */}
      <div 
        className={`flex flex-col p-3 ${hoveredItem === 'logout' ? 'bg-gray-100' : 'bg-white'}`}
        onMouseEnter={() => setHoveredItem('logout')}
        onMouseLeave={() => setHoveredItem(null)}
      >
        <div className="flex flex-row items-center gap-1">
          {/* Log out icon */}
          <div className="w-5 h-5 flex items-center justify-center text-red-400">
            <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" fill="none">
              <path d="M9 21H5a2 2 0 01-2-2V5a2 2 0 012-2h4" />
              <path d="M16 17l5-5-5-5" />
              <path d="M21 12H9" />
            </svg>
          </div>
          <span className="ml-1 text-sm font-medium text-red-400">
            Log out
          </span>
        </div>
      </div>
    </div>
  );
};

export default StaticDropdownMenu; 