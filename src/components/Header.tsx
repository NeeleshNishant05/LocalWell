import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Building2 } from 'lucide-react';

const Header: React.FC = () => {
  const location = useLocation();

  const navItems = [
    { path: '/purchases', label: 'Purchases' },
    { path: '/stock', label: 'Stock' },
    { path: '/sales', label: 'Sales' },
  ];

  return (
    <header className="bg-white border-b border-gray-200">
      <div className="px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-8">
            <div className="flex items-center space-x-2">
              <Building2 className="h-8 w-8 text-pink-500" />
              <span className="text-2xl font-bold text-gray-900">
                local<span className="text-pink-500">well</span>
                <span className="text-xs align-super">®</span>
              </span>
            </div>
            
            <nav className="flex space-x-8">
              {navItems.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  className={({ isActive }) =>
                    `relative px-1 py-2 text-sm font-medium transition-colors duration-200 ${
                      isActive
                        ? 'text-pink-600 border-b-2 border-pink-600'
                        : 'text-gray-600 hover:text-gray-900'
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              ))}
            </nav>
          </div>
          
          <div className="text-right">
            <div className="text-sm font-medium text-gray-900">NA</div>
            <div className="text-xs text-gray-500">PORTAL</div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;