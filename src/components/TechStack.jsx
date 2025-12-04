import {
  FaNodeJs,
  FaReact,
  FaGitAlt,
  FaGithub,
  FaLock,
  FaJs,
  FaPython,
} from "react-icons/fa";
import {
  SiExpress,
  SiPostgresql,
  SiMongodb,
  SiSequelize,
  SiSupabase,
  SiPostman,
  SiJest,
} from "react-icons/si";
import { VscCode } from "react-icons/vsc";

const tech = [
  {
    category: "Languages",
    items: [
      { name: "JavaScript", icon: <FaJs className="text-xl" /> },
      { name: "Python", icon: <FaPython className="text-xl" /> },

      // { name: "React", icon: <FaReact className="text-xl" /> },
    ],
  },
  {
    category: "Backend & APIs",
    items: [
      { name: "Node.js", icon: <FaNodeJs className="text-xl" /> },
      { name: "Express.js", icon: <SiExpress className="text-xl" /> },
      { name: "REST API", icon: <SiPostman className="text-xl" /> },
      { name: "JWT & OAuth", icon: <FaLock className="text-xl" /> },
    ],
  },
  {
    category: "Databases & ORMs",
    items: [
      { name: "MongoDB", icon: <SiMongodb className="text-xl" /> },
      { name: "PostgreSQL", icon: <SiPostgresql className="text-xl" /> },
      { name: "Sequelize", icon: <SiSequelize className="text-xl" /> },
    ],
  },
  {
    category: "Developer Tools",
    items: [
      { name: "VS Code", icon: <VscCode className="text-xl" /> },
      { name: "Git", icon: <FaGitAlt className="text-xl" /> },
      { name: "GitHub", icon: <FaGithub className="text-xl" /> },
      { name: "Postman", icon: <SiPostman className="text-xl" /> },
      { name: "Jest", icon: <SiJest className="text-xl" /> },
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
