
import React, { useState } from 'react';
import { Home, User, Code, Briefcase, Mail, Menu, X } from 'lucide-react';

interface NavigationProps {
  currentPage: string;
  onPageChange: (page: string) => void;
  onPagePreview: (page: string | null) => void;
}

const Navigation = ({ currentPage, onPageChange, onPagePreview }: NavigationProps) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'about', label: 'About', icon: User },
    { id: 'skills', label: 'Skills', icon: Code },
    { id: 'projects', label: 'Projects', icon: Briefcase },
    { id: 'contact', label: 'Contact', icon: Mail },
  ];

  const handlePageChange = (page: string) => {
    onPageChange(page);
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="fixed top-6 left-1/2 transform -translate-x-1/2 z-40 hidden md:block">
        <div className="glass rounded-full px-6 py-3 shadow-2xl">
          <div className="flex items-center space-x-6">
            {navItems.map(({ id, label, icon: Icon }) => (
              <button
                key={id}
                onClick={() => handlePageChange(id)}
                onMouseEnter={() => onPagePreview(id)}
                onMouseLeave={() => onPagePreview(null)}
                className={`
                  group relative flex items-center space-x-2 px-4 py-2 rounded-full
                  transition-all duration-300 cursor-hover
                  ${currentPage === id 
                    ? 'bg-teal-600 text-white shadow-lg shadow-teal-500/50' 
                    : 'text-slate-300 hover:text-teal-400 hover:bg-white/10 hover:scale-105'
                  }
                `}
                data-cursor-type="hover"
              >
                <Icon 
                  size={18} 
                  className="transition-all duration-300 group-hover:scale-110 group-hover:rotate-12" 
                />
                <span className="text-sm font-medium transition-all duration-300 group-hover:tracking-wide">
                  {label}
                </span>
                {currentPage === id && (
                  <div className="absolute inset-0 rounded-full animate-glow" />
                )}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <nav className="md:hidden fixed top-4 right-4 z-40">
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="glass w-12 h-12 rounded-full flex items-center justify-center text-slate-300 hover:text-teal-400 transition-all duration-300 hover:scale-110"
        >
          {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed inset-0 z-30 bg-slate-900/80 backdrop-blur-sm">
          <div className="fixed top-20 right-4 glass rounded-2xl p-4 shadow-2xl">
            <div className="flex flex-col space-y-2">
              {navItems.map(({ id, label, icon: Icon }) => (
                <button
                  key={id}
                  onClick={() => handlePageChange(id)}
                  className={`
                    group flex items-center space-x-3 px-4 py-3 rounded-xl
                    transition-all duration-300 w-full text-left
                    ${currentPage === id 
                      ? 'bg-teal-600 text-white shadow-lg shadow-teal-500/50' 
                      : 'text-slate-300 hover:text-teal-400 hover:bg-white/10'
                    }
                  `}
                >
                  <Icon 
                    size={20} 
                    className="transition-all duration-300 group-hover:scale-110" 
                  />
                  <span className="font-medium">{label}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navigation;
