import React from 'react';
import { User, Users } from 'lucide-react';

const Sidebar: React.FC = () => {
  return (
    <aside className="w-64 bg-gray-100 border-r border-gray-200 min-h-screen">
      <div className="p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-2">Control Centre</h2>
        <p className="text-sm text-gray-600 mb-6">Select an option below to edit</p>
        
        <div className="space-y-2">
          <div className="bg-white rounded-lg border border-gray-200 hover:border-gray-300 transition-colors duration-200">
            <button className="w-full flex items-center space-x-3 p-4 text-left hover:bg-gray-50 rounded-lg transition-colors duration-200">
              <div className="flex-shrink-0">
                <User className="h-5 w-5 text-gray-600" />
              </div>
              <div>
                <div className="text-sm font-medium text-gray-900">Business Profile</div>
              </div>
            </button>
          </div>
          
          <div className="bg-white rounded-lg border border-gray-200 hover:border-gray-300 transition-colors duration-200">
            <button className="w-full flex items-center space-x-3 p-4 text-left hover:bg-gray-50 rounded-lg transition-colors duration-200">
              <div className="flex-shrink-0">
                <Users className="h-5 w-5 text-gray-600" />
              </div>
              <div>
                <div className="text-sm font-medium text-gray-900">Users & Devices</div>
              </div>
            </button>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;