import React from 'react';
import { teamLeader } from '../../data/mockData';
import Avatar from '../ui/Avatar';
import { Mail, Phone, Calendar } from 'lucide-react';

const TeamLeader: React.FC = () => {
  return (
    <div className="h-full flex flex-col">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">Team Leader</h1>
        <p className="text-gray-500">View and contact your team leader</p>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="bg-gradient-to-r from-blue-500 to-indigo-600 p-6">
          <div className="flex flex-col sm:flex-row items-center gap-6">
            <Avatar src={teamLeader.avatar} alt={teamLeader.name} size="lg" />
            <div className="text-white text-center sm:text-left">
              <h2 className="text-2xl font-bold">{teamLeader.name}</h2>
              <p className="opacity-90">{teamLeader.role}</p>
            </div>
          </div>
        </div>

        <div className="p-6">
          <div className="space-y-4">
            <div className="flex items-center gap-3 px-4 py-3 bg-gray-50 rounded-lg">
              <Mail className="h-5 w-5 text-blue-500" />
              <div>
                <p className="text-xs text-gray-500">Email</p>
                <p className="text-gray-700">{teamLeader.email}</p>
              </div>
            </div>

            <div className="flex items-center gap-3 px-4 py-3 bg-gray-50 rounded-lg">
              <Phone className="h-5 w-5 text-emerald-500" />
              <div>
                <p className="text-xs text-gray-500">Phone</p>
                <p className="text-gray-700">+1 (555) 123-4567</p>
              </div>
            </div>

            <div className="flex items-center gap-3 px-4 py-3 bg-gray-50 rounded-lg">
              <Calendar className="h-5 w-5 text-indigo-500" />
              <div>
                <p className="text-xs text-gray-500">Availability</p>
                <p className="text-gray-700">Mon-Fri, 9:00 AM - 5:00 PM ET</p>
              </div>
            </div>
          </div>
          
          <div className="mt-6 grid grid-cols-2 gap-4">
            <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors">
              Schedule Meeting
            </button>
            <button className="px-4 py-2 bg-white text-blue-500 border border-blue-500 rounded-lg hover:bg-blue-50 transition-colors">
              Send Message
            </button>
          </div>
        </div>
      </div>

      <div className="mt-6 bg-white rounded-xl shadow-sm border border-gray-100 p-5">
        <h3 className="font-medium text-gray-900 mb-3">Current Focus</h3>
        <div className="space-y-2">
          <div className="flex items-start gap-2">
            <div className="h-5 w-5 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center text-xs mt-0.5">
              1
            </div>
            <div>
              <p className="text-gray-800">Website Redesign Project</p>
              <p className="text-xs text-gray-500">Finalizing UI components</p>
            </div>
          </div>
          <div className="flex items-start gap-2">
            <div className="h-5 w-5 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-xs mt-0.5">
              2
            </div>
            <div>
              <p className="text-gray-800">Team Structure Optimization</p>
              <p className="text-xs text-gray-500">Reorganizing development teams</p>
            </div>
          </div>
          <div className="flex items-start gap-2">
            <div className="h-5 w-5 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center text-xs mt-0.5">
              3
            </div>
            <div>
              <p className="text-gray-800">Q2 Planning</p>
              <p className="text-xs text-gray-500">Roadmap development</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamLeader;