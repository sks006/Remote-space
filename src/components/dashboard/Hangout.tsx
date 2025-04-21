import React, { useState } from 'react';
import { members } from '../../data/mockData';
import Avatar from '../ui/Avatar';
import { MessageCircle, Video, Calendar, Users, Coffee } from 'lucide-react';

const Hangout: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'chat' | 'video' | 'events'>('chat');

  const tabs = [
    { id: 'chat', label: 'Chat', icon: <MessageCircle className="h-4 w-4" /> },
    { id: 'video', label: 'Video Rooms', icon: <Video className="h-4 w-4" /> },
    { id: 'events', label: 'Events', icon: <Calendar className="h-4 w-4" /> },
  ];

  const getActiveMembers = () => {
    return members.filter(member => member.isActive);
  };

  return (
    <div className="h-full flex flex-col">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">Hangout</h1>
        <p className="text-gray-500">Connect and collaborate with your team</p>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden flex-grow flex flex-col">
        <div className="border-b border-gray-100">
          <div className="flex">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                className={`flex items-center gap-1.5 px-4 py-3 text-sm font-medium transition-colors ${
                  activeTab === tab.id
                    ? 'text-blue-600 border-b-2 border-blue-600'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                }`}
                onClick={() => setActiveTab(tab.id as any)}
              >
                {tab.icon}
                <span>{tab.label}</span>
              </button>
            ))}
          </div>
        </div>

        <div className="flex-grow overflow-hidden">
          {activeTab === 'chat' && (
            <div className="p-5 flex flex-col h-full">
              <div className="mb-5">
                <h3 className="font-medium text-gray-900 mb-2">Team Chat</h3>
                <p className="text-sm text-gray-500">Send messages to the entire team or individuals</p>
              </div>
              
              <div className="bg-gray-50 rounded-xl p-4 mb-5">
                <div className="flex items-center gap-3 mb-3">
                  <Users className="h-5 w-5 text-blue-500" />
                  <h4 className="font-medium text-gray-900">Active Now</h4>
                </div>
                
                <div className="flex -space-x-2 overflow-hidden">
                  {getActiveMembers().map(member => (
                    <div key={member.id} className="inline-block relative">
                      <Avatar 
                        src={member.avatar} 
                        alt={member.name} 
                        size="sm"
                      />
                      <span className="absolute bottom-0 right-0 h-2.5 w-2.5 bg-emerald-500 rounded-full border-2 border-white"></span>
                    </div>
                  ))}
                  <div className="bg-gray-200 h-8 w-8 rounded-full flex items-center justify-center text-xs text-gray-600 font-medium">
                    +{getActiveMembers().length - 3}
                  </div>
                </div>
              </div>
              
              <div className="flex-grow overflow-y-auto rounded-xl border border-gray-200 mb-4">
                <div className="p-8 flex flex-col items-center justify-center h-full text-center">
                  <Coffee className="h-12 w-12 text-gray-300 mb-4" />
                  <h3 className="text-lg font-medium text-gray-900 mb-1">Chat coming soon!</h3>
                  <p className="text-gray-500 max-w-sm">Our team chat functionality is under development. Stay tuned for real-time messaging!</p>
                </div>
              </div>
              
              <div className="relative">
                <input
                  type="text"
                  placeholder="Type your message..."
                  className="w-full border border-gray-200 rounded-lg py-3 pl-4 pr-20 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-blue-500 text-white px-4 py-1.5 rounded-lg text-sm font-medium hover:bg-blue-600 transition-colors"
                >
                  Send
                </button>
              </div>
            </div>
          )}

          {activeTab === 'video' && (
            <div className="p-5 flex flex-col h-full">
              <div className="mb-5">
                <h3 className="font-medium text-gray-900 mb-2">Video Rooms</h3>
                <p className="text-sm text-gray-500">Join or create video rooms for team collaboration</p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-5">
                <div className="bg-indigo-50 border border-indigo-100 rounded-xl p-4 relative overflow-hidden">
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="font-medium text-gray-900">Daily Standup</h4>
                    <span className="text-xs px-2 py-1 bg-indigo-100 text-indigo-800 rounded-full">Active</span>
                  </div>
                  <p className="text-sm text-gray-600 mb-3">Quick 15-minute team check-in</p>
                  <div className="flex -space-x-2 mb-4">
                    {getActiveMembers().slice(0, 3).map(member => (
                      <Avatar 
                        key={member.id}
                        src={member.avatar} 
                        alt={member.name} 
                        size="sm"
                      />
                    ))}
                  </div>
                  <button className="w-full bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-lg transition-colors">
                    Join Room
                  </button>
                </div>

                <div className="bg-blue-50 border border-blue-100 rounded-xl p-4 relative overflow-hidden">
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="font-medium text-gray-900">Project Review</h4>
                    <span className="text-xs px-2 py-1 bg-gray-100 text-gray-800 rounded-full">Scheduled</span>
                  </div>
                  <p className="text-sm text-gray-600 mb-3">Weekly project review meeting</p>
                  <p className="text-xs text-gray-500 mb-4">Starts in 35 minutes</p>
                  <button className="w-full bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition-colors">
                    Set Reminder
                  </button>
                </div>
              </div>
              
              <button className="bg-white border border-gray-200 text-gray-800 rounded-xl p-4 flex items-center justify-center gap-2 hover:bg-gray-50 transition-colors">
                <Video className="h-5 w-5 text-blue-500" />
                <span>Create New Video Room</span>
              </button>
            </div>
          )}

          {activeTab === 'events' && (
            <div className="p-5">
              <div className="mb-5">
                <h3 className="font-medium text-gray-900 mb-2">Upcoming Events</h3>
                <p className="text-sm text-gray-500">Team events and hangouts</p>
              </div>
              
              <div className="space-y-4">
                <div className="bg-white border border-gray-200 rounded-xl p-4 hover:shadow-sm transition-shadow">
                  <div className="flex gap-4">
                    <div className="bg-red-100 text-red-600 h-14 w-14 rounded-lg flex flex-col items-center justify-center flex-shrink-0">
                      <span className="text-xs font-medium">APR</span>
                      <span className="text-xl font-bold">15</span>
                    </div>
                    
                    <div className="flex-grow">
                      <h4 className="font-medium text-gray-900 mb-1">Team Lunch</h4>
                      <p className="text-sm text-gray-600 mb-2">Virtual lunch break with the team</p>
                      <div className="flex items-center gap-4">
                        <span className="text-xs text-gray-500">12:30 PM ET</span>
                        <span className="text-xs bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded-full">Confirmed</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white border border-gray-200 rounded-xl p-4 hover:shadow-sm transition-shadow">
                  <div className="flex gap-4">
                    <div className="bg-blue-100 text-blue-600 h-14 w-14 rounded-lg flex flex-col items-center justify-center flex-shrink-0">
                      <span className="text-xs font-medium">APR</span>
                      <span className="text-xl font-bold">22</span>
                    </div>
                    
                    <div className="flex-grow">
                      <h4 className="font-medium text-gray-900 mb-1">Game Night</h4>
                      <p className="text-sm text-gray-600 mb-2">Online multiplayer games with the team</p>
                      <div className="flex items-center gap-4">
                        <span className="text-xs text-gray-500">7:00 PM ET</span>
                        <span className="text-xs bg-blue-100 text-blue-800 px-2 py-0.5 rounded-full">RSVP Open</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white border border-gray-200 rounded-xl p-4 hover:shadow-sm transition-shadow">
                  <div className="flex gap-4">
                    <div className="bg-purple-100 text-purple-600 h-14 w-14 rounded-lg flex flex-col items-center justify-center flex-shrink-0">
                      <span className="text-xs font-medium">MAY</span>
                      <span className="text-xl font-bold">05</span>
                    </div>
                    
                    <div className="flex-grow">
                      <h4 className="font-medium text-gray-900 mb-1">Workshop: Blockchain Basics</h4>
                      <p className="text-sm text-gray-600 mb-2">Learn about blockchain technology</p>
                      <div className="flex items-center gap-4">
                        <span className="text-xs text-gray-500">2:00 PM ET</span>
                        <span className="text-xs bg-yellow-100 text-yellow-800 px-2 py-0.5 rounded-full">Registration Open</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Hangout;