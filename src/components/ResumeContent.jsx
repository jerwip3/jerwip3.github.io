export default function ResumeContent() {
  return (
    <div className="text-left text-gray-300 space-y-8 p-4 md:p-8">
      <section className="border-b border-gray-700 pb-6">
        <h2 className="text-3xl font-bold text-sky-400">Jeremy Wipperfurth</h2>
        <p className="mt-2 text-gray-400">Madison, WI / Dallas, TX | jerwip@gmail.com</p>
      </section>

      <section>
        <h3 className="text-xl font-semibold text-white mb-3 uppercase tracking-wider border-l-4 border-sky-500 pl-3">
          Professional Summary
        </h3>
        <p className="leading-relaxed">
          Dedicated Software Development student with a 3.89 GPA. 
          Transitioning from a successful career in aviation to software engineering, bringing extensive experience in team management, troubleshooting, and performing under pressure.
        </p>
      </section>
  <section>
    <h3 className="text-xl font-semibold text-white mb-3 uppercase tracking-wider border-l-4 border-sky-500 pl-3">
      Education
    </h3>
    <div className="space-y-8">
      <div>
        <div className="mb-6">
          <p className="font-bold text-white text-lg">Fox Valley Technical College</p>
          <p className="text-sky-400 italic">A.A.S. – Software Developer | Exp. May 2026</p>
          <p className="text-sm text-gray-500">GPA: 3.89 | Dean’s List | Phi Theta Kappa</p>
        </div>

        <div className="mt-6">
          <h4 className="text-sm font-bold text-gray-400 uppercase tracking-[0.2em] mb-4">
            Relevant Coursework
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-gray-800/40 p-4 rounded-xl border border-gray-700/50">
              <p className="text-sky-400 font-bold text-xs uppercase tracking-widest mb-3 border-b border-gray-700 pb-1">
                Development & Systems
              </p>
              <ul className="grid grid-cols-1 gap-1 text-sm text-gray-300">
                <li>• Advanced Software Development</li>
                <li>• Agile Development</li>
                <li>• ASP.NET Core & SignalR</li>
                <li>• Systems Analysis</li>
                <li>• Data Administration</li>
              </ul>
            </div>

            <div className="bg-gray-800/40 p-4 rounded-xl border border-gray-700/50">
              <p className="text-sky-400 font-bold text-xs uppercase tracking-widest mb-3 border-b border-gray-700 pb-1">
                Mathematics & Logic
              </p>
              <ul className="grid grid-cols-1 gap-1 text-sm text-gray-300">
                <li>• Calculus I, II, & III</li>
                <li>• Introductory Statistics</li>
                <li>• Math & Logic</li>
                <li>• Information Assurance</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="pt-4 border-t border-gray-800">
        <p className="font-bold text-white text-lg">Arizona State University</p>
        <p className="text-sky-400 italic text-sm">B.S. – Computer Science Candidate | Fall 2026</p>
        <p className="text-xs text-gray-500 mt-1 italic">Accepted for transfer to complete bachelor’s degree</p>
      </div>
    </div>
  </section>

      <section>
        <h3 className="text-xl font-semibold text-white mb-3 uppercase tracking-wider border-l-4 border-sky-500 pl-3">
          Professional Experience
        </h3>
        <div className="space-y-6">
          <div>
            <div className="flex justify-between items-start flex-wrap gap-2">
              <p className="font-bold text-white text-lg">Delta Air Lines | Ramp Agent</p>
              <p className="text-sm text-gray-500 italic">Jan 2022 to Present</p>
            </div>
            <p className="text-sky-500 text-sm font-semibold mb-2">Load Distribution & Operations Desk</p>
            <ul className="list-disc list-outside ml-5 space-y-1 text-sm">
              <li><span className="font-bold text-white tracking-wide">Operations Management:</span> Monitor critical timelines for fuel, cargo, and passenger boarding to ensure on-time departures, coordinating communication between flight crews, gate agents, and ground teams.</li>
              <li><span className="font-bold text-white tracking-wide">Analytical Planning (Load Distribution):</span> Calculate and plan cargo loading configurations to maintain aircraft weight and balance within strict safety envelopes, requiring high attention to detail and data accuracy. </li>
              <li><span className="font-bold text-white tracking-wide">Leadership (Agent in Charge):</span> Direct teams in the servicing of aircraft and lead logistics during high-pressure events, such as diversions or inclement weather.</li>
            </ul>
          </div>
            <div>
              <div className="flex justify-between items-start flex-wrap gap-2">
                <p className="font-bold text-white text-lg">Envoy Air | Customer Service & Ramp Crew Chief</p>
                <p className="text-sm text-gray-500 italic">Jun 2017 to Jan 2022</p>
              </div>
              <ul className="list-disc list-outside ml-5 mt-2 space-y-1 text-sm">
                <li><span className="font-bold text-white tracking-wide">Training:</span> Served as a designated trainer for aircraft familiarization, instructing new hires on safety and equipment operation.</li>
                <li><span className="font-bold text-white tracking-wide">Versatility:</span> Performed dual roles in customer service and ramp operations, resolving passenger issues while maintaining ground efficiency.</li>
              </ul>
          </div>
        </div>
      </section>

      <section>
        <h3 className="text-xl font-semibold text-white mb-3 uppercase tracking-wider border-l-4 border-sky-500 pl-3">
          Academic Projects
        </h3>
        <div className="space-y-6">
          <div>
            <p className="font-bold text-white text-lg">Real-Time Game Application (Capstone)</p>
            <p className="text-sky-400 italic text-sm mb-2">Advanced Software Development | ASP.NET, SignalR, Azure</p>
            <ul className="list-disc list-outside ml-5 space-y-1 text-sm">
              <li>Developing a multi-client game using n-Tier architecture to separate data, logic, and presentation layers.</li>
              <li>Managing real-time state synchronization between multiple clients using SignalR.</li>
            </ul>
          </div>
          <div>
            <p className="font-bold text-white text-lg">Data Management Systems</p>
            <p className="text-sky-400 italic text-sm mb-2">C#, SQL, Entity Framework</p>
            <ul className="list-disc list-outside ml-5 space-y-1 text-sm">
              <li>Designed relational database schemas and implemented secure data access layers.</li>
              <li>Optimized SQL queries for efficient data retrieval and reporting.</li>
            </ul>
          </div>
        </div>
      </section>

      <section>
        <h3 className="text-xl font-semibold text-white mb-4 uppercase tracking-wider border-l-4 border-sky-500 pl-3">
          Technical Toolkit
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-gray-700/50 p-4 rounded-lg border border-gray-600">
            <p className="text-sky-400 font-bold mb-2 uppercase text-xs tracking-wider">Languages</p>
            <p className="text-sm text-gray-200">
              C#, C++, JavaScript, SQL, HTML5/CSS, PHP
            </p>
          </div>
          <div className="bg-gray-700/50 p-4 rounded-lg border border-gray-600">
            <p className="text-sky-400 font-bold mb-2 uppercase text-xs tracking-wider">Frameworks</p>
            <p className="text-sm text-gray-200">
              ASP.NET Core, React, Tailwind CSS, .NET MAUI, Entity Framework, MVC
            </p>
          </div>
          <div className="bg-gray-700/50 p-4 rounded-lg border border-gray-600">
            <p className="text-sky-400 font-bold mb-2 uppercase text-xs tracking-wider">Tools & Cloud</p>
            <p className="text-sm text-gray-200">
              Azure, SignalR, REST APIs, Git/GitHub, Vite
            </p>
          </div>
          <div className="bg-gray-700/50 p-4 rounded-lg border border-gray-600">
            <p className="text-sky-400 font-bold mb-2 uppercase text-xs tracking-wider">Concepts</p>
            <p className="text-sm text-gray-200">
              OOP, n-Tier Architecture, Agile/Scrum, Systems Analysis, Relational Database Design
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}