import "./App.css";
import TechStack from "./components/TechStack";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import Navbar from "./components/Navbar";

function App() {
  return (
    <main className="bg-gradient-to-br from-gray-900 via-[#111111] to-gray-900 min-h-screen font-sans text-white overflow-hidden">
      <div className="relative">
        {/* Enhanced Background decorations */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-40 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute top-20 right-10 w-72 h-72 bg-teal-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute bottom-40 left-1/2 transform -translate-x-1/2 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse delay-2000"></div>
          <div className="absolute top-1/2 left-1/4 w-48 h-48 bg-indigo-500/5 rounded-full blur-2xl animate-bounce"></div>
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-pink-500/5 rounded-full blur-2xl animate-bounce delay-500"></div>
        </div>

        <Navbar />

        <section
          id="hero-section"
          className="min-h-screen flex items-center justify-start px-4 md:px-10 max-w-5xl mx-auto pt-20 relative z-10"
        >
          <div className="flex flex-col items-start text-left space-y-10 w-full">
            <div className="space-y-6">
              <h1 className="text-5xl md:text-8xl font-extrabold bg-gradient-to-r from-blue-400 via-teal-400 to-purple-400 text-transparent bg-clip-text leading-tight animate-fade-in-up">
                Abdul Kalam
              </h1>
              <h2 className="text-3xl md:text-5xl font-bold text-gray-200 animate-fade-in-up delay-200 hover:underline hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-blue-400 hover:via-teal-400 hover:to-purple-400 transition-all duration-300">
                Full Stack Developer
              </h2>
              <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-3xl animate-fade-in-up delay-300">
                Passionate full-stack developer crafting intuitive digital
                experiences with modern technologies. Specializing in React,
                Node.js, Express, MongoDB, PostgreSQL & Supabase. I build
                scalable APIs, integrate external services, and write clean,
                testable code.
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-start gap-6 pt-8">
              <a
                href="#projects"
                className="group relative px-10 py-5 rounded-xl overflow-hidden shadow-2xl transform hover:scale-110 transition-all duration-300 animate-fade-in-up delay-500"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-teal-500 transition-all group-hover:from-blue-600 group-hover:to-teal-600 group-hover:shadow-blue-500/50"></div>
                <span className="relative text-white font-semibold text-lg">
                  Explore My Work
                </span>
              </a>

              <a
                href="https://github.com/Abdul-Kalam0/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-8 py-5 rounded-xl
                         bg-gradient-to-br from-gray-800/50 to-gray-900/50
                         hover:from-blue-500/10 hover:to-teal-500/10
                         border border-gray-700/50 hover:border-teal-500
                         backdrop-blur-sm transition-all transform hover:scale-110 shadow-2xl animate-fade-in-up delay-700"
              >
                <span className="font-medium">View Github</span>
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                </svg>
              </a>

              <a
                href="/Abdul_Kalam_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-8 py-5 rounded-xl
                         bg-gradient-to-br from-gray-800/50 to-gray-900/50
                         hover:from-blue-500/10 hover:to-teal-500/10
                         border border-gray-700/50 hover:border-teal-500
                         backdrop-blur-sm transition-all transform hover:scale-110 shadow-2xl animate-fade-in-up delay-900"
              >
                <span className="font-medium">View Resume</span>
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
              </a>
            </div>
          </div>
        </section>

        <TechStack />
        <Projects />
        <Contact />
      </div>
    </main>
  );
}

export default App;
