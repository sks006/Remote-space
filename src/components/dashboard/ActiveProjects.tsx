import React from 'react';
import { projects, members } from '../../data/mockData';
import Avatar from '../ui/Avatar';
import ProgressBar from '../ui/ProgressBar';
import { Calendar, Clock } from 'lucide-react';

const ActiveProjects: React.FC = () => {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      month: 'short', 
      day: 'numeric', 
      year: 'numeric' 
    });
  };

  const getDaysRemaining = (dateString: string) => {
    const dueDate = new Date(dateString);
    const today = new Date();
    const diffTime = dueDate.getTime() - today.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
  };

  const getProjectMembers = (memberIds: string[]) => {
    return members.filter(member => memberIds.includes(member.id));
  };

  return (
    <div className="h-full flex flex-col">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">Active Projects</h1>
        <p className="text-gray-500">Track progress on ongoing projects</p>
      </div>

      <div className="space-y-5 overflow-y-auto pb-4">
        {projects.map(project => {
          const projectMembers = getProjectMembers(project.members);
          const daysRemaining = getDaysRemaining(project.dueDate);
          
          return (
            <div 
              key={project.id} 
              className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden transition-all duration-300 hover:shadow-md"
            >
              <div className="p-5">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="font-medium text-gray-900">{project.name}</h3>
                  <span className={`text-xs px-2.5 py-1 rounded-full ${
                    project.progress >= 90 ? 'bg-emerald-100 text-emerald-800' :
                    project.progress >= 50 ? 'bg-blue-100 text-blue-800' :
                    'bg-amber-100 text-amber-800'
                  }`}>
                    {project.progress >= 90 ? 'Almost Complete' :
                     project.progress >= 50 ? 'In Progress' :
                     'Just Started'}
                  </span>
                </div>
                
                <p className="text-sm text-gray-600 mb-4">{project.description}</p>
                
                <div className="mb-4">
                  <ProgressBar progress={project.progress} />
                </div>
                
                <div className="flex flex-wrap justify-between">
                  <div className="flex items-center gap-1.5 text-gray-500 text-sm">
                    <Calendar className="h-4 w-4" />
                    <span>{formatDate(project.dueDate)}</span>
                  </div>
                  
                  <div className="flex items-center gap-1.5 text-gray-500 text-sm">
                    <Clock className="h-4 w-4" />
                    <span className={
                      daysRemaining < 0 ? 'text-red-600' :
                      daysRemaining < 7 ? 'text-amber-600' :
                      'text-gray-600'
                    }>
                      {daysRemaining < 0 
                        ? `${Math.abs(daysRemaining)} days overdue` 
                        : `${daysRemaining} days remaining`}
                    </span>
                  </div>
                </div>
                
                <div className="mt-4 pt-4 border-t border-gray-100">
                  <div className="flex justify-between items-center">
                    <div className="flex -space-x-2">
                      {projectMembers.map((member, index) => (
                        <div key={member.id} className="relative" style={{ zIndex: 10 - index }}>
                          <Avatar 
                            src={member.avatar} 
                            alt={member.name} 
                            size="sm"
                          />
                        </div>
                      ))}
                      {projectMembers.length > 0 && (
                        <div className="ml-2 flex items-center">
                          <span className="text-xs text-gray-500">
                            {projectMembers.length} {projectMembers.length === 1 ? 'member' : 'members'}
                          </span>
                        </div>
                      )}
                    </div>
                    <button className="text-sm text-blue-600 hover:text-blue-800 focus:outline-none">
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ActiveProjects;