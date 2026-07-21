import { useState } from 'react';
import { SectionType } from '../types';
import { LucideIcon } from './LucideIcon';

interface NavbarProps {
  activeSection: SectionType;
  onSectionChange: (section: SectionType) => void;
  onEnrollClick: () => void;
}

export function Navbar({ activeSection, onSectionChange, onEnrollClick }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);

  const navItems: { label: string; value: SectionType }[] = [
    { label: 'Home', value: 'home' },
    { label: 'Courses', value: 'courses' },
    { label: 'About Us', value: 'about' },
    { label: 'Contact Us', value: 'contact' },
  ];

  const handleNavClick = (section: SectionType) => {
    onSectionChange(section);
    setIsOpen(false);
    
    // Smooth scroll to top when changing section
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav id="navbar-main" className="sticky top-0 z-40 w-full bg-slate-900 border-b border-slate-800 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo Brand area */}
          <div 
            id="brand-logo" 
            onClick={() => handleNavClick('home')} 
            className="flex items-center space-x-3 cursor-pointer group"
          >
            <div className="p-2.5 bg-cyan-500/10 rounded-xl border border-cyan-500/30 text-cyan-400 shadow-inner group-hover:bg-cyan-500/20 group-hover:border-cyan-500/50 transition-all duration-300">
              <LucideIcon name="GraduationCap" size={24} className="group-hover:scale-110 transition-transform duration-300" />
            </div>
            <div>
              <span className="text-lg md:text-xl font-extrabold tracking-tight text-white flex items-center">
                UNIQUE
              </span>
              <span className="text-[10px] uppercase tracking-widest text-cyan-400 block font-bold leading-none">
                Computer Center
              </span>
            </div>
          </div>

          {/* Desktop Navigation links */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <button
                key={item.value}
                id={`nav-item-${item.value}`}
                onClick={() => handleNavClick(item.value)}
                className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-200 cursor-pointer ${
                  activeSection === item.value
                    ? 'text-cyan-400 bg-slate-800/60 border border-slate-700/50 shadow-inner'
                    : 'text-slate-300 hover:text-white hover:bg-slate-800/40 border border-transparent'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* CTA enroll trigger button - Desktop */}
          <div className="hidden md:block">
            <button
              id="nav-enroll-button"
              onClick={onEnrollClick}
              className="px-5 py-2.5 bg-gradient-to-r from-cyan-500 to-cyan-600 hover:from-cyan-400 hover:to-cyan-500 active:scale-[0.97] text-white font-bold text-sm rounded-xl shadow-lg shadow-cyan-500/10 hover:shadow-cyan-500/20 transition-all duration-200 cursor-pointer flex items-center space-x-2"
            >
              <span>Enroll Now</span>
              <LucideIcon name="Sparkles" size={14} />
            </button>
          </div>

          {/* Mobile responsive toggle */}
          <div className="flex md:hidden">
            <button
              id="mobile-menu-toggle"
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              <LucideIcon name={isOpen ? 'X' : 'Menu'} size={22} />
            </button>
          </div>

        </div>
      </div>

      {/* Mobile responsive drawer */}
      {isOpen && (
        <div id="mobile-navigation-drawer" className="md:hidden bg-slate-900 border-t border-slate-800/80 shadow-lg px-4 pt-2 pb-6 space-y-2">
          {navItems.map((item) => (
            <button
              key={item.value}
              id={`mobile-nav-item-${item.value}`}
              onClick={() => handleNavClick(item.value)}
              className={`w-full text-left px-4 py-3 rounded-xl text-sm font-semibold transition-all duration-150 cursor-pointer flex items-center justify-between ${
                activeSection === item.value
                  ? 'text-cyan-400 bg-slate-800 border-l-4 border-cyan-400 shadow-inner'
                  : 'text-slate-300 hover:text-white hover:bg-slate-800/50'
              }`}
            >
              <span>{item.label}</span>
              <LucideIcon name="ChevronRight" size={14} className={activeSection === item.value ? 'text-cyan-400' : 'text-slate-600'} />
            </button>
          ))}
          <div className="pt-4 border-t border-slate-800/60 px-4">
            <button
              id="mobile-enroll-button"
              onClick={() => {
                setIsOpen(false);
                onEnrollClick();
              }}
              className="w-full text-center py-3 bg-cyan-500 hover:bg-cyan-400 text-white font-bold text-sm rounded-xl shadow-md transition-all duration-200 cursor-pointer"
            >
              Enroll Now
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
