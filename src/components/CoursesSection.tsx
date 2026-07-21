import { useState } from 'react';
import { Course } from '../types';
import { LucideIcon } from './LucideIcon';
import { COURSES } from '../data';

interface CoursesSectionProps {
  onEnrollClick: (courseId?: string) => void;
}

export function CoursesSection({ onEnrollClick }: CoursesSectionProps) {
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'basic' | 'accounting' | 'programming'>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    { label: '📚 All Programs', value: 'all' as const },
    { label: '🖥️ Basic & Diploma', value: 'basic' as const },
    { label: '📊 Finance & Accounting', value: 'accounting' as const },
    { label: '💻 Programming & IT', value: 'programming' as const },
  ];

  const filteredCourses = COURSES.filter((course) => {
    const matchesCategory = selectedCategory === 'all' || course.category === selectedCategory;
    const matchesSearch = course.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          course.shortDescription.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          course.code.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div id="courses-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
      
      {/* Page Introduction Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <span className="text-xs font-bold uppercase tracking-widest text-cyan-600 block bg-cyan-50 px-3 py-1 rounded-full w-fit mx-auto border border-cyan-100">
          UCC Vocational Program Directory
        </span>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-950 tracking-tight">
          Explore Our Career-Focused Curriculum
        </h1>
        <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
          Unlock modern career opportunities with our intensive training. From computer literacy basics to accounting automation and software engineering, our certificates prepare you for immediate jobs.
        </p>
      </div>

      {/* Search & Filter bar layout */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-white p-4 rounded-2xl border border-slate-200/50 shadow-sm">
        
        {/* Category Tabs */}
        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat.value}
              id={`filter-tab-${cat.value}`}
              onClick={() => setSelectedCategory(cat.value)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                selectedCategory === cat.value
                  ? 'bg-slate-900 text-cyan-400 border border-slate-800 shadow-sm'
                  : 'bg-slate-50 text-slate-600 hover:text-slate-900 hover:bg-slate-100 border border-slate-200/40'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Search Input */}
        <div className="relative max-w-md w-full md:w-72">
          <input
            id="course-search-input"
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search programs..."
            className="w-full pl-9 pr-4 py-2 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white text-xs sm:text-sm outline-none transition-all focus:border-cyan-500 focus:ring-2 focus:ring-cyan-100"
          />
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center text-slate-400 pointer-events-none">
            <svg className="h-4 w-4 fill-none stroke-current" viewBox="0 0 24 24" strokeWidth="2">
              <circle cx="11" cy="11" r="8" /><path d="M21 21l-4.35-4.35" />
            </svg>
          </div>
        </div>

      </div>

      {/* Filter Results Summary */}
      {filteredCourses.length === 0 ? (
        <div className="text-center py-20 bg-white rounded-2xl border border-slate-200/40 p-8">
          <div className="p-4 bg-slate-50 text-slate-400 rounded-full w-fit mx-auto mb-4">
            <LucideIcon name="Monitor" size={32} />
          </div>
          <h3 className="text-lg font-bold text-slate-800">No courses match your query</h3>
          <p className="text-xs text-slate-500 mt-1 max-w-sm mx-auto">Try refining your keyword search or selecting a different training category.</p>
          <button
            id="reset-search"
            onClick={() => { setSearchQuery(''); setSelectedCategory('all'); }}
            className="mt-4 px-4 py-2 bg-slate-900 text-white text-xs font-bold rounded-lg cursor-pointer"
          >
            Clear Filters
          </button>
        </div>
      ) : (
        /* Courses Grid */
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredCourses.map((course) => (
            <div 
              key={course.id} 
              id={`course-card-${course.id}`}
              className="bg-white rounded-2xl border border-slate-200/60 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col justify-between"
            >
              
              {/* Card top banner branding */}
              <div className="p-6 sm:p-8 space-y-6">
                
                {/* Header Row */}
                <div className="flex justify-between items-start gap-4">
                  <div className="flex items-center space-x-3.5">
                    <div className="p-3 bg-cyan-500/5 text-cyan-600 rounded-xl border border-cyan-500/10 shrink-0">
                      <LucideIcon name={course.icon} size={24} />
                    </div>
                    <div>
                      <h3 className="text-lg sm:text-xl font-extrabold text-slate-900 group-hover:text-cyan-600 transition-colors">
                        {course.name}
                      </h3>
                      <div className="flex items-center space-x-2 mt-0.5">
                        <span className="text-[10px] font-mono font-bold text-slate-400">Code: {course.code}</span>
                        {course.popular && (
                          <span className="text-[9px] bg-amber-500 text-slate-950 px-2 py-0.5 rounded-full font-black uppercase tracking-wider">
                            Popular Choice
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                  
                  <span className="text-[10px] font-bold text-cyan-600 bg-cyan-50/80 px-2.5 py-1 rounded-full uppercase tracking-wider shrink-0 border border-cyan-100">
                    {course.category === 'basic' ? 'Basic & Diploma' : course.category === 'accounting' ? 'Accounting' : 'Programming'}
                  </span>
                </div>

                {/* Course parameters */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 p-4 bg-slate-50 rounded-xl border border-slate-100 text-xs text-slate-700">
                  <div>
                    <p className="text-[10px] text-slate-400 uppercase tracking-wider font-semibold">Course Duration</p>
                    <p className="font-bold text-slate-900 mt-0.5">{course.duration}</p>
                  </div>
                  <div>
                    <p className="text-[10px] text-slate-400 uppercase tracking-wider font-semibold">Entry Eligibility</p>
                    <p className="font-bold text-slate-900 mt-0.5 truncate">{course.eligibility}</p>
                  </div>
                  <div className="col-span-2 sm:col-span-1">
                    <p className="text-[10px] text-slate-400 uppercase tracking-wider font-semibold">Scholarship Fee</p>
                    <p className="font-black text-cyan-600 mt-0.5">{course.fee}</p>
                  </div>
                </div>

                {/* Core description */}
                <div className="space-y-1.5">
                  <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider">Course Brief</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {course.description}
                  </p>
                </div>

                {/* Detailed Topics Checklist */}
                <div className="space-y-2">
                  <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider">Key Curriculum Topics</h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1.5 text-xs text-slate-600">
                    {course.keyTopics.map((topic, i) => (
                      <li key={i} className="flex items-start space-x-2">
                        <LucideIcon name="Check" className="text-cyan-500 mt-0.5 shrink-0" size={12} />
                        <span className="leading-tight">{topic}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Career Opportunities */}
                <div className="space-y-2 pt-4 border-t border-slate-100">
                  <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider">Future Career Profiles</h4>
                  <div className="flex flex-wrap gap-1.5">
                    {course.careerOpportunities.map((opp, i) => (
                      <span key={i} className="text-[10px] bg-slate-100 text-slate-600 px-2.5 py-1 rounded-lg font-medium border border-slate-200/40">
                        💼 {opp}
                      </span>
                    ))}
                  </div>
                </div>

              </div>

              {/* Action enrollment bar */}
              <div className="bg-slate-50 border-t border-slate-100 px-6 py-4 flex items-center justify-between">
                <span className="text-[11px] text-slate-500 font-medium">Batch availability: Morning & Evening</span>
                <button
                  id={`course-enroll-now-${course.id}`}
                  onClick={() => onEnrollClick(course.id)}
                  className="py-2.5 px-6 rounded-xl font-bold text-white text-xs bg-slate-950 hover:bg-cyan-500 shadow-md transition-all duration-200 cursor-pointer flex items-center space-x-1.5"
                >
                  <span>Request Enrollment</span>
                  <LucideIcon name="ChevronRight" size={14} />
                </button>
              </div>

            </div>
          ))}
        </div>
      )}

    </div>
  );
}
