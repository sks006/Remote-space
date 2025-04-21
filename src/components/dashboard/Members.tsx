import React, { useState } from 'react';
import { members } from '../../data/mockData';
import MemberCard from './MemberCard';
import { Search, Filter } from 'lucide-react';

const Members: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterActive, setFilterActive] = useState<boolean | null>(null);

  const filteredMembers = members.filter(member => {
    const matchesSearch = member.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                       member.description.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesFilter = filterActive === null || member.isActive === filterActive;
    
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="h-full flex flex-col">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">Team Members</h1>
        <p className="text-gray-500">Manage and connect with your team members</p>
      </div>

      <div className="flex flex-col sm:flex-row gap-3 mb-6">
        <div className="relative flex-grow">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search className="h-4 w-4 text-gray-400" />
          </div>
          <input
            type="text"
            placeholder="Search members..."
            className="pl-10 pr-4 py-2 w-full border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <div className="flex gap-2">
          <button 
            className={`px-4 py-2 rounded-lg border ${filterActive === null 
              ? 'bg-blue-500 text-white border-blue-500' 
              : 'bg-white text-gray-700 border-gray-200 hover:bg-gray-50'}`}
            onClick={() => setFilterActive(null)}
          >
            All
          </button>
          <button 
            className={`px-4 py-2 rounded-lg border ${filterActive === true 
              ? 'bg-emerald-500 text-white border-emerald-500' 
              : 'bg-white text-gray-700 border-gray-200 hover:bg-gray-50'}`}
            onClick={() => setFilterActive(prev => prev === true ? null : true)}
          >
            Active
          </button>
          <button 
            className={`px-4 py-2 rounded-lg border ${filterActive === false 
              ? 'bg-gray-500 text-white border-gray-500' 
              : 'bg-white text-gray-700 border-gray-200 hover:bg-gray-50'}`}
            onClick={() => setFilterActive(prev => prev === false ? null : false)}
          >
            Inactive
          </button>
        </div>
      </div>

      {filteredMembers.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 overflow-y-auto pb-4">
          {filteredMembers.map(member => (
            <MemberCard key={member.id} member={member} />
          ))}
        </div>
      ) : (
        <div className="flex-grow flex items-center justify-center bg-gray-50 rounded-lg">
          <div className="text-center p-8">
            <Filter className="h-12 w-12 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-1">No members found</h3>
            <p className="text-gray-500">Try adjusting your search or filter criteria</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Members;