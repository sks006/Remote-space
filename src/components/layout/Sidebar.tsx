import React from 'react';
import { Users, User, Briefcase, Wallet, Coffee, Menu, X } from 'lucide-react';

interface SidebarProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
  isMobileMenuOpen: boolean;
  setIsMobileMenuOpen: (isOpen: boolean) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ 
  activeSection, 
  setActiveSection,
  isMobileMenuOpen,
  setIsMobileMenuOpen
}) => {
  const navItems = [
    { id: 'teamLeader', label: 'Team Leader', icon: <User className="h-5 w-5" /> },
    { id: 'members', label: 'Members', icon: <Users className="h-5 w-5" /> },
    { id: 'activeProjects', label: 'Active Projects', icon: <Briefcase className="h-5 w-5" /> },
    { id: 'account', label: 'Account', icon: <Wallet className="h-5 w-5" /> },
    { id: 'hangout', label: 'Hangout', icon: <Coffee className="h-5 w-5" /> },
  ];

  return (
    <>
      {/* Mobile menu button */}
      <div className="lg:hidden fixed top-0 left-0 right-0 z-20 bg-white border-b border-gray-200 px-4 py-3 flex justify-between items-center">
        <h1 className="font-bold text-xl text-gray-900">Remote office</h1>
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="p-2 rounded-lg hover:bg-gray-100"
        >
          {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile sidebar overlay */}
      {isMobileMenuOpen && (
        <div 
          className="lg:hidden fixed inset-0 bg-gray-600 bg-opacity-75 z-10"
          onClick={() => setIsMobileMenuOpen(false)}
        ></div>
      )}

      {/* Sidebar */}
      <aside 
        className={`bg-white border-r border-gray-200 h-full flex flex-col transition-all duration-300 ${
          isMobileMenuOpen ? 'fixed inset-y-0 left-0 w-64 z-20 translate-x-0' : 'fixed inset-y-0 left-0 w-64 z-20 -translate-x-full lg:translate-x-0 lg:static'
        }`}
      >
        <div className="p-6 border-b border-gray-200">
          <h1 className="font-bold text-xl text-gray-900">Remote office</h1>
        </div>

        <nav className="flex-grow p-4 space-y-1">
          {navItems.map(item => (
            <button
              key={item.id}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                activeSection === item.id
                  ? 'bg-blue-50 text-blue-600'
                  : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
              }`}
              onClick={() => {
                setActiveSection(item.id);
                setIsMobileMenuOpen(false);
              }}
            >
              {React.cloneElement(item.icon, {
                className: `${activeSection === item.id ? 'text-blue-500' : 'text-gray-400'} h-5 w-5 transition-colors`
              })}
              <span className="font-medium">{item.label}</span>
              {item.id === 'members' && (
                <span className="ml-auto bg-blue-100 text-blue-800 text-xs font-medium px-2 py-0.5 rounded-full">
                  5
                </span>
              )}
            </button>
          ))}
        </nav>

        <div className="p-4 border-t border-gray-200">
          <div className="bg-blue-50 rounded-lg p-4">
            <h3 className="font-medium text-gray-900 mb-1">Need Help?</h3>
            <p className="text-sm text-gray-600 mb-3">Contact support for assistance</p>
            <button className="w-full bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition-colors text-sm">
              Contact Support
            </button>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;