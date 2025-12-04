import {
  FaNodeJs,
  FaGitAlt,
  FaGithub,
  FaLock,
  FaJs,
  FaPython,
  FaReact,
  FaTools,
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
      { name: "Python", icon: <FaPython className="text-xl text-blue-600" /> },

      // { name: "React", icon: <FaReact className="text-xl" /> },
    ],
  },
  {
    category: "Full Stack & APIs",
    items: [
      { name: "React.js", icon: <FaReact className="text-xl text-blue-500" /> },
      { name: "Redux", icon: <SiRedux className="text-xl text-purple-600" /> },
      {
        name: "Bootstrap",
        icon: <SiBootstrap className="text-xl text-indigo-500" />,
      },
      {
        name: "Tailwind CSS",
        icon: <SiTailwindcss className="text-xl text-[#38BDF8]" />,
      },

      {
        name: "Node.js",
        icon: <FaNodeJs className="text-xl text-green-500" />,
      },
      {
        name: "Express.js",
        icon: <SiExpress className="text-xl text-gray-700" />,
      },
      {
        name: "REST API",
        icon: <SiPostman className="text-xl text-orange-500" />,
      },
      {
        name: "JWT & OAuth",
        icon: <FaLock className="text-xl text-gray-500" />,
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
        name: "PostgreSQL",
        icon: <SiPostgresql className="text-xl text-blue-700" />,
      },
      {
        name: "Sequelize",
        icon: <SiSequelize className="text-xl text-blue-500" />,
      },
    ],
  },
  {
    category: "Developer Tools",
    items: [
      { name: "VS Code", icon: <VscCode className="text-xl text-blue-600" /> },
      { name: "Git", icon: <FaGitAlt className="text-xl text-orange-600" /> },
      { name: "GitHub", icon: <FaGithub className="text-xl text-gray-800" /> },
      {
        name: "Postman",
        icon: <SiPostman className="text-xl text-orange-500" />,
      },
      { name: "Jest", icon: <SiJest className="text-xl text-red-500" /> },
      {
        name: "Chrome DevTools",
        icon: <FaTools className="text-xl text-gray-600" />,
      },
    ],
  },
  // {
  //   category: "Frontend & Storage",
  //   items: [
  //     { name: "Tailwind CSS", icon: <SiTailwindcss className="text-xl" /> },
  //     { name: "Multer & Cloudinary", icon: <FaCloudversify className="text-xl" /> },
  //   ],
  // },
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
