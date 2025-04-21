import React from 'react';
import { Phone, MessageCircle, Video } from 'lucide-react';

type ActionType = 'call' | 'message' | 'video';

interface ActionButtonProps {
  type: ActionType;
  onClick: () => void;
}

const ActionButton: React.FC<ActionButtonProps> = ({ type, onClick }) => {
  const getIcon = () => {
    switch (type) {
      case 'call':
        return <Phone className="h-4 w-4" />;
      case 'message':
        return <MessageCircle className="h-4 w-4" />;
      case 'video':
        return <Video className="h-4 w-4" />;
    }
  };

  const getColor = () => {
    switch (type) {
      case 'call':
        return 'bg-emerald-100 text-emerald-600 hover:bg-emerald-200';
      case 'message':
        return 'bg-blue-100 text-blue-600 hover:bg-blue-200';
      case 'video':
        return 'bg-purple-100 text-purple-600 hover:bg-purple-200';
    }
  };

  const getTooltip = () => {
    switch (type) {
      case 'call':
        return 'Call';
      case 'message':
        return 'Message';
      case 'video':
        return 'Video Call';
    }
  };

  return (
    <button
      className={`${getColor()} p-2 rounded-full transition-all duration-200 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-opacity-50`}
      onClick={onClick}
      title={getTooltip()}
      aria-label={getTooltip()}
    >
      {getIcon()}
    </button>
  );
};

export default ActionButton;