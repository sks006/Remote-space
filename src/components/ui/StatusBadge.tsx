import React from 'react';

interface StatusBadgeProps {
  isActive: boolean;
}

const StatusBadge: React.FC<StatusBadgeProps> = ({ isActive }) => {
  return (
    <div className={`flex items-center gap-1.5 ${isActive ? 'text-emerald-600' : 'text-gray-500'}`}>
      <div 
        className={`h-2.5 w-2.5 rounded-full ${isActive 
          ? 'bg-emerald-500 animate-pulse' 
          : 'bg-gray-400'}`} 
      />
      <span className="text-xs font-medium">
        {isActive ? 'Active' : 'Inactive'}
      </span>
    </div>
  );
};

export default StatusBadge;