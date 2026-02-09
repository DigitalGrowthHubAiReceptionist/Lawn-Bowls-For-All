import React, { useState, useEffect } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, ShoppingCart, User as UserIcon, LogOut } from 'lucide-react';
import { Button } from './Button';
import { useAuth } from '../context/AuthContext';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { user, logout } = useAuth();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const navItems = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'Shop', path: '/shop' },
    { label: 'Blog', path: '/blog' },
    { label: 'Videos', path: '/videos' },
    { label: 'Events', path: '/events' },
    { label: 'Contact', path: '/contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-lb-blue shadow-lg py-2' : 'bg-lb-blue/95 py-4'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
             <NavLink to="/" className="flex items-center space-x-2">
                <div className="bg-lb-yellow p-2 rounded-full">
                   <div className="w-4 h-4 rounded-full bg-lb-blue"></div>
                </div>
                <span className="font-bold text-2xl text-white tracking-tight">LBFA</span>
             </NavLink>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex md:items-center md:space-x-6">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `text-sm font-medium transition-colors duration-200 ${
                    isActive ? 'text-lb-yellow' : 'text-gray-300 hover:text-white'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
            
            <div className="flex items-center space-x-4 pl-4 border-l border-gray-600">
               <button className="text-gray-300 hover:text-lb-yellow transition-colors relative">
                  <ShoppingCart size={20} />
               </button>
               
               {user ? (
                 <div className="flex items-center space-x-3">
                    <NavLink to="/profile" className="flex items-center space-x-2 text-white hover:text-lb-yellow transition-colors">
                      <img src={user.avatar} alt={user.name} className="w-8 h-8 rounded-full border border-gray-400" />
                      <span className="text-sm font-medium hidden lg:inline-block">{user.name}</span>
                    </NavLink>
                    <button onClick={handleLogout} className="text-gray-300 hover:text-white" title="Logout">
                      <LogOut size={18} />
                    </button>
                 </div>
               ) : (
                 <div className="flex items-center space-x-3">
                   <NavLink to="/login" className="text-sm font-medium text-gray-300 hover:text-white">Log in</NavLink>
                   <NavLink to="/signup">
                     <Button variant="primary" size="sm">Join Club</Button>
                   </NavLink>
                 </div>
               )}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center md:hidden space-x-4">
             <button className="text-gray-300 hover:text-lb-yellow">
                  <ShoppingCart size={20} />
             </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-300 hover:text-white hover:bg-lb-blue focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      <div className={`md:hidden transition-all duration-300 overflow-hidden ${isOpen ? 'max-h-screen bg-lb-blue border-t border-gray-700' : 'max-h-0'}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `block px-3 py-2 rounded-md text-base font-medium ${
                  isActive ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-800 hover:text-white'
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
          
          <div className="mt-4 pt-4 border-t border-gray-700 px-3">
            {user ? (
              <div className="space-y-3">
                <div className="flex items-center space-x-3 mb-4">
                  <img src={user.avatar} alt={user.name} className="w-10 h-10 rounded-full" />
                  <div>
                    <div className="text-white font-medium">{user.name}</div>
                    <div className="text-gray-400 text-sm">{user.email}</div>
                  </div>
                </div>
                <NavLink to="/profile" className="block w-full text-center py-2 bg-gray-800 rounded text-white">View Profile</NavLink>
                <button onClick={handleLogout} className="block w-full text-center py-2 bg-red-600/80 rounded text-white mt-2">Logout</button>
              </div>
            ) : (
              <div className="space-y-3">
                <NavLink to="/login" className="block text-center text-gray-300 hover:text-white py-2">Log in</NavLink>
                <NavLink to="/signup" className="block">
                  <Button variant="primary" className="w-full">Join Club</Button>
                </NavLink>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};