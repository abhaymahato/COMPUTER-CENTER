import { useState } from 'react';
import { motion } from 'motion/react';
import { SectionType, Course } from '../types';
import { LucideIcon } from './LucideIcon';
import { COURSES, TESTIMONIALS, USPS, STATS } from '../data';

interface HomeSectionProps {
  onSectionChange: (section: SectionType) => void;
  onEnrollClick: (courseId?: string) => void;
}

export function HomeSection({ onSectionChange, onEnrollClick }: HomeSectionProps) {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const featuredCourses = COURSES.filter(course => course.popular);

  const handleNextTestimonial = () => {
    setActiveTestimonial((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const handlePrevTestimonial = () => {
    setActiveTestimonial((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  return (
    <div id="home-section" className="space-y-24 pb-20">
      
      {/* 1. HERO SECTION */}
      <section id="hero-banner" className="relative min-h-[85vh] bg-slate-950 flex items-center overflow-hidden pt-12 md:pt-0">
        {/* Ambient background glows */}
        <div className="absolute top-1/4 -left-1/4 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-1/4 -right-1/4 w-[600px] h-[600px] bg-slate-500/5 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Hero Left Content */}
            <motion.div 
              id="hero-content"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-7 space-y-6 text-center lg:text-left"
            >
              <div className="inline-flex items-center space-x-2 bg-slate-900 border border-slate-800 rounded-full px-4 py-1.5 text-cyan-400 font-semibold text-xs tracking-wide uppercase shadow-inner">
                <LucideIcon name="Sparkles" size={12} />
                <span>Govt. Registered & ISO 9001:2015 Certified</span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white leading-tight">
                Empowering Your Future with <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-cyan-300">Tech Skills</span>
              </h1>
              
              <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                Master computers from fundamental operations to advanced development and professional accounting. Join Unique Computer Center today to study with verified experts on dedicated workstations.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
                <button
                  id="hero-enroll-cta"
                  onClick={() => onEnrollClick()}
                  className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-cyan-500 to-cyan-600 hover:from-cyan-400 hover:to-cyan-500 text-white font-bold text-base rounded-xl shadow-xl shadow-cyan-500/10 hover:shadow-cyan-500/20 active:scale-[0.98] transition-all cursor-pointer flex items-center justify-center space-x-2.5"
                >
                  <span>Enroll Now</span>
                  <LucideIcon name="ArrowRight" size={18} />
                </button>
                <button
                  id="hero-explore-cta"
                  onClick={() => onSectionChange('courses')}
                  className="w-full sm:w-auto px-8 py-4 bg-slate-900 hover:bg-slate-800 text-slate-200 hover:text-white font-bold text-base rounded-xl border border-slate-800 hover:border-slate-700 transition-all cursor-pointer flex items-center justify-center space-x-2"
                >
                  <span>Explore Courses</span>
                  <LucideIcon name="GraduationCap" size={18} />
                </button>
              </div>

              {/* Trust Indicators */}
              <div className="pt-8 border-t border-slate-900/60 flex flex-wrap items-center justify-center lg:justify-start gap-x-8 gap-y-3 text-xs text-slate-400">
                <div className="flex items-center space-x-2">
                  <LucideIcon name="CheckCircle2" className="text-cyan-400" size={14} />
                  <span>100% Practical Sessions</span>
                </div>
                <div className="flex items-center space-x-2">
                  <LucideIcon name="CheckCircle2" className="text-cyan-400" size={14} />
                  <span>Job Placement Deck</span>
                </div>
                <div className="flex items-center space-x-2">
                  <LucideIcon name="CheckCircle2" className="text-cyan-400" size={14} />
                  <span>Flexible Batch timings</span>
                </div>
              </div>
            </motion.div>

            {/* Hero Right Visual Column */}
            <motion.div 
              id="hero-image-container"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:col-span-5 relative"
            >
              <div className="relative rounded-2xl overflow-hidden border border-slate-800 bg-slate-900/60 shadow-2xl p-2.5 max-w-lg mx-auto">
                <div className="absolute top-0 right-0 p-3 bg-cyan-500 text-slate-950 text-xs font-black uppercase tracking-wider rounded-bl-xl rounded-tr-lg z-10 shadow-lg flex items-center space-x-1">
                  <LucideIcon name="Award" size={12} />
                  <span>ISO Certified</span>
                </div>
                <img
                  src="/src/assets/images/computer_lab_hero_1784636454709.jpg"
                  alt="Unique Computer Center Lab"
                  className="w-full h-auto object-cover rounded-xl shadow-inner aspect-[4/3] filter brightness-95"
                  referrerPolicy="no-referrer"
                />
                {/* Visual Glass overlays */}
                <div className="absolute -bottom-6 -left-6 bg-slate-900/90 backdrop-blur-md border border-slate-800 p-4 rounded-xl shadow-xl flex items-center space-x-3 max-w-[200px]">
                  <div className="p-2 bg-cyan-500/20 text-cyan-400 rounded-lg">
                    <LucideIcon name="Users" size={20} />
                  </div>
                  <div>
                    <p className="text-xs text-slate-400 font-medium leading-none">Graduates</p>
                    <p className="text-lg font-black text-white">5,000+</p>
                  </div>
                </div>
              </div>
            </motion.div>

          </div>
        </div>

        {/* Dynamic down-scroll bouncing indicator with glow flash */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center space-y-1.5 cursor-pointer select-none z-20 animate-bounce-subtle">
          <span className="text-[10px] font-bold tracking-widest text-cyan-400/80 uppercase">Scroll to Discover</span>
          <div className="w-5 h-8 border border-slate-700/80 rounded-full flex justify-center p-1">
            <motion.div 
              className="w-1 h-1.5 bg-cyan-400 rounded-full shadow-[0_0_8px_rgba(34,211,238,0.8)]"
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
            />
          </div>
        </div>
      </section>

      {/* 2. STATISTICS STRIP */}
      <motion.section 
        id="stats-banner" 
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.65, ease: "easeOut" }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-20 relative z-20"
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 bg-white border border-slate-200/60 p-6 rounded-2xl shadow-xl divide-x divide-slate-100 overflow-hidden relative group">
          {/* Subtle scroll reflection glow sweep inside the stats container */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
            <div className="absolute inset-0 w-[30%] h-full bg-gradient-to-r from-transparent via-cyan-400/5 to-transparent -skew-x-20 animate-sweep-flash" />
          </div>
          
          {STATS.map((stat, i) => (
            <div key={i} id={`stat-${i}`} className="text-center p-4 space-y-1 relative z-10 hover:scale-105 transition-transform duration-300">
              <span className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-950 block tracking-tight relative">
                {stat.value}
                <span className="absolute -top-1 -right-2 w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping opacity-75" />
              </span>
              <span className="text-xs sm:text-sm text-slate-500 font-semibold block uppercase tracking-wider">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </motion.section>

      {/* 3. FEATURED COURSES SECTION */}
      <section id="featured-courses" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-cyan-600 block">OUR POPULAR CURRICULUM</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight">
            Specialized Career-Oriented Programs
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
            Equip yourself with structured modules curated by industry practitioners. Explore our most in-demand technical courses designed to get you hired.
          </p>
        </div>

        {/* Courses grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredCourses.map((course, idx) => (
            <motion.div 
              key={course.id} 
              id={`featured-${course.id}`}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: idx * 0.1, ease: "easeOut" }}
              className="bg-white rounded-2xl border border-slate-200/50 p-6 shadow-sm hover:shadow-xl hover:border-slate-300/60 transition-all duration-300 flex flex-col justify-between group relative overflow-hidden"
            >
              {/* Amazing Scroll-to-Flash Shimmer Graphic */}
              <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-2xl z-0">
                <div className="absolute inset-0 w-[45%] h-full bg-gradient-to-r from-transparent via-cyan-400/10 to-transparent -skew-x-20 translate-x-[-180%] group-hover:translate-x-[250%] transition-transform duration-1000 ease-out" />
              </div>

              <div className="space-y-4 relative z-10">
                <div className="flex justify-between items-start">
                  <div className="p-3 bg-cyan-500/5 text-cyan-600 rounded-xl border border-cyan-500/10 group-hover:bg-cyan-500 group-hover:text-white transition-colors duration-300">
                    <LucideIcon name={course.icon} size={22} />
                  </div>
                  <span className="text-[10px] font-bold text-cyan-600 bg-cyan-50 px-2.5 py-1 rounded-full uppercase tracking-wider">
                    {course.category === 'basic' ? 'Basic & Diploma' : course.category === 'accounting' ? 'Accounting & Finance' : 'Programming'}
                  </span>
                </div>

                <div className="space-y-1.5">
                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-cyan-600 transition-colors">
                    {course.name}
                  </h3>
                  <p className="text-xs text-slate-500 font-mono">Code: {course.code}</p>
                </div>

                <p className="text-xs text-slate-600 leading-relaxed">
                  {course.shortDescription}
                </p>

                <div className="grid grid-cols-2 gap-2 pt-2 text-xs border-t border-slate-100 font-medium text-slate-600">
                  <div className="flex items-center space-x-1.5">
                    <LucideIcon name="Clock" className="text-slate-400" size={13} />
                    <span>{course.duration}</span>
                  </div>
                  <div className="flex items-center space-x-1.5">
                    <LucideIcon name="Award" className="text-slate-400" size={13} />
                    <span>Eligibility: {course.eligibility}</span>
                  </div>
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between relative z-10">
                <div>
                  <p className="text-[10px] text-slate-400 uppercase tracking-wider font-semibold">Scholarship Fee</p>
                  <p className="text-base font-black text-slate-900">{course.fee}</p>
                </div>
                <button
                  id={`btn-enroll-${course.id}`}
                  onClick={() => onEnrollClick(course.id)}
                  className="py-2.5 px-4 rounded-xl text-xs font-bold bg-slate-900 hover:bg-cyan-500 text-slate-100 hover:text-white transition-all duration-300 cursor-pointer flex items-center space-x-1.5"
                >
                  <span>Enroll Now</span>
                  <LucideIcon name="ArrowRight" size={12} />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Explore all CTA link */}
        <div className="text-center pt-10">
          <button
            id="home-view-all-courses"
            onClick={() => onSectionChange('courses')}
            className="inline-flex items-center space-x-2 font-bold text-cyan-600 hover:text-cyan-700 hover:underline transition-all text-sm cursor-pointer"
          >
            <span>View All Vocational Programs</span>
            <LucideIcon name="ChevronRight" size={16} />
          </button>
        </div>
      </section>

      {/* 4. WHY CHOOSE US SECTION */}
      <section id="why-choose-us" className="bg-slate-900 py-20 border-y border-slate-800 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-cyan-400 block">THE UCC ADVANTAGE</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Why Choose Unique Computer Center?
            </h2>
            <p className="text-slate-400 text-sm sm:text-base">
              We stand apart through our commitment to quality, industry-standard equipment, and highly personalized training frameworks.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {USPS.map((usp, idx) => (
              <motion.div 
                key={usp.id} 
                id={`usp-card-${usp.id}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: idx * 0.1, ease: "easeOut" }}
                className="bg-slate-950/40 border border-slate-800/80 p-6 rounded-2xl hover:border-cyan-500/30 transition-all duration-300 hover:bg-slate-950/60 relative overflow-hidden group"
              >
                {/* Scroll/Hover Flash reflection line */}
                <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-2xl z-0">
                  <div className="absolute inset-0 w-[40%] h-full bg-gradient-to-r from-transparent via-cyan-400/10 to-transparent -skew-x-20 translate-x-[-180%] group-hover:translate-x-[250%] transition-transform duration-1000 ease-out" />
                </div>

                <div className="p-3 bg-cyan-500/10 text-cyan-400 rounded-xl w-fit border border-cyan-500/20 mb-5 relative z-10">
                  <LucideIcon name={usp.icon} size={20} />
                </div>
                <h3 className="text-lg font-bold text-white mb-2 relative z-10">{usp.title}</h3>
                <p className="text-xs text-slate-400 leading-relaxed relative z-10">{usp.description}</p>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* 5. TESTIMONIALS SECTION */}
      <motion.section 
        id="testimonials" 
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.65, ease: "easeOut" }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-cyan-600 block">ALUMNI SUCCESS</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight">
            Hear From Our Successful Graduates
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
            Hundreds of our students are actively working in tech, banking, graphic design, and bookkeeping. Here is their UCC experience.
          </p>
        </div>

        {/* Interactive testimonial carousel */}
        <div className="relative max-w-3xl mx-auto bg-white border border-slate-200/50 rounded-2xl p-6 sm:p-10 shadow-lg">
          {/* Quotes icon background accent */}
          <span className="absolute top-4 right-6 text-slate-100 font-serif text-8xl pointer-events-none select-none">“</span>

          <div className="space-y-6">
            {/* Rating */}
            <div className="flex space-x-1 text-amber-500">
              {Array.from({ length: TESTIMONIALS[activeTestimonial].rating }).map((_, i) => (
                <span key={i}>
                  <LucideIcon name="Star" size={16} className="fill-amber-400" />
                </span>
              ))}
            </div>

            {/* Testimonial Message */}
            <p className="text-sm sm:text-base text-slate-700 italic leading-relaxed">
              "{TESTIMONIALS[activeTestimonial].review}"
            </p>

            {/* User credentials */}
            <div className="flex items-center space-x-4 pt-4 border-t border-slate-100">
              <img
                src={TESTIMONIALS[activeTestimonial].avatar}
                alt={TESTIMONIALS[activeTestimonial].name}
                className="w-12 h-12 rounded-full object-cover border border-slate-200"
                referrerPolicy="no-referrer"
              />
              <div>
                <h4 className="text-sm font-bold text-slate-950">{TESTIMONIALS[activeTestimonial].name}</h4>
                <p className="text-xs text-slate-500">
                  {TESTIMONIALS[activeTestimonial].role} {TESTIMONIALS[activeTestimonial].company && `at ${TESTIMONIALS[activeTestimonial].company}`}
                </p>
                <div className="flex items-center space-x-2 mt-1 text-[10px] font-bold text-cyan-600">
                  <span className="bg-cyan-50 px-2 py-0.5 rounded-full">{TESTIMONIALS[activeTestimonial].courseTaken}</span>
                  <span className="text-slate-400">• Class of {TESTIMONIALS[activeTestimonial].year}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Carousel controls */}
          <div className="flex justify-end space-x-2 mt-6">
            <button
              id="prev-testimonial"
              onClick={handlePrevTestimonial}
              className="p-2 bg-slate-50 hover:bg-slate-100 border border-slate-200 rounded-full text-slate-600 hover:text-slate-950 transition-colors cursor-pointer"
              aria-label="Previous Testimonial"
            >
              <LucideIcon name="ChevronLeft" size={16} />
            </button>
            <button
              id="next-testimonial"
              onClick={handleNextTestimonial}
              className="p-2 bg-slate-50 hover:bg-slate-100 border border-slate-200 rounded-full text-slate-600 hover:text-slate-950 transition-colors cursor-pointer"
              aria-label="Next Testimonial"
            >
              <LucideIcon name="ChevronRight" size={16} />
            </button>
          </div>
        </div>
      </motion.section>

    </div>
  );
}
