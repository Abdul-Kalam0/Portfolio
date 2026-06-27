import {
  FaNodeJs,
  FaGitAlt,
  FaGithub,
  FaLock,
  FaJs,
  FaPython,
  FaReact,
  FaTools,
  FaBrain,
} from "react-icons/fa";

import {
  SiExpress,
  SiPostgresql,
  SiMongodb,
  SiSequelize,
  SiRedux,
  SiBootstrap,
  SiTailwindcss,
  SiSupabase,
  SiPostman,
  SiJest,
  SiGoogle,
  SiWebpack,
  SiOpenai,
  SiTypescript,
  SiDocker,
} from "react-icons/si";

import { VscCode } from "react-icons/vsc";

const tech = [
  {
    category: "Languages",
    items: [
      {
        name: "JavaScript",
        icon: <FaJs className="text-xl text-yellow-400" />,
      },
      {
        name: "TypeScript",
        icon: <SiTypescript className="text-xl text-blue-500" />,
      },
      {
        name: "Python",
        icon: <FaPython className="text-xl text-blue-600" />,
      },
    ],
  },

  {
    category: "Frontend & Full Stack",
    items: [
      {
        name: "React.js",
        icon: <FaReact className="text-xl text-blue-500" />,
      },
      {
        name: "Redux",
        icon: <SiRedux className="text-xl text-purple-600" />,
      },
      {
        name: "Bootstrap",
        icon: <SiBootstrap className="text-xl text-indigo-500" />,
      },
      {
        name: "Tailwind CSS",
        icon: <SiTailwindcss className="text-xl text-cyan-400" />,
      },
      {
        name: "Webpack",
        icon: <SiWebpack className="text-xl text-blue-400" />,
      },
    ],
  },

  {
    category: "Backend & APIs",
    items: [
      {
        name: "Node.js",
        icon: <FaNodeJs className="text-xl text-green-500" />,
      },
      {
        name: "Express.js",
        icon: <SiExpress className="text-xl text-gray-300" />,
      },
      {
        name: "REST API",
        icon: <SiPostman className="text-xl text-orange-500" />,
      },
      {
        name: "JWT Authentication",
        icon: <FaLock className="text-xl text-gray-400" />,
      },
      {
        name: "Google OAuth",
        icon: <SiGoogle className="text-xl text-red-500" />,
      },
      {
        name: "Middleware",
        icon: <FaTools className="text-xl text-teal-400" />,
      },
      {
        name: "MVC Architecture",
        icon: <FaTools className="text-xl text-purple-400" />,
      },
    ],
  },

  {
    category: "AI & Generative AI",
    items: [
      // {
      //   name: "Artificial Intelligence",
      //   icon: <FaBrain className="text-xl text-pink-500" />,
      // },
      {
        name: "Generative AI",
        icon: <SiOpenai className="text-xl text-green-400" />,
      },
      {
        name: "LLM Integration",
        icon: <SiOpenai className="text-xl text-emerald-400" />,
      },
      {
        name: "Prompt Engineering",
        icon: <FaBrain className="text-xl text-yellow-400" />,
      },
      {
        name: "Google Gemini API",
        icon: <SiGoogle className="text-xl text-blue-500" />,
      },
    ],
  },

  {
    category: "Databases & ORMs",
    items: [
      {
        name: "MongoDB",
        icon: <SiMongodb className="text-xl text-green-600" />,
      },
      {
        name: "Mongoose",
        icon: <SiMongodb className="text-xl text-green-500" />,
      },
      {
        name: "PostgreSQL",
        icon: <SiPostgresql className="text-xl text-blue-700" />,
      },
      {
        name: "Sequelize",
        icon: <SiSequelize className="text-xl text-blue-500" />,
      },
      // {
      //   name: "Supabase",
      //   icon: <SiSupabase className="text-xl text-green-400" />,
      // },
    ],
  },

  {
    category: "Developer Tools",
    items: [
      {
        name: "VS Code",
        icon: <VscCode className="text-xl text-blue-600" />,
      },
      {
        name: "Git",
        icon: <FaGitAlt className="text-xl text-orange-600" />,
      },
      {
        name: "GitHub",
        icon: <FaGithub className="text-xl text-gray-200" />,
      },
      {
        name: "Postman",
        icon: <SiPostman className="text-xl text-orange-500" />,
      },
      {
        name: "Jest",
        icon: <SiJest className="text-xl text-red-500" />,
      },
      {
        name: "Webpack",
        icon: <SiWebpack className="text-xl text-blue-400" />,
      },
      {
        name: "Docker",
        icon: <SiDocker className="text-xl text-blue-400" />,
      },
    ],
  },
];

export default function TechStack() {
  return (
    <section id="tech-stack" className="py-20 px-4 max-w-4xl mx-auto">
      <div className="flex items-center gap-4 mb-12">
        <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-teal-400 text-transparent bg-clip-text">
          Tech Stack
        </h2>

        <div className="h-[1px] bg-gradient-to-r from-blue-400 to-teal-400 flex-grow"></div>
      </div>

      <div className="space-y-12">
        {tech.map(({ category, items }) => (
          <div key={category} className="space-y-6">
            <h3 className="text-xl font-semibold text-gray-200 mb-4">
              {category}
            </h3>

            <div className="flex flex-wrap gap-4">
              {items.map(({ name, icon }) => (
                <span
                  key={name}
                  className="flex items-center gap-2 px-4 py-3 rounded-lg 
                  bg-gradient-to-br from-gray-800 to-gray-900 text-gray-200
                  hover:from-blue-500/10 hover:to-teal-500/10 transition-all
                  border border-gray-700 hover:border-teal-500
                  shadow-lg hover:shadow-teal-500/25"
                >
                  {icon}
                  {name}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
