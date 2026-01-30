import projects from "../projects.json";
import ResumeContent from "../src/components/ResumeContent";
import AboutContent from "./components/AboutContent";
import "./App.css";
import { useState, useEffect } from "react";

function Profile({ isDark, setIsDark }) {
  const [showResume, setShowResume] = useState(false);
  const [showAbout, setShowAbout] = useState(false);

  return (
    <header className="relative flex flex-col items-center text-center">
      <div className="fixed top-4 right-4 z-[100] md:absolute md:top-6 md:right-8">
        <button
          onClick={() => setIsDark(!isDark)}
          className="group flex items-center gap-2 px-2 py-1 md:px-2 md:py-1 rounded-full bg-ateneo/80 dark:bg-cochineal/80 backdrop-blur-md border border-white/20 hover:bg-ateneo dark:hover:bg-cochineal transition-all cursor-pointer shadow-lg"
        >
          <div className="relative w-8 h-4 md:w-7 md:h-3.5 bg-white/20 rounded-full transition-colors border border-white/10">
            <div
              className={`absolute top-0.5 w-3 h-3 md:w-2.5 md:h-2.5 bg-white rounded-full transition-all duration-300 shadow-sm ${
                isDark ? "left-4.5 md:left-4" : "left-0.5 md:left-0.5"
              }`}
            />
          </div>
          <span className="text-[9px] md:text-[8px] font-black uppercase tracking-widest text-white/90">
            {isDark ? "Dark" : "Light"}
          </span>
        </button>
      </div>

      <div className="w-full min-h-[230px] bg-gradient-to-br from-ateneo to-slate-900 dark:from-[#003268] dark:to-[#001529] border-t-4 border-t-cochineal flex flex-col items-center justify-center px-4 relative overflow-hidden transition-all duration-500">
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold tracking-tight text-white leading-[1.2] md:leading-tight">
          Hi, I'm{" "}
          <span className="underline decoration-cochineal decoration-2 md:decoration-4 underline-offset-[8px] md:underline-offset-[12px]">
            Jeremy Wipperfurth
          </span>
        </h1>
        <p className="mt-4 text-white/80 font-mono text-[10px] md:text-xs uppercase tracking-[0.2em]">
          Software Development & Computer Science
        </p>
      </div>

      <div className="px-4 flex flex-col items-center">
        <p className="mt-8 text-xl text-slate-600 dark:text-slate-300 max-w-2xl leading-relaxed">
          Software Development student and incoming ASU CS candidate.
          Transitioning from aviation to building clean, logic-driven
          applications.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row gap-4 w-full max-w-xl justify-center">
          <button
            onClick={() => setShowResume(true)}
            className="flex-1 w-full sm:w-64 px-8 py-4 bg-ateneo dark:bg-cochineal text-white font-black rounded-full transition-all hover:bg-cochineal dark:hover:bg-[#001a35] active:scale-95 shadow-xl shadow-ateneo/20 dark:shadow-black/40 uppercase tracking-widest text-sm"
          >
            View Resume
            <span className="inline-block ml-2 transition-transform group-hover:translate-x-1">
              →
            </span>
          </button>

          <button
            onClick={() => setShowAbout(true)}
            className="flex-1 w-full sm:w-64 px-8 py-4 bg-transparent text-ateneo dark:text-slate-300 font-black rounded-full transition-all hover:bg-ateneo/5 dark:hover:bg-white/5 border-2 border-ateneo/20 dark:border-white/10 active:scale-95 uppercase tracking-widest text-sm"
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
          className="fixed inset-0 z-[110] flex items-center justify-center p-4 md:p-10"
          onClick={() => setShowResume(false)}
        >
          <div className="absolute inset-0 bg-ateneo/60 dark:bg-black/80 backdrop-blur-sm" />
          <div
            className="relative bg-white dark:bg-[#001d3d] w-full max-w-5xl max-h-[90vh] overflow-y-auto rounded-3xl border border-slate-200 dark:border-white/10 shadow-2xl custom-scrollbar pr-2"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setShowResume(false)}
              className="absolute top-6 right-6 text-slate-400 dark:text-white/40 hover:text-cochineal dark:hover:text-white text-2xl font-bold transition-colors z-20"
            >
              X
            </button>
            <ResumeContent />
          </div>
        </div>
      )}

      {showAbout && (
        <div
          className="fixed inset-0 z-[110] flex items-center justify-center p-4 md:p-10"
          onClick={() => setShowAbout(false)}
        >
          <div className="absolute inset-0 bg-slate-900/80 dark:bg-black/90 backdrop-blur-sm" />
          <div
            className="relative bg-white dark:bg-[#001d3d] w-full max-w-6xl max-h-[90vh] overflow-y-auto rounded-3xl shadow-2xl custom-scrollbar border border-transparent dark:border-white/5"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="h-2 bg-cochineal w-full" />
            <button
              onClick={() => setShowAbout(false)}
              className="absolute top-8 right-8 text-slate-400 dark:text-white/40 hover:text-cochineal dark:hover:text-white text-2xl font-bold transition-colors z-20"
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
                 bg-white dark:bg-[#002a4d] shadow-xl
                 border-x border-cochineal/20 
                 border-t-4 border-t-cochineal 
                 border-b-4 border-b-ateneo dark:border-b-white/10
                 flex flex-col h-full"
    >
      <div
        className="h-28 relative overflow-hidden p-5 flex flex-col justify-between transition-colors duration-500
                   bg-gradient-to-br from-ateneo to-slate-900 
                   dark:from-[#003268] dark:to-[#001529]
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
        <h2 className="text-xl font-bold text-ateneo dark:text-white group-hover:text-cochineal transition-colors duration-300 uppercase tracking-tight">
          {project.name}
        </h2>

        <p className="text-slate-600 dark:text-slate-200 mt-3 text-sm leading-relaxed flex-grow font-medium">
          {project.description ||
            "Portfolio project demonstrating advanced software development concepts."}
        </p>

        <div className="mt-6 pt-4 border-t border-slate-100 dark:border-white/10">
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-black uppercase text-cochineal dark:text-white hover:text-ateneo dark:hover:text-cochineal transition-colors inline-flex items-center gap-2"
          >
            Explore Repository <span className="text-lg">→</span>
          </a>
        </div>
      </div>
    </div>
  );
}

function App() {
  const [isDark, setIsDark] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDark]);

  return (
    <div className="min-h-screen font-sans py-10 px-4 transition-colors duration-500">
      <div className="relative max-w-6xl mx-auto bg-white dark:bg-[#001d3d] rounded-3xl shadow-2xl overflow-hidden border border-white/20 transition-colors duration-500">
        <Profile isDark={isDark} setIsDark={setIsDark} />

        <section className="pb-20 px-6">
          <h2 className="text-3xl font-bold mb-10 text-center text-ateneo dark:text-white tracking-tighter uppercase">
            Featured Projects
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((item, index) => (
              <ProjectCard key={index} project={item} />
            ))}
          </div>
        </section>

        <footer className="py-10 border-t border-white/10 bg-gradient-to-br from-ateneo to-slate-900 dark:from-[#003268] dark:to-[#001529] text-center transition-colors duration-500">
          <div className="flex justify-center gap-6 mb-4">
            <a
              href="https://github.com/jerwip3"
              className="text-white dark:text-slate-300 hover:text-cochineal dark:hover:text-cochineal transition-colors font-bold text-sm"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/jeremywipperfurth/"
              className="text-white dark:text-slate-300 hover:text-cochineal dark:hover:text-cochineal transition-colors font-bold text-sm"
            >
              LinkedIn
            </a>
            <a
              href="mailto:jerwip@gmail.com"
              className="text-white dark:text-slate-300 hover:text-cochineal dark:hover:text-cochineal transition-colors font-bold text-sm"
            >
              Email
            </a>
          </div>
          <p className="text-[10px] text-white dark:text-slate-500 uppercase tracking-[0.2em]">
            &copy; 2026 Jeremy Wipperfurth - Built with React & Tailwind v4
          </p>
        </footer>
      </div>
    </div>
  );
}

export default App;
