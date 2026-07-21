import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
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
