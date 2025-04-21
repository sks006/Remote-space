import React from 'react';

interface ProgressBarProps {
  progress: number;
  size?: 'sm' | 'md' | 'lg';
  showPercentage?: boolean;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ 
  progress, 
  size = 'md',
  showPercentage = true
}) => {
  const getHeightClass = () => {
    switch (size) {
      case 'sm': return 'h-1.5';
      case 'md': return 'h-2.5';
      case 'lg': return 'h-4';
    }
  };

  const getColorClass = () => {
    if (progress < 30) return 'bg-red-500';
    if (progress < 70) return 'bg-yellow-500';
    return 'bg-emerald-500';
  };

  return (
    <div className="w-full">
      <div className="flex justify-between items-center mb-1">
        {showPercentage && (
          <span className="text-xs font-medium text-gray-700">{progress}% Complete</span>
        )}
      </div>
      <div className={`w-full bg-gray-200 rounded-full ${getHeightClass()}`}>
        <div 
          className={`${getColorClass()} ${getHeightClass()} rounded-full transition-all duration-700 ease-in-out`}
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
};

export default ProgressBar;