import projects from "../projects.json"
import ResumeContent from '../src/components/ResumeContent';
import './App.css'
import { useState } from 'react';

function Profile() {
  const [showResume, setShowResume] = useState(false);

  return (
    <header className="py-20 flex flex-col items-center text-center px-4">
      <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-slate-900">
        Hi, I'm <span className="text-ateneo underline decoration-cochineal decoration-4 underline-offset-[12px]">
          Jeremy Wipperfurth
        </span>
      </h1>
      
      <p className="mt-8 text-xl text-slate-600 max-w-2xl leading-relaxed">
        Software Development student and ASU Computer Science candidate.
        Transitioning from a career in aviation operations to building robust, 
        scalable software solutions.
      </p>

      <div className="mt-8 flex flex-wrap justify-center gap-4">
        <button 
          onClick={() => setShowResume(true)}
          className="px-8 py-3 bg-ateneo hover:bg-cochineal active:scale-95 text-white font-bold rounded-full transition-all shadow-lg hover:shadow-special-red/20"
        >
          View Resume
        </button>
        
        <a 
          href="mailto:jerwip@gmail.com"
          className="px-8 py-3 border-2 border-ateneo text-ateneo hover:bg-ateneo hover:text-white font-bold rounded-full transition-all"
        >
          Get in Touch
        </a>
      </div>

      {showResume && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-10"
          onClick={() => setShowResume(false)}
        >
          <div className="absolute inset-0 bg-ateneo/60 backdrop-blur-sm" />

          <div 
            className="relative bg-slate-900 w-full max-w-5xl max-h-full overflow-y-auto rounded-3xl border border-white/10 shadow-2xl custom-scrollbar"
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              onClick={() => setShowResume(false)}
              className="absolute top-6 right-6 text-slate-400 hover:text-special-red text-2xl font-bold transition-colors"
            >
              X
            </button>

            <ResumeContent />
          </div>
        </div>
      )}
    </header>
  );
}

function ProjectImage({ src, name }) {
  const fallbackImage = "/src/assets/code-snippet.png"; 

  return (
    <img 
      src={src || fallbackImage} 
      alt={name} 
      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
    />
  );
}

function ProjectCard({ project }) {
  return (
    <div 
      className="group relative rounded-2xl overflow-hidden transition-all duration-300 
                 hover:-translate-y-2 hover:shadow-2xl hover:border-ateneo/40
                 bg-white shadow-xl
                 border border-ateneo/20
                 border-t-4 border-t-ateneo"
    >
      <div className="aspect-video overflow-hidden border-b border-slate-100 bg-slate-900">
        <ProjectImage src={project.openGraphImageUrl} name={project.name} />
      </div>

      <div className="p-6">
        <h2 className="text-3xl font-bold mb-10 text-center text-ateneo tracking-tighter uppercase group-hover:text-cochineal transition-colors duration-300">
          {project.name}
        </h2>
        
        <p className="text-slate-600 mt-2 text-sm leading-relaxed">
          {project.description}
        </p>
        
        <div className="mt-4 flex flex-wrap gap-2">
          {project.languages?.nodes?.map((lang, i) => (
            <span 
              key={i} 
              className="text-[10px] uppercase tracking-widest font-bold px-2 py-1 rounded bg-ateneo/5 text-ateneo border border-ateneo/10"
            >
              {lang.name}
            </span>
          ))}
        </div>

        <div className="mt-6">
          <a 
            href={project.url} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-xs font-black uppercase tracking-tighter text-cochineal hover:text-ateneo transition-colors"
          >
            View Source Code
          </a>
        </div>
      </div>
    </div>
  );
}

function App() {
  return (
    <div className="min-h-screen bg-ateneo font-sans py-10 px-4">
      
      <div className="relative max-w-6xl mx-auto bg-white rounded-3xl shadow-2xl overflow-hidden border border-white/20">
        
        <div className="absolute inset-0 
                        bg-[radial-gradient(circle_at_50%_0%,rgba(0,50,104,0.08)_0%,transparent_75%)] 
                        pointer-events-none -z-10" />

        <Profile />

        <div className="py-12 flex justify-center">
          <div className="h-1 w-24 bg-gradient-to-r from-transparent via-cochineal to-transparent opacity-40" />
        </div>
        
        <section className="pb-20 px-6">
          <h2 className="text-3xl font-bold mb-10 text-center text-ateneo">
            Featured Projects
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((item, index) => (
              <ProjectCard key={index} project={item} />
            ))}
          </div>
        </section>
          <footer className="py-10 border-t border-slate-100 bg-slate-50/50 text-center">
            <div className="flex justify-center gap-6 mb-4">
              <a href="https://github.com/jerwip3" className="text-ateneo hover:text-cochineal transition-colors font-bold text-sm">GitHub</a>
              <a href="https://www.linkedin.com/in/jeremywipperfurth/" className="text-ateneo hover:text-cochineal transition-colors font-bold text-sm">LinkedIn</a>
            </div>
            <p className="text-[10px] text-ateneo uppercase tracking-[0.2em] ">
              &copy; 2026 Jeremy Wipperfurth - Built with React & Tailwind v4
            </p>
        </footer>
      </div>


    </div>
  );
}

export default App
