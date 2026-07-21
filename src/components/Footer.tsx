import { SectionType } from '../types';
import { LucideIcon } from './LucideIcon';
import { CONTACT_INFO } from '../data';

interface FooterProps {
  onSectionChange: (section: SectionType) => void;
}

export function Footer({ onSectionChange }: FooterProps) {
  const handleNavClick = (section: SectionType) => {
    onSectionChange(section);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="footer-main" className="bg-slate-950 text-slate-400 border-t border-slate-900 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Foot top layout grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          
          {/* Col 1: Brand details */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3 cursor-pointer" onClick={() => handleNavClick('home')}>
              <div className="p-2 bg-cyan-500/10 rounded-xl border border-cyan-500/20 text-cyan-400">
                <LucideIcon name="GraduationCap" size={20} />
              </div>
              <span className="text-lg font-bold text-white tracking-tight">UNIQUE COMPUTER CENTER</span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              Empowering students and professionals with top-grade ISO certified IT and software skills since 2014. Accelerating careers through systematic practical lab classes.
            </p>
            <div className="flex space-x-3 pt-2">
              <a href="#" className="p-2 bg-slate-900 hover:bg-cyan-500/10 hover:text-cyan-400 rounded-lg transition-colors border border-slate-800" aria-label="Facebook">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M9 8H7v3h2v9h3v-9h3l.5-3H12V6c0-.9.2-1.2 1-1.2h2V2h-3C10.5 2 9 3 9 5.5V8z"/></svg>
              </a>
              <a href="#" className="p-2 bg-slate-900 hover:bg-cyan-500/10 hover:text-cyan-400 rounded-lg transition-colors border border-slate-800" aria-label="Twitter">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"/></svg>
              </a>
              <a href="#" className="p-2 bg-slate-900 hover:bg-cyan-500/10 hover:text-cyan-400 rounded-lg transition-colors border border-slate-800" aria-label="LinkedIn">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
              </a>
            </div>
          </div>

          {/* Col 2: Useful links */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider border-b border-slate-900 pb-2">Quick Navigation</h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button onClick={() => handleNavClick('home')} className="hover:text-cyan-400 transition-colors flex items-center space-x-1 cursor-pointer">
                  <span>Home Page</span>
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick('courses')} className="hover:text-cyan-400 transition-colors flex items-center space-x-1 cursor-pointer">
                  <span>Featured Courses</span>
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick('about')} className="hover:text-cyan-400 transition-colors flex items-center space-x-1 cursor-pointer">
                  <span>About Our Story</span>
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick('contact')} className="hover:text-cyan-400 transition-colors flex items-center space-x-1 cursor-pointer">
                  <span>Contact & Support</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Popular Courses shortcuts */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider border-b border-slate-900 pb-2">Top Programs</h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button onClick={() => handleNavClick('courses')} className="hover:text-cyan-400 transition-colors cursor-pointer text-left">
                  Advanced Diploma in Computer Applications (ADCA)
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick('courses')} className="hover:text-cyan-400 transition-colors cursor-pointer text-left">
                  Tally Prime with GST & Accounting
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick('courses')} className="hover:text-cyan-400 transition-colors cursor-pointer text-left">
                  Full-Stack Web Development Course
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick('courses')} className="hover:text-cyan-400 transition-colors cursor-pointer text-left">
                  Advanced Excel & Data Analytics
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Contact quick details */}
          <div className="space-y-4 text-xs">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider border-b border-slate-900 pb-2">Connect Info</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-2.5">
                <LucideIcon name="MapPin" className="text-cyan-400 shrink-0 mt-0.5" size={14} />
                <p className="leading-relaxed">{CONTACT_INFO.address}</p>
              </div>
              <div className="flex items-center space-x-2.5">
                <LucideIcon name="Phone" className="text-cyan-400 shrink-0" size={14} />
                <p>{CONTACT_INFO.phone}</p>
              </div>
              <div className="flex items-center space-x-2.5">
                <LucideIcon name="Mail" className="text-cyan-400 shrink-0" size={14} />
                <p className="break-all">{CONTACT_INFO.email}</p>
              </div>
            </div>
          </div>

        </div>

        {/* Foot divider / legal bar */}
        <div className="pt-8 border-t border-slate-900/60 flex flex-col sm:flex-row items-center justify-between text-[11px] text-slate-500 space-y-4 sm:space-y-0">
          <p>© {new Date().getFullYear()} Unique Computer Center. All rights reserved. ISO 9001:2015 Certified Educational Institute.</p>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-slate-400 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-slate-400 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-slate-400 transition-colors">Verification Deck</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
