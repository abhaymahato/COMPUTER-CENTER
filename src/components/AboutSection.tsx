import { LucideIcon } from './LucideIcon';
import { DIRECTOR_MESSAGE, STATS } from '../data';

export function AboutSection() {
  return (
    <div id="about-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-24">
      
      {/* 1. SECTION INTRO & STORY */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left column info */}
        <div className="lg:col-span-7 space-y-6">
          <span className="text-xs font-bold uppercase tracking-widest text-cyan-600 block bg-cyan-50 px-3 py-1 rounded-full w-fit border border-cyan-100">
            About Unique Computer Center
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-950 tracking-tight">
            Bridging the Digital Divide with Affordable, Top-Quality Education
          </h1>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Founded in 2014, Unique Computer Center (UCC) emerged with a single core mandate: to deliver superior computer learning resources to aspiring students, banking professionals, and design students at an investment structure that is accessible to all.
          </p>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            We are certified with government verification councils and hold valid ISO 9001:2015 registration guidelines. UCC operates multiple modern computer laboratories equipped with high-speed optical fiber internet, personal workstation allocation rules, and continuous UPS power backups.
          </p>

          {/* Mission & Vision grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
            <div className="p-5 bg-white border border-slate-200/40 rounded-2xl shadow-sm space-y-2">
              <div className="p-2.5 bg-cyan-500/10 text-cyan-500 rounded-xl w-fit">
                <LucideIcon name="Award" size={18} />
              </div>
              <h3 className="font-bold text-slate-950">Our Mission</h3>
              <p className="text-xs text-slate-500 leading-relaxed">
                To prepare competitive tech-literate citizens by fostering deep algorithmic design, accounting compliance, and general office application skillsets.
              </p>
            </div>
            <div className="p-5 bg-white border border-slate-200/40 rounded-2xl shadow-sm space-y-2">
              <div className="p-2.5 bg-cyan-500/10 text-cyan-500 rounded-xl w-fit">
                <LucideIcon name="Monitor" size={18} />
              </div>
              <h3 className="font-bold text-slate-950">Our Vision</h3>
              <p className="text-xs text-slate-500 leading-relaxed">
                To serve as the premiere local vocational tech academy and placement hub, adapting our courses dynamically to fast-moving industrial criteria.
              </p>
            </div>
          </div>
        </div>

        {/* Right column graphical highlight card */}
        <div className="lg:col-span-5">
          <div className="bg-slate-900 rounded-2xl border border-slate-800 p-8 text-white relative overflow-hidden shadow-xl">
            <div className="absolute top-1/2 -right-12 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
            
            <h3 className="text-xl font-bold mb-6 text-cyan-400">UCC Key Milestones</h3>
            
            <div className="space-y-6 text-xs">
              <div className="flex items-start space-x-3">
                <span className="p-1 bg-cyan-500/20 text-cyan-400 rounded font-bold font-mono">10Y+</span>
                <div>
                  <h4 className="font-bold text-slate-100">ISO Certified Training</h4>
                  <p className="text-slate-400 leading-relaxed mt-0.5">Approved under corporate educational parameters and ISO registration procedures.</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <span className="p-1 bg-cyan-500/20 text-cyan-400 rounded font-bold font-mono">1:1</span>
                <div>
                  <h4 className="font-bold text-slate-100">Individual Computer Desk Allocation</h4>
                  <p className="text-slate-400 leading-relaxed mt-0.5">We prohibit double-sharing of computer desks. You study on your own physical computer.</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <span className="p-1 bg-cyan-500/20 text-cyan-400 rounded font-bold font-mono">98%</span>
                <div>
                  <h4 className="font-bold text-slate-100">Student Placement Rating</h4>
                  <p className="text-slate-400 leading-relaxed mt-0.5">Our alumni secure placements in regional firms, accounting offices, and tech support units.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

      </section>

      {/* 2. INFRASTRUCTURE LAB SHOWCASE */}
      <section className="bg-white p-8 sm:p-12 rounded-2xl border border-slate-200/50 shadow-sm space-y-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-6 space-y-4">
            <span className="text-xs font-bold text-cyan-600 block uppercase tracking-wider">STATE-OF-THE-ART LAB WORKSPACE</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-950 tracking-tight">
              A Classroom Setup Designed for Ultimate Focus and Retention
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
              We maintain active partnerships with leading computer suppliers to guarantee clean, high-performance workstations. Our setups are updated with the latest versions of Windows, MS Office Pro, Tally Prime with GST, Python, and C/C++ compilation suites.
            </p>
            <ul className="space-y-2 text-xs text-slate-600 font-medium">
              <li className="flex items-center space-x-2">
                <LucideIcon name="CheckCircle2" className="text-cyan-500" size={14} />
                <span>Modern Core-i5 Computers with High-Speed Solid State Drives</span>
              </li>
              <li className="flex items-center space-x-2">
                <LucideIcon name="CheckCircle2" className="text-cyan-500" size={14} />
                <span>Dedicated Practice Lab Slots available outside normal class hours</span>
              </li>
              <li className="flex items-center space-x-2">
                <LucideIcon name="CheckCircle2" className="text-cyan-500" size={14} />
                <span>Full backup power with heavy high-capacity silent generators</span>
              </li>
              <li className="flex items-center space-x-2">
                <LucideIcon name="CheckCircle2" className="text-cyan-500" size={14} />
                <span>Air-Conditioned classrooms providing quiet concentration environments</span>
              </li>
            </ul>
          </div>
          <div className="lg:col-span-6 grid grid-cols-2 gap-4">
            <img
              src="https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?w=300&fit=crop&q=80"
              alt="Programming lab desk"
              className="rounded-xl object-cover h-40 w-full shadow-sm"
              referrerPolicy="no-referrer"
            />
            <img
              src="https://images.unsplash.com/photo-1531403009284-440f080d1e12?w=300&fit=crop&q=80"
              alt="Design and development workflow"
              className="rounded-xl object-cover h-40 w-full shadow-sm"
              referrerPolicy="no-referrer"
            />
            <img
              src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=300&fit=crop&q=80"
              alt="Practical office application"
              className="rounded-xl object-cover h-40 w-full shadow-sm col-span-2"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </section>

      {/* 3. DIRECTOR MESSAGE */}
      <section className="bg-slate-950 p-8 sm:p-12 rounded-3xl border border-slate-800 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
          
          <div className="lg:col-span-4 flex flex-col items-center text-center space-y-4">
            <div className="relative p-2.5 bg-slate-900 border border-slate-800 rounded-2xl w-48 h-48 overflow-hidden shadow-inner">
              <img
                src={DIRECTOR_MESSAGE.avatar}
                alt={DIRECTOR_MESSAGE.name}
                className="w-full h-full object-cover rounded-xl filter contrast-105"
                referrerPolicy="no-referrer"
              />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white">{DIRECTOR_MESSAGE.name}</h3>
              <p className="text-xs text-cyan-400 font-semibold">{DIRECTOR_MESSAGE.title}</p>
              <p className="text-[10px] text-slate-400 font-mono mt-1">{DIRECTOR_MESSAGE.credentials}</p>
            </div>
          </div>

          <div className="lg:col-span-8 space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-cyan-400 block">FOUNDER MESSAGE</span>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold tracking-tight text-white leading-snug">
              "Technical Education is the Most Powerful Catalyst for Individual Empowerment."
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 italic leading-relaxed">
              "{DIRECTOR_MESSAGE.message}"
            </p>
            <div className="pt-4 border-t border-slate-900 flex justify-between items-center text-xs text-slate-500">
              <span>ESTD. 2014</span>
              <span>Unique Computer Center, Head Office</span>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}
