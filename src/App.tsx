import { useState } from 'react';
import { motion, AnimatePresence, useScroll, useSpring } from 'motion/react';
import { SectionType } from './types';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HomeSection } from './components/HomeSection';
import { CoursesSection } from './components/CoursesSection';
import { AboutSection } from './components/AboutSection';
import { ContactSection } from './components/ContactSection';
import { EnrollmentModal } from './components/EnrollmentModal';
import { LucideIcon } from './components/LucideIcon';

export default function App() {
  const [activeSection, setActiveSection] = useState<SectionType>('home');
  const [isEnrollOpen, setIsEnrollOpen] = useState(false);
  const [selectedCourseId, setSelectedCourseId] = useState<string | undefined>(undefined);
  
  // Custom scroll progress hook for stunning "Scroll Flash" graphic progress bar
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001
  });
  
  // Custom Toast Notification State
  const [toast, setToast] = useState<{ show: boolean; studentName: string; courseName: string } | null>(null);

  const handleEnrollClick = (courseId?: string) => {
    setSelectedCourseId(courseId);
    setIsEnrollOpen(true);
  };

  const handleEnrollSuccess = (studentName: string, courseName: string) => {
    setToast({
      show: true,
      studentName,
      courseName
    });

    // Automatically hide after 6 seconds
    setTimeout(() => {
      setToast(null);
    }, 6000);
  };

  return (
    <div id="ucc-app-root" className="min-h-screen flex flex-col bg-slate-50 relative">
      
      {/* Dynamic top scroll-to-flash graphic progress bar */}
      <motion.div 
        id="scroll-to-flash-bar"
        className="fixed top-0 left-0 right-0 h-[5px] bg-gradient-to-r from-cyan-500 via-teal-400 to-cyan-300 z-[9999] origin-left shadow-[0_0_12px_rgba(6,182,212,0.95)]"
        style={{ scaleX }}
      />
      
      {/* Dynamic Toast Feedback Overlay */}
      <AnimatePresence>
        {toast?.show && (
          <motion.div
            id="toast-notification"
            initial={{ opacity: 0, y: -50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            className="fixed top-24 right-4 left-4 sm:left-auto sm:right-6 z-50 max-w-md w-full bg-slate-900 text-white rounded-2xl shadow-2xl border border-cyan-500/30 p-5 flex items-start space-x-4"
          >
            <div className="p-2.5 bg-cyan-500/10 text-cyan-400 rounded-xl border border-cyan-500/20 shrink-0">
              <LucideIcon name="CheckCircle2" size={22} />
            </div>
            <div className="flex-1 min-w-0 space-y-1">
              <div className="flex items-center justify-between">
                <h4 className="text-sm font-bold text-white">Admission Request Logged!</h4>
                <button 
                  onClick={() => setToast(null)}
                  className="text-slate-400 hover:text-white transition-colors p-0.5 rounded-md hover:bg-slate-800"
                >
                  <LucideIcon name="X" size={14} />
                </button>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                Thank you <strong className="text-white font-semibold">{toast.studentName}</strong>. Your provisional enrollment query for <strong className="text-cyan-400 font-semibold">{toast.courseName}</strong> has been received by Unique Computer Center. Our counselor will contact you shortly!
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Persistent Navigation Bar */}
      <Navbar 
        activeSection={activeSection} 
        onSectionChange={setActiveSection} 
        onEnrollClick={() => handleEnrollClick()} 
      />

      {/* Main Content Area with elegant Transition Switches */}
      <main id="main-content-layout" className="flex-grow">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeSection}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.35, ease: 'easeInOut' }}
          >
            {activeSection === 'home' && (
              <HomeSection 
                onSectionChange={setActiveSection} 
                onEnrollClick={handleEnrollClick} 
              />
            )}
            {activeSection === 'courses' && (
              <CoursesSection 
                onEnrollClick={handleEnrollClick} 
              />
            )}
            {activeSection === 'about' && (
              <AboutSection />
            )}
            {activeSection === 'contact' && (
              <ContactSection />
            )}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Persistent Footer */}
      <Footer onSectionChange={setActiveSection} />

      {/* Floating WhatsApp Sticky Widget */}
      <div className="fixed bottom-6 right-6 z-50 group flex flex-col items-end">
        {/* Tooltip bubble */}
        <div className="mb-2 bg-slate-900 text-white text-[11px] font-bold py-1.5 px-3 rounded-lg shadow-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none border border-slate-800/80 flex items-center space-x-1.5 whitespace-nowrap">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse inline-block"></span>
          <span>Chat on WhatsApp</span>
        </div>
        
        {/* Main Floating Circle Button */}
        <a
          href="https://wa.me/916290479278?text=Hello%20Unique%20Computer%20Center%2C%20I%20am%20interested%20in%20enrolling%20for%20a%20computer%20course."
          target="_blank"
          rel="noopener noreferrer"
          id="whatsapp-floating-widget"
          className="w-14 h-14 bg-emerald-500 hover:bg-emerald-400 text-white rounded-full shadow-2xl flex items-center justify-center hover:scale-110 active:scale-95 transition-all duration-300 relative"
          aria-label="Chat with Unique Computer Center on WhatsApp"
        >
          {/* Pulsing ring */}
          <span className="absolute inset-0 rounded-full bg-emerald-500/30 animate-ping -z-10" />
          
          {/* Custom crisp SVG for WhatsApp */}
          <svg className="w-7 h-7 fill-current" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.456 5.709 1.456h.008c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413" />
          </svg>
        </a>
      </div>

      {/* Enrollment Dialog Modal */}
      <EnrollmentModal
        isOpen={isEnrollOpen}
        onClose={() => setIsEnrollOpen(false)}
        preselectedCourseId={selectedCourseId}
        onSuccess={handleEnrollSuccess}
      />

    </div>
  );
}
