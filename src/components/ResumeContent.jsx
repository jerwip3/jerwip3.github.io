export default function ResumeContent() {
  return (
    <div className="text-left text-slate-700 dark:text-slate-300 space-y-8 p-4 md:p-12 bg-white dark:bg-[#001d3d] transition-colors duration-500">
      <section className="border-b-2 border-slate-100 dark:border-white/10 pb-8">
        <h2 className="text-3xl font-black text-ateneo dark:text-white tracking-tight">
          Jeremy Wipperfurth
        </h2>
        <p className="mt-2 text-slate-500 dark:text-slate-400 font-medium">
          Madison, WI / Dallas, TX | jerwip@gmail.com
        </p>
      </section>

      <section>
        <h3 className="text-sm font-black text-ateneo dark:text-white mb-3 uppercase tracking-[0.2em] border-l-4 border-cochineal dark:border-ateneo pl-4">
          Professional Summary
        </h3>
        <p className="leading-relaxed text-slate-600 dark:text-slate-400">
          Dedicated Software Development student with a 3.89 GPA. Transitioning
          from a successful career in aviation to software engineering, bringing
          extensive experience in team management, troubleshooting, and
          performing under pressure.
        </p>
      </section>

      <section>
        <h3 className="text-sm font-black text-ateneo dark:text-white mb-6 uppercase tracking-[0.2em] border-l-4 border-cochineal dark:border-ateneo pl-4">
          Education
        </h3>
        <div className="space-y-8">
          <div>
            <div className="flex justify-between items-baseline flex-wrap gap-2">
              <p className="font-bold text-slate-900 dark:text-white text-lg">
                Fox Valley Technical College
              </p>
              <p className="text-sm font-bold text-ateneo dark:text-slate-300">
                Exp. May 2026
              </p>
            </div>
            <p className="text-cochineal dark:text-slate-400 font-semibold italic">
              A.A.S. – Software Developer
            </p>
            <p className="text-xs text-slate-400 dark:text-slate-500 mt-1 uppercase tracking-widest font-bold">
              GPA: 3.89 | Dean's List | Phi Theta Kappa
            </p>

            <div className="mt-6">
              <h4 className="text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-[0.2em] mb-4">
                Relevant Coursework
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-slate-50 dark:bg-[#002a4d] p-4 rounded-xl border border-slate-100 dark:border-white/5">
                  <p className="text-ateneo dark:text-white font-bold text-[10px] uppercase tracking-widest mb-3 border-b border-slate-200 dark:border-white/10 pb-1">
                    Development & Systems
                  </p>
                  <ul className="grid grid-cols-1 gap-1 text-sm text-slate-600 dark:text-slate-400">
                    <li>• Advanced Software Development</li>
                    <li>• Agile Development</li>
                    <li>• ASP.NET</li>
                    <li>• Systems Analysis</li>
                    <li>• Data Administration</li>
                    <li>• Modern JavaScript</li>
                    <li>• Computer Programming C++</li>
                  </ul>
                </div>

                <div className="bg-slate-50 dark:bg-[#002a4d] p-4 rounded-xl border border-slate-100 dark:border-white/5">
                  <p className="text-ateneo dark:text-white font-bold text-[10px] uppercase tracking-widest mb-3 border-b border-slate-200 dark:border-white/10 pb-1">
                    Mathematics & Logic
                  </p>
                  <ul className="grid grid-cols-1 gap-1 text-sm text-slate-600 dark:text-slate-400">
                    <li>• Calculus I, II, & III</li>
                    <li>• Introductory Statistics</li>
                    <li>• Math & Logic</li>
                    <li>• Information Assurance</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="pt-6 border-t border-slate-100 dark:border-white/10">
            <div className="flex justify-between items-baseline flex-wrap gap-2">
              <p className="font-bold text-slate-900 dark:text-white text-lg">
                Arizona State University
              </p>
              <p className="text-sm font-bold text-ateneo dark:text-slate-300">
                Fall 2026 Start
              </p>
            </div>
            <p className="text-cochineal dark:text-slate-400 font-semibold italic text-sm">
              B.S. – Computer Science Candidate
            </p>
            <p className="text-xs text-slate-400 dark:text-slate-500 mt-1 italic">
              Accepted for transfer to complete bachelor's degree
            </p>
          </div>
        </div>
      </section>

      <section>
        <h3 className="text-sm font-black text-ateneo dark:text-white mb-6 uppercase tracking-[0.2em] border-l-4 border-cochineal dark:border-ateneo pl-4">
          Professional Experience
        </h3>
        <div className="space-y-8">
          <div>
            <div className="flex justify-between items-baseline flex-wrap gap-2">
              <p className="font-bold text-slate-900 dark:text-white text-lg">
                Delta Air Lines | Ramp Agent
              </p>
              <p className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase">
                Jan 2022 – Present
              </p>
            </div>
            <p className="text-ateneo dark:text-white/80 text-sm font-bold mb-3 italic">
              Load Distribution & Operations Desk
            </p>
            <ul className="list-disc list-outside ml-5 space-y-2 text-sm text-slate-600 dark:text-slate-400">
              <li>
                <span className="font-bold text-slate-900 dark:text-white">
                  Operations Management:
                </span>{" "}
                Monitor timelines for fuel and cargo to ensure on-time
                departures.
              </li>
              <li>
                <span className="font-bold text-slate-900 dark:text-white">
                  Analytical Planning:
                </span>{" "}
                Calculate aircraft weight and balance configurations with high
                accuracy.
              </li>
              <li>
                <span className="font-bold text-slate-900 dark:text-white">
                  Leadership:
                </span>{" "}
                Direct teams during high-pressure events and diversions.
              </li>
            </ul>
          </div>
          <div className="pt-6 border-t border-slate-100 dark:border-white/10">
            <div className="flex justify-between items-baseline flex-wrap gap-2">
              <p className="font-bold text-slate-900 dark:text-white text-lg">
                Envoy Air | Customer Service & Ramp Crew Chief
              </p>
              <p className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider">
                Jun 2017 – Jan 2022
              </p>
            </div>
            <ul className="list-disc list-outside ml-5 mt-3 space-y-2 text-sm text-slate-600 dark:text-slate-400">
              <li>
                <span className="font-bold text-slate-900 dark:text-white">
                  Training:
                </span>{" "}
                Served as a designated trainer for aircraft familiarization,
                instructing new hires on safety and equipment operation.
              </li>
              <li>
                <span className="font-bold text-slate-900 dark:text-white">
                  Versatility:
                </span>{" "}
                Performed dual roles in customer service and ramp operations,
                resolving passenger issues while maintaining ground efficiency.
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="pt-6">
        <h3 className="text-sm font-black text-ateneo dark:text-white mb-6 uppercase tracking-[0.2em] border-l-4 border-cochineal dark:border-ateneo pl-4">
          Technical Toolkit
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-ateneo dark:bg-[#002a4d] p-5 rounded-2xl shadow-lg border border-transparent dark:border-white/5 transition-colors duration-500">
            <p className="text-white/50 dark:text-white/40 font-black mb-2 uppercase text-[10px] tracking-widest">
              Languages & Frameworks
            </p>
            <p className="text-sm text-white dark:text-white leading-relaxed font-medium">
              C#, C++, JavaScript, SQL, ASP.NET, PHP, .NET MAUI, React, Tailwind
              CSS, Entity Framework
            </p>
          </div>

          <div className="bg-slate-100 dark:bg-[#002a4d] p-5 rounded-2xl border border-slate-200 dark:border-white/5 transition-colors duration-500">
            <p className="text-ateneo dark:text-white font-black mb-2 uppercase text-[10px] tracking-widest">
              Tools & Concepts
            </p>
            <p className="text-sm text-slate-700 dark:text-slate-200 leading-relaxed font-medium">
              Azure, SignalR, Git/GitHub, OOP, n-Tier Architecture, Agile/Scrum
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
