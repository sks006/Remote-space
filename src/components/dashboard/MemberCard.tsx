import React from 'react';
import { Member } from '../../types';
import Avatar from '../ui/Avatar';
import StatusBadge from '../ui/StatusBadge';
import ActionButton from '../ui/ActionButton';

interface MemberCardProps {
  member: Member;
}

const MemberCard: React.FC<MemberCardProps> = ({ member }) => {
  const handleCall = () => {
    console.log(`Calling ${member.name}`);
    // Implement actual call functionality
  };

  const handleMessage = () => {
    console.log(`Messaging ${member.name}`);
    // Implement actual messaging functionality
  };

  const handleVideoCall = () => {
    console.log(`Video calling ${member.name}`);
    // Implement actual video call functionality
  };

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden transition-all duration-300 hover:shadow-md">
      <div className="p-4">
        <div className="flex items-start justify-between mb-3">
          <div className="flex items-center gap-3">
            <Avatar src={member.avatar} alt={member.name} />
            <div>
              <h3 className="font-medium text-gray-900">{member.name}</h3>
              <p className="text-xs text-gray-500">{member.role}</p>
            </div>
          </div>
          <StatusBadge isActive={member.isActive} />
        </div>
        
        <p className="text-sm text-gray-600 mb-4">{member.description}</p>
        
        <div className="flex justify-end space-x-2">
          <ActionButton type="call" onClick={handleCall} />
          <ActionButton type="message" onClick={handleMessage} />
          <ActionButton type="video" onClick={handleVideoCall} />
        </div>
      </div>
    </div>
  );
};

export default MemberCard;