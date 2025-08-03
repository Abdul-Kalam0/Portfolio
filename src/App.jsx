import "./App.css";
import TechStack from "./components/TechStack";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import Navbar from "./components/Navbar";

function App() {
  return (
    <main className="bg-gradient-to-br from-gray-900 via-[#111111] to-gray-900 min-h-screen font-sans text-white">
      <div className="relative">
        {/* Background decoration */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-40 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"></div>
          <div className="absolute top-20 right-10 w-72 h-72 bg-teal-500/10 rounded-full blur-3xl"></div>
        </div>

        <Navbar />

        <section
          id="hero-section"
          className="min-h-screen flex items-center justify-center px-4 md:px-10 max-w-6xl mx-auto pt-20 relative"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-12 w-full">
            {/* Left side - Content */}
            <div className="flex flex-col justify-center items-center md:items-start text-center md:text-left space-y-8 w-full md:w-1/2">
              <div className="space-y-4">
                <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 to-teal-400 text-transparent bg-clip-text leading-tight">
                  Welcome,
                </h1>
                <p className="text-lg text-gray-300 leading-relaxed">
                  Backend developer skilled in Node.js, Express, MongoDB,
                  PostgreSQL & Supabase. I build scalable APIs, integrate
                  external services, and write clean, testable code.
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-4 pt-4">
                <a
                  href="#projects"
                  className="group relative px-6 py-3 rounded-md overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-teal-500 transition-all group-hover:from-blue-600 group-hover:to-teal-600"></div>
                  <span className="relative text-white font-medium">
                    Explore My Work
                  </span>
                </a>

                <a
                  href="https://github.com/Abdul-Kalam0/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-6 py-3 rounded-md
                           bg-gradient-to-br from-gray-800/50 to-gray-900/50
                           hover:from-blue-500/10 hover:to-teal-500/10
                           border border-gray-700/50 hover:border-teal-500
                           backdrop-blur-sm transition-all"
                >
                  <span>View Github</span>
                  <svg
                    className="w-5 h-5"
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
                  className="flex items-center gap-2 px-6 py-3 rounded-md
                           bg-gradient-to-br from-gray-800/50 to-gray-900/50
                           hover:from-blue-500/10 hover:to-teal-500/10
                           border border-gray-700/50 hover:border-teal-500
                           backdrop-blur-sm transition-all"
                >
                  <span>View Resume</span>
                  <svg
                    className="w-5 h-5"
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

            {/* Right side - Image */}
            <div className="w-full md:w-1/2 flex justify-center md:justify-end">
              <div className="relative w-[280px] h-[350px]">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-teal-500/20 blur-2xl"></div>
                <div className="relative h-full w-full bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg overflow-hidden shadow-xl border border-gray-700/50">
                  <img
                    src="./profile-pic.jpeg"
                    alt="Portfolio"
                    className="w-full h-full object-cover opacity-90 hover:opacity-100 transition-all duration-300"
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 w-2/3 h-2/3 border-2 border-teal-500/20 rounded-lg -z-10"></div>
              </div>
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
