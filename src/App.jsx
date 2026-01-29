import projects from "../projects.json"
import ResumeContent from '../src/components/ResumeContent';
import './App.css'
import { useState } from 'react';

function Profile() {
  const [showResume, setShowResume] = useState(false);

  return (
    <header className="py-20 flex flex-col items-center text-center px-4">
      <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight">
        Hi, I'm <span className="text-sky-400">Jeremy Wipperfurth</span>
      </h1>
      
      <p className="mt-8 text-xl text-gray-400 max-w-2xl">
        Software Development student and ASU Computer Science candidate. 
        Transitioning from a career in aviation operations to building robust, 
        scalable software solutions.
      </p>

      <div className="mt-8 flex flex-wrap justify-center gap-4">
        <button 
          onClick={() => setShowResume(true)}
          className="px-8 py-3 bg-sky-600 hover:bg-sky-500 text-white font-bold rounded-full transition-all"
          >
            View Resume
          </button>
        <a 
          href="mailto:jerwip@gmail.com"
          className="px-8 py-3 border border-gray-700 hover:border-sky-500/50 text-gray-300 font-bold rounded-full transition-all"
        >
          Get in Touch
        </a>
      </div>

      {showResume && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-10"
          onClick={() => setShowResume(false)}
        >
          <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />

          <div 
            className="relative bg-gray-900 w-full max-w-5xl max-h-full overflow-y-auto rounded-2xl border border-gray-700 shadow-2xl custom-scrollbar"
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              onClick={() => setShowResume(false)}
              className="absolute top-6 right-6 text-gray-500 hover:text-white text-2xl font-bold transition-colors"
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

const hasLanguages = project.languages?.nodes?.length > 0;

  return (
    <div className="group relative bg-gray-800 rounded-2xl overflow-hidden border border-gray-700 
                    hover:border-sky-500/50 hover:-translate-y-2 transition-all duration-300 
                    hover:shadow-[0_0_30px_-10px_rgba(56,189,248,0.3)]">
    <div className="aspect-video overflow-hidden">
      <ProjectImage 
        src={project.openGraphImageUrl} 
        name={project.name} 
      />
    </div>

      <div className="p-6">
        <h2 className="text-xl font-bold text-white group-hover:text-sky-400 transition-colors">
          {project.name}
        </h2>
        <p className="text-gray-400 mt-2 text-sm line-clamp-2">
          {project.description}
        </p>
        
        {hasLanguages && (
          <div className="mt-4 flex flex-wrap gap-2">
            {project.languages.nodes.map((lang, i) => (
              <span key={i} className="bg-sky-900/50 text-sky-300 text-[10px] uppercase tracking-wider font-bold px-2 py-1 rounded-md border border-sky-800/50">
                {lang.name}
              </span>
            ))}
          </div>
        )}

        <a 
          href={project.url} 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-block mt-6 text-sm font-semibold text-sky-400 hover:text-sky-300 underline underline-offset-4"
        >
          View Source
        </a>
      </div>
    </div>
  );
}

function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-white relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full 
                      bg-[radial-gradient(circle_at_50%_-20%,rgba(56,189,248,0.1),transparent_50%)] pointer-events-none" />
      <div className="max-w-6xl mx-auto px-6">
        <Profile />
        
        <section className="pb-20">
          <h2 className="text-3xl font-bold mb-10 text-center text-gray-200">
            Featured Projects
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((item, index) => (
              <ProjectCard key={index} project={item} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
export default App
