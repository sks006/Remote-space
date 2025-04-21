import React, { useState } from 'react';
import Sidebar from './Sidebar';
import TeamLeader from '../dashboard/TeamLeader';
import Members from '../dashboard/Members';
import ActiveProjects from '../dashboard/ActiveProjects';
import Account from '../dashboard/Account';
import Hangout from '../dashboard/Hangout';

const Layout: React.FC = () => {
  const [activeSection, setActiveSection] = useState('members');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const renderContent = () => {
    switch (activeSection) {
      case 'teamLeader':
        return <TeamLeader />;
      case 'members':
        return <Members />;
      case 'activeProjects':
        return <ActiveProjects />;
      case 'account':
        return <Account />;
      case 'hangout':
        return <Hangout />;
      default:
        return <Members />;
    }
  };

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar 
        activeSection={activeSection} 
        setActiveSection={setActiveSection}
        isMobileMenuOpen={isMobileMenuOpen}
        setIsMobileMenuOpen={setIsMobileMenuOpen}
      />
      
      <main className="flex-grow p-6 pt-20 lg:pt-6 overflow-auto">
        <div className="container mx-auto h-full">
          {renderContent()}
        </div>
      </main>
    </div>
  );
};

export default Layout;