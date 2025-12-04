import { useState } from "react";

const projects = [
  {
    title: "Real-Time-Chat-Application",
    description:
      "A simple and scalable backend for a real-time chat application. Built with Node.js, Express, and Socket.IO for live messaging, and MongoDB for user and message persistence.",
    link: "https://github.com/Abdul-Kalam0/Real-Time-Chat-Application",
    // image: "/snapvault.png",
    // demo: "https://snap-vault-backend-ajmal-razas-projects.vercel.app",
    tech: ["Node.js", "Express", "MongoDB", "Socket.io", "Bcrypt", "JWT"],
  },
  // {
  //   title: "Spotify-backend",
  //   description:
  //     "Developed a Node.js & Express.js backend that integrates with the Spotify Web API to enable core music streaming functionalities. Implemented OAuth 2.0 authentication for secure user login via Spotify accounts and handled token refresh workflows. Designed RESTful API endpoints.",
  //   link: "https://github.com/Abdul-Kalam0/Spotify",
  //   // image: "/moviecrate.png",
  //   // demo: "https://snapvault-demo.vercel.app",
  //   tech: ["Node.js", "Express", "MongoDB", "Mongoose", "JWT", "Bcrypt"],
  // },
  {
    title: "OAuth Login App",
    description:
      "Secure authentication system with frontend & backend using token-based OAuth and protected routes.",
    link: "https://github.com/Abdul-Kalam0/OAuth-Backend",
    // image: "/oauth.png",
    //demo: "https://oauth-server-eac27.vercel.app/",
    tech: ["Node.js", "Express", "PostgreSQL", "Supabase", "Sequelize"],
  },
  // {
  //   title: "TheDocStore: Document Management System",
  //   description:
  //     "Document management system with folder restrictions, file metadata, and Cloudinary uploads. Built using Node.js, Sequelize, Supabase, and Multer.",
  //   link: "https://github.com/ajmal92786/The-Doc-Store",
  //   // image: "/docstore.png", ]
  //   // demo: "https://snapvault-demo.vercel.app",
  //   tech: ["Node.js", "Express", "PostgreSQL", "Supabase", "Sequelize"],
  // },
];

export default function Projects() {
  const [showAll, setShowAll] = useState(false);
  const projectsToShow = showAll ? projects : projects.slice(0, 3);

  return (
    <section id="projects" className="py-12 px-4 max-w-5xl mx-auto">
      <div className="flex items-center gap-4 mb-8">
        <h2 className="text-3xl font-bold text-[#ccd6f6]">Featured Projects</h2>
        <div className="h-[1px] bg-white flex-grow"></div>
      </div>

      <div className="grid md:grid-cols-3 gap-4 justify-items-center">
        {projectsToShow.map((project) => (
          <div
            key={project.title}
            className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg overflow-hidden shadow-xl hover:shadow-teal-500/25 transition-all duration-300 flex flex-col w-[300px] border border-gray-700 hover:border-teal-500"
          >
            <div className="p-6 flex-1 flex flex-col">
              <h3 className="text-lg font-semibold text-gray-200 mb-3">
                {project.title}
              </h3>
              <p className="text-gray-400 text-sm mb-4">
                {project.description}
              </p>

              <div className="mt-auto space-y-4">
                <div>
                  <h4 className="text-xs font-semibold text-gray-400 mb-2">
                    Technologies:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="text-teal-400 text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex gap-3 justify-between">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gradient-to-r from-blue-500 to-teal-500 text-white px-4 py-2 rounded-md text-sm inline-flex items-center hover:from-blue-600 hover:to-teal-600 transition-all shadow-lg hover:shadow-teal-500/25"
                  >
                    GitHub
                    <svg
                      className="w-4 h-4 ml-2"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                    </svg>
                  </a>
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-gradient-to-r from-blue-500 to-teal-500 text-white px-4 py-2 rounded-md text-sm inline-flex items-center hover:from-blue-600 hover:to-teal-600 transition-all shadow-lg hover:shadow-teal-500/25"
                    >
                      Demo
                      <svg
                        className="w-4 h-4 ml-2"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                        />
                      </svg>
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {projects.length > 3 && (
        <div className="flex justify-center mt-12">
          <button
            onClick={() => setShowAll(!showAll)}
            className="group relative inline-flex items-center gap-2 px-6 py-3 border-2 border-white text-white rounded hover:bg-[#64ffda]/10 transition-colors"
          >
            {showAll ? (
              <>
                Show Less
                <svg
                  className="w-5 h-5 transform rotate-90 group-hover:-translate-y-1 transition-transform"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </>
            ) : (
              <>
                Show More
                <svg
                  className="w-5 h-5 transform -rotate-90 group-hover:translate-y-1 transition-transform"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </>
            )}
          </button>
        </div>
      )}
    </section>
  );
}
