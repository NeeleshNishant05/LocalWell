import React from 'react';
import { Mail, Phone } from 'lucide-react';

const AccountManager: React.FC = () => {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
      <div className="mb-6">
        <h2 className="text-xl font-semibold text-gray-900 mb-2">My Account Manager</h2>
        <p className="text-sm text-gray-600">Feel free to reach out to them for any queries</p>
      </div>
      
      <div className="mb-4">
        <span className="inline-block bg-gray-100 text-gray-700 text-xs font-medium px-2 py-1 rounded">
          LEVEL 1 MANAGER
        </span>
      </div>
      
      <div className="flex items-start space-x-6">
        <div className="flex-shrink-0">
          <img
            src="https://images.pexels.com/photos/3756681/pexels-photo-3756681.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
            alt="Pallavi Rai"
            className="h-20 w-20 rounded-full object-cover border-2 border-gray-200"
          />
        </div>
        
        <div className="flex-1">
          <h3 className="text-lg font-medium text-gray-900 mb-1">Pallavi Rai</h3>
          <p className="text-sm text-gray-600 mb-3">Customer Excellence Officer</p>
          
          <div className="space-y-3">
            <p className="text-sm text-gray-800 font-medium">
              Hi, I'm Pallavi, Your L1 Account Manager
            </p>
            <p className="text-sm text-gray-700">
              Talk to me on how to get the best out of LocalWell
            </p>
            
            <div className="text-sm text-gray-700 space-y-1">
              <p>Since 2019, I've helped over 300 pharmacies across</p>
              <p>Andhra Pradesh, Telangana, and other regions</p>
              <p>digitize their daily operations.</p>
            </div>
            
            <div className="text-sm text-gray-700 space-y-1">
              <p>Can speak English and Hindi.</p>
              <p>Available: 9:30 am to 7:30 pm (Mon-Sat)</p>
            </div>
            
            <div className="flex items-center space-x-4 pt-3">
              <a
                href="mailto:pallavi.rai@localwell.in"
                className="flex items-center space-x-2 text-gray-700 hover:text-gray-900 transition-colors duration-200"
              >
                <Mail className="h-4 w-4" />
                <span className="text-sm">pallavi.rai@localwell.in</span>
              </a>
            </div>
            
            <button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-lg text-sm font-medium transition-colors duration-200 flex items-center space-x-2">
              <Phone className="h-4 w-4" />
              <span>Call Now</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountManager;