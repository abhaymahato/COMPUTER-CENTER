import { useState, useEffect, FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { LucideIcon } from './LucideIcon';
import { COURSES } from '../data';

interface EnrollmentModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedCourseId?: string;
  onSuccess: (studentName: string, courseName: string) => void;
}

export function EnrollmentModal({ isOpen, onClose, preselectedCourseId, onSuccess }: EnrollmentModalProps) {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [courseId, setCourseId] = useState(preselectedCourseId || COURSES[0].id);
  const [preferredBatch, setPreferredBatch] = useState<'morning' | 'afternoon' | 'evening'>('morning');
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Sync state if preselectedCourseId changes
  useEffect(() => {
    if (preselectedCourseId) {
      setCourseId(preselectedCourseId);
    }
  }, [preselectedCourseId]);

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!fullName.trim()) newErrors.fullName = 'Full Name is required';
    if (!email.trim()) {
      newErrors.email = 'Email address is required';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = 'Email address is invalid';
    }
    if (!phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^[0-9\s+-]{10,15}$/.test(phone)) {
      newErrors.phone = 'Please enter a valid phone number';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    // Simulate API request
    setTimeout(() => {
      const course = COURSES.find(c => c.id === courseId);
      setIsSubmitting(false);
      onSuccess(fullName, course ? course.name : 'Selected Course');
      
      // Reset form
      setFullName('');
      setEmail('');
      setPhone('');
      setMessage('');
      onClose();
    }, 1200);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div id="enrollment-modal-overlay" className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            id="enrollment-modal-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-slate-950/60 backdrop-blur-sm"
          />

          {/* Modal Container */}
          <motion.div
            id="enrollment-modal-content"
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: 'spring', duration: 0.5 }}
            className="relative w-full max-w-lg overflow-hidden rounded-2xl bg-white shadow-2xl z-10 border border-slate-100"
          >
            {/* Header branding band */}
            <div className="bg-gradient-to-r from-slate-900 via-slate-950 to-slate-900 px-6 py-5 text-white flex justify-between items-center">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-cyan-500/10 rounded-lg border border-cyan-500/20 text-cyan-400">
                  <LucideIcon name="GraduationCap" size={20} />
                </div>
                <div>
                  <h3 className="text-lg font-bold">Inquiry & Admission Form</h3>
                  <p className="text-xs text-slate-400">Unique Computer Center</p>
                </div>
              </div>
              <button
                id="close-enrollment-modal"
                onClick={onClose}
                className="rounded-full p-1.5 text-slate-400 hover:bg-slate-800 hover:text-white transition-colors"
                aria-label="Close dialog"
              >
                <LucideIcon name="X" size={18} />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="p-6 space-y-4 max-h-[75vh] overflow-y-auto">
              {/* Full Name */}
              <div className="space-y-1">
                <label className="text-xs font-semibold text-slate-700 block">Full Name *</label>
                <input
                  id="enroll-fullName"
                  type="text"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className={`w-full px-3.5 py-2 rounded-xl border bg-slate-50 focus:bg-white text-sm outline-none transition-all ${
                    errors.fullName ? 'border-red-400 focus:ring-2 focus:ring-red-100' : 'border-slate-200 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-100'
                  }`}
                  placeholder="Enter your full name"
                />
                {errors.fullName && <p className="text-xs text-red-500 mt-0.5">{errors.fullName}</p>}
              </div>

              {/* Grid (Email & Phone) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-xs font-semibold text-slate-700 block">Email Address *</label>
                  <input
                    id="enroll-email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className={`w-full px-3.5 py-2 rounded-xl border bg-slate-50 focus:bg-white text-sm outline-none transition-all ${
                      errors.email ? 'border-red-400 focus:ring-2 focus:ring-red-100' : 'border-slate-200 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-100'
                    }`}
                    placeholder="name@example.com"
                  />
                  {errors.email && <p className="text-xs text-red-500 mt-0.5">{errors.email}</p>}
                </div>
                <div className="space-y-1">
                  <label className="text-xs font-semibold text-slate-700 block">Phone Number *</label>
                  <input
                    id="enroll-phone"
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className={`w-full px-3.5 py-2 rounded-xl border bg-slate-50 focus:bg-white text-sm outline-none transition-all ${
                      errors.phone ? 'border-red-400 focus:ring-2 focus:ring-red-100' : 'border-slate-200 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-100'
                    }`}
                    placeholder="e.g. +91 9876543210"
                  />
                  {errors.phone && <p className="text-xs text-red-500 mt-0.5">{errors.phone}</p>}
                </div>
              </div>

              {/* Course Selection */}
              <div className="space-y-1">
                <label className="text-xs font-semibold text-slate-700 block">Course of Interest *</label>
                <div className="relative">
                  <select
                    id="enroll-course"
                    value={courseId}
                    onChange={(e) => setCourseId(e.target.value)}
                    className="w-full px-3.5 py-2 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white text-sm outline-none appearance-none transition-all focus:border-cyan-500 focus:ring-2 focus:ring-cyan-100"
                  >
                    {COURSES.map(course => (
                      <option key={course.id} value={course.id}>
                        {course.name} ({course.duration})
                      </option>
                    ))}
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3.5 text-slate-400">
                    <LucideIcon name="ChevronRight" className="rotate-90" size={14} />
                  </div>
                </div>
              </div>

              {/* Preferred Batch */}
              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-slate-700 block">Preferred Batch Time</label>
                <div className="grid grid-cols-3 gap-2">
                  {(['morning', 'afternoon', 'evening'] as const).map(batch => (
                    <button
                      key={batch}
                      type="button"
                      id={`batch-${batch}`}
                      onClick={() => setPreferredBatch(batch)}
                      className={`py-2 px-3 rounded-xl border text-xs font-medium capitalize transition-all ${
                        preferredBatch === batch
                          ? 'border-cyan-500 bg-cyan-500/5 text-cyan-600 ring-2 ring-cyan-100'
                          : 'border-slate-200 bg-slate-50 text-slate-600 hover:bg-slate-100'
                      }`}
                    >
                      {batch === 'morning' && '🌅 Morning'}
                      {batch === 'afternoon' && '☀️ Afternoon'}
                      {batch === 'evening' && '🌆 Evening'}
                    </button>
                  ))}
                </div>
              </div>

              {/* Custom Message */}
              <div className="space-y-1">
                <label className="text-xs font-semibold text-slate-700 block">Query or Message (Optional)</label>
                <textarea
                  id="enroll-message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  rows={3}
                  className="w-full px-3.5 py-2 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white text-sm outline-none resize-none transition-all focus:border-cyan-500 focus:ring-2 focus:ring-cyan-100"
                  placeholder="Ask about discount, timings, eligibility or custom requirements..."
                />
              </div>

              {/* Terms warning */}
              <p className="text-[10px] text-slate-400 leading-relaxed text-center">
                By clicking "Submit Inquiry", you agree to receive follow-up callbacks or messages from the admissions deck of Unique Computer Center.
              </p>

              {/* Submit Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  id="enroll-submit"
                  disabled={isSubmitting}
                  className="w-full py-2.5 px-4 rounded-xl font-bold text-white text-sm shadow-md shadow-cyan-500/10 hover:shadow-cyan-500/20 bg-gradient-to-r from-cyan-500 to-cyan-600 hover:from-cyan-400 hover:to-cyan-500 active:scale-[0.98] transition-all flex items-center justify-center space-x-2 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                      </svg>
                      <span>Processing Admissions...</span>
                    </>
                  ) : (
                    <>
                      <span>Submit Inquiry</span>
                      <LucideIcon name="ArrowRight" size={16} />
                    </>
                  )}
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
