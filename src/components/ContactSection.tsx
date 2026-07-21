import { useState, FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { LucideIcon } from './LucideIcon';
import { CONTACT_INFO, COURSES } from '../data';

export function ContactSection() {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [courseInterested, setCourseInterested] = useState(COURSES[0].name);
  const [message, setMessage] = useState('');
  
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!fullName.trim()) newErrors.fullName = 'Full Name is required';
    if (!email.trim()) {
      newErrors.email = 'Email address is required';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = 'Please enter a valid email address';
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

    // Simulate submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1500);
  };

  const handleResetForm = () => {
    setFullName('');
    setEmail('');
    setPhone('');
    setCourseInterested(COURSES[0].name);
    setMessage('');
    setIsSubmitted(false);
  };

  return (
    <div id="contact-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
      
      {/* 1. SECTION HEADER */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <span className="text-xs font-bold uppercase tracking-widest text-cyan-600 block bg-cyan-50 px-3 py-1 rounded-full w-fit mx-auto border border-cyan-100">
          UCC Helpdesk & Admissions
        </span>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-950 tracking-tight">
          We'd Love to Hear From You
        </h1>
        <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
          Have queries about syllabus structure, batch timings, certificates, or placement records? Reach out directly or submit your inquiry to receive a callback within 2 hours.
        </p>
      </div>

      {/* 2. CORE LAYOUT (Contact details + Form) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        
        {/* Left Column: Cards Info */}
        <div className="lg:col-span-5 space-y-6">
          
          <h2 className="text-xl font-bold text-slate-950 pb-2 border-b border-slate-200">
            Contact Information
          </h2>

          <div className="grid grid-cols-1 gap-4">
            
            {/* Address */}
            <div className="p-5 bg-white border border-slate-200/50 rounded-2xl shadow-sm flex items-start space-x-4">
              <div className="p-3 bg-cyan-500/10 text-cyan-600 rounded-xl shrink-0">
                <LucideIcon name="MapPin" size={18} />
              </div>
              <div className="space-y-1">
                <h4 className="text-xs font-bold uppercase text-slate-400 tracking-wider">Campus Address</h4>
                <p className="text-xs sm:text-sm text-slate-800 font-medium leading-relaxed">
                  {CONTACT_INFO.address}
                </p>
              </div>
            </div>

            {/* Phone numbers */}
            <div className="p-5 bg-white border border-slate-200/50 rounded-2xl shadow-sm flex items-start space-x-4">
              <div className="p-3 bg-cyan-500/10 text-cyan-600 rounded-xl shrink-0">
                <LucideIcon name="Phone" size={18} />
              </div>
              <div className="space-y-1">
                <h4 className="text-xs font-bold uppercase text-slate-400 tracking-wider">Call / WhatsApp</h4>
                <p className="text-xs sm:text-sm text-slate-800 font-mono font-bold leading-relaxed">
                  {CONTACT_INFO.phone}
                </p>
              </div>
            </div>

            {/* Email Address */}
            <div className="p-5 bg-white border border-slate-200/50 rounded-2xl shadow-sm flex items-start space-x-4">
              <div className="p-3 bg-cyan-500/10 text-cyan-600 rounded-xl shrink-0">
                <LucideIcon name="Mail" size={18} />
              </div>
              <div className="space-y-1 col-span-1 min-w-0">
                <h4 className="text-xs font-bold uppercase text-slate-400 tracking-wider">Official Email</h4>
                <p className="text-xs sm:text-sm text-slate-800 font-mono font-medium leading-relaxed break-all">
                  {CONTACT_INFO.email}
                </p>
              </div>
            </div>

            {/* Operating hours */}
            <div className="p-5 bg-white border border-slate-200/50 rounded-2xl shadow-sm flex items-start space-x-4">
              <div className="p-3 bg-cyan-500/10 text-cyan-600 rounded-xl shrink-0">
                <LucideIcon name="Clock" size={18} />
              </div>
              <div className="space-y-2 w-full">
                <h4 className="text-xs font-bold uppercase text-slate-400 tracking-wider">Operating Hours</h4>
                <div className="space-y-1 text-xs">
                  {CONTACT_INFO.operatingHours.map((oh, i) => (
                    <div key={i} className="flex justify-between items-center text-slate-700 font-semibold border-b border-slate-50 pb-1 last:border-0 last:pb-0">
                      <span>{oh.days}</span>
                      <span className="text-slate-500 font-mono font-normal">{oh.hours}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>

        </div>

        {/* Right Column: Interactive Inquiry Form */}
        <div className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-2xl border border-slate-200/60 shadow-md">
          
          <AnimatePresence mode="wait">
            {!isSubmitted ? (
              <motion.div
                key="contact-form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="space-y-6"
              >
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-slate-900">Send an Online Inquiry</h3>
                  <p className="text-xs text-slate-400 mt-1">Provide your credentials and interest to get instant guidance.</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Name field */}
                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-slate-700 block">Full Name *</label>
                    <input
                      id="contact-fullName"
                      type="text"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      className={`w-full px-3.5 py-2.5 rounded-xl border bg-slate-50 focus:bg-white text-xs sm:text-sm outline-none transition-all ${
                        errors.fullName ? 'border-red-400 focus:ring-2 focus:ring-red-100' : 'border-slate-200 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-100'
                      }`}
                      placeholder="e.g. Abhay Kumar"
                    />
                    {errors.fullName && <p className="text-xs text-red-500 mt-0.5">{errors.fullName}</p>}
                  </div>

                  {/* Email & Phone side by side */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="text-xs font-semibold text-slate-700 block">Email Address *</label>
                      <input
                        id="contact-email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className={`w-full px-3.5 py-2.5 rounded-xl border bg-slate-50 focus:bg-white text-xs sm:text-sm outline-none transition-all ${
                          errors.email ? 'border-red-400 focus:ring-2 focus:ring-red-100' : 'border-slate-200 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-100'
                        }`}
                        placeholder="name@example.com"
                      />
                      {errors.email && <p className="text-xs text-red-500 mt-0.5">{errors.email}</p>}
                    </div>
                    <div className="space-y-1">
                      <label className="text-xs font-semibold text-slate-700 block">Phone Number *</label>
                      <input
                        id="contact-phone"
                        type="tel"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className={`w-full px-3.5 py-2.5 rounded-xl border bg-slate-50 focus:bg-white text-xs sm:text-sm outline-none transition-all ${
                          errors.phone ? 'border-red-400 focus:ring-2 focus:ring-red-100' : 'border-slate-200 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-100'
                        }`}
                        placeholder="+91 98765 43210"
                      />
                      {errors.phone && <p className="text-xs text-red-500 mt-0.5">{errors.phone}</p>}
                    </div>
                  </div>

                  {/* Course dropdown */}
                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-slate-700 block">Course Interested In</label>
                    <div className="relative">
                      <select
                        id="contact-course"
                        value={courseInterested}
                        onChange={(e) => setCourseInterested(e.target.value)}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white text-xs sm:text-sm outline-none appearance-none transition-all focus:border-cyan-500 focus:ring-2 focus:ring-cyan-100"
                      >
                        {COURSES.map((course) => (
                          <option key={course.id} value={course.name}>
                            {course.name} ({course.duration})
                          </option>
                        ))}
                      </select>
                      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3.5 text-slate-400">
                        <LucideIcon name="ChevronRight" className="rotate-90" size={14} />
                      </div>
                    </div>
                  </div>

                  {/* Message */}
                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-slate-700 block">Your Message / Requirements</label>
                    <textarea
                      id="contact-message"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      rows={4}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white text-xs sm:text-sm outline-none resize-none transition-all focus:border-cyan-500 focus:ring-2 focus:ring-cyan-100"
                      placeholder="Ask about discounts, batch start dates, or syllabus details..."
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    id="contact-submit"
                    disabled={isSubmitting}
                    className="w-full py-3 px-4 rounded-xl font-bold text-white text-sm bg-gradient-to-r from-cyan-500 to-cyan-600 hover:from-cyan-400 hover:to-cyan-500 shadow-md hover:shadow-cyan-500/20 active:scale-[0.98] transition-all flex items-center justify-center space-x-2 cursor-pointer disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                        </svg>
                        <span>Transmitting Inquiry...</span>
                      </>
                    ) : (
                      <>
                        <span>Submit Secure Inquiry</span>
                        <LucideIcon name="ArrowRight" size={16} />
                      </>
                    )}
                  </button>
                </form>
              </motion.div>
            ) : (
              <motion.div
                key="success-card"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                className="text-center py-10 space-y-6"
              >
                <div className="w-16 h-16 bg-emerald-50 text-emerald-500 rounded-full flex items-center justify-center mx-auto border border-emerald-100">
                  <LucideIcon name="Check" size={32} />
                </div>
                
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-slate-900">Inquiry Received Successfully!</h3>
                  <p className="text-xs text-slate-500 max-w-sm mx-auto leading-relaxed">
                    Thank you, <strong className="text-slate-800">{fullName}</strong>. Your inquiry about the <strong className="text-cyan-600">{courseInterested}</strong> has been successfully registered in our admissions ledger.
                  </p>
                  <p className="text-xs text-cyan-600 font-bold bg-cyan-50 px-3 py-1.5 rounded-full w-fit mx-auto mt-2">
                    💬 An advisor will call you at {phone} soon.
                  </p>
                </div>

                <div className="pt-4">
                  <button
                    id="reset-contact-form"
                    onClick={handleResetForm}
                    className="px-6 py-2.5 rounded-xl border border-slate-200 text-slate-700 hover:bg-slate-50 text-xs font-bold transition-all duration-200 cursor-pointer"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

        </div>

      </div>

      {/* 3. EMBEDDED GOOGLE MAPS PLACEHOLDER */}
      <section className="space-y-4">
        <div className="flex items-center space-x-2.5 text-slate-950 font-bold">
          <LucideIcon name="MapPin" className="text-cyan-600" size={18} />
          <h3 className="text-lg">Location & Direction Map Area</h3>
        </div>
        <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-md bg-slate-100 relative h-96 w-full">
          {/* Real Google Maps embed link */}
          <iframe
            id="google-maps-iframe"
            title="Unique Computer Center Location Map"
            src={CONTACT_INFO.mapEmbedUrl}
            className="w-full h-full border-0"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>

    </div>
  );
}
