import projects from "../projects.json";
import ResumeContent from "../src/components/ResumeContent";
import AboutContent from "./components/AboutContent";
import "./App.css";
import { useState } from "react";

function Profile() {
  const [showResume, setShowResume] = useState(false);
  const [showAbout, setShowAbout] = useState(false);

  return (
    <header className="relative flex flex-col items-center text-center">
      <div className="w-full min-h-[230px] md:min-h-[230px] bg-gradient-to-br from-ateneo to-slate-900 border-t-4 border-t-cochineal flex flex-col items-center justify-center px-4 relative overflow-hidden">
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-white leading-[1.2] md:leading-tight">
          Hi, I'm{" "}
          <span className="underline decoration-cochineal decoration-2 md:decoration-4 underline-offset-[8px] md:underline-offset-[12px]">
            Jeremy Wipperfurth
          </span>
        </h1>
        <p className="mt-4 text-white font-mono text-xs uppercase tracking-[0.3em]">
          Software Development & Computer Science
        </p>
      </div>
      <div className="px-4 flex flex-col items-center">
        <p className="mt-8 text-xl text-slate-600 max-w-2xl leading-relaxed">
          Software Development student and incoming ASU CS candidate.
          Transitioning from aviation to building clean, logic-driven
          applications.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row gap-4 w-full max-w-xl justify-center">
          <button
            onClick={() => setShowResume(true)}
            className="flex-1 w-full sm:w-64 px-8 py-4 bg-ateneo text-white font-black rounded-full transition-all hover:bg-cochineal active:scale-95 shadow-xl shadow-ateneo/20 hover:shadow-cochineal/20 uppercase tracking-widest text-sm"
          >
            View Resume
            <span className="inline-block ml-2 transition-transform group-hover:translate-x-1">
              →
            </span>
          </button>

          <button
            onClick={() => setShowAbout(true)}
            className="flex-1 w-full sm:w-64 px-8 py-4 bg-transparent text-ateneo font-black rounded-full transition-all hover:bg-ateneo/5 border-2 border-ateneo/20 active:scale-95 uppercase tracking-widest text-sm"
          >
            The Story
            <span className="inline-block ml-2 transition-transform group-hover:translate-x-1">
              →
            </span>
          </button>
        </div>
      </div>

      <div className="w-full flex flex-col items-center">
        <div className="mt-20 mb-20">
          <div className="h-1 w-24 bg-gradient-to-r from-transparent via-cochineal to-transparent opacity-40" />
        </div>
      </div>

      {showResume && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-10"
          onClick={() => setShowResume(false)}
        >
          <div className="absolute inset-0 bg-ateneo/60 backdrop-blur-sm" />

          <div
            className="relative bg-white w-full max-w-5xl max-h-[90vh] overflow-y-auto rounded-3xl border border-slate-200 shadow-2xl custom-scrollbar pr-2"
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
      {showAbout && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-10"
          onClick={() => setShowAbout(false)}
        >
          <div className="absolute inset-0 bg-slate-900/80 backdrop-blur-sm" />
          <div
            className="relative bg-white w-full max-w-6xl max-h-[90vh] overflow-y-auto rounded-3xl shadow-2xl custom-scrollbar"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="h-2 bg-cochineal w-full" />
            <button
              onClick={() => setShowAbout(false)}
              className="absolute top-8 right-8 text-slate-400 hover:text-cochineal text-2xl font-bold transition-colors z-10"
            >
              X
            </button>

            <AboutContent />
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
                 hover:-translate-y-2 hover:shadow-2xl
                 bg-white shadow-xl
                 border-x border-cochineal/20 
                 border-t-4 border-t-cochineal 
                 border-b-4 border-b-ateneo 
                 flex flex-col h-full"
    >
      <div
        className="h-28 relative overflow-hidden p-5 flex flex-col justify-between transition-colors duration-500
                      bg-gradient-to-br from-ateneo to-slate-900 
                      group-hover:from-cochineal group-hover:to-red-900"
      >
        <div className="flex justify-between items-start">
          <svg
            className="w-6 h-6 fill-white/50 group-hover:fill-white/80 transition-colors"
            viewBox="0 0 24 24"
          >
            <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
          </svg>
          <span className="text-[10px] font-black uppercase tracking-[0.2em] text-white/40 group-hover:text-white/70 transition-colors">
            {project.isPrivate ? "Private" : "Public"}
          </span>
        </div>

        <div className="flex flex-wrap gap-2">
          {project.languages?.nodes?.map((lang, i) => (
            <span
              key={i}
              className="text-[9px] uppercase tracking-widest font-black px-2 py-0.5 
                         bg-white/10 text-white border border-white/20 rounded backdrop-blur-sm"
            >
              {lang.name}
            </span>
          ))}
        </div>
      </div>

      <div className="p-6 flex flex-col flex-grow">
        <h2 className="text-xl font-bold text-ateneo group-hover:text-cochineal transition-colors duration-300 uppercase tracking-tight">
          {project.name}
        </h2>

        <p className="text-slate-600 mt-3 text-sm leading-relaxed flex-grow">
          {project.description ||
            "Portfolio project demonstrating advanced software development concepts."}
        </p>

        <div className="mt-6 pt-4 border-t border-slate-100">
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-black uppercase tracking-tighter text-cochineal hover:text-ateneo transition-colors inline-flex items-center gap-2"
          >
            Explore Repository <span>→</span>
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
        <div
          className="absolute inset-0 
                        bg-[radial-gradient(circle_at_50%_0%,rgba(0,50,104,0.08)_0%,transparent_75%)] 
                        pointer-events-none -z-10"
        />

        <Profile />

        <section className="pb-20 px-6">
          <h2 className="text-3xl font-bold mb-10 text-center text-ateneo tracking-tighter uppercase">
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
            <a
              href="https://github.com/jerwip3"
              className="text-ateneo hover:text-cochineal transition-colors font-bold text-sm"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/jeremywipperfurth/"
              className="text-ateneo hover:text-cochineal transition-colors font-bold text-sm"
            >
              LinkedIn
            </a>
            <a
              href="mailto:jerwip@gmail.com"
              className="text-ateneo hover:text-cochineal transition-colors font-bold text-sm"
            >
              Email
            </a>
          </div>
          <p className="text-[10px] text-ateneo uppercase tracking-[0.2em] ">
            &copy; 2026 Jeremy Wipperfurth - Built with React & Tailwind v4
          </p>
        </footer>
      </div>
    </div>
  );
}

export default App;
