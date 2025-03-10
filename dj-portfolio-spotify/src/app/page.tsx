"use client"; 
import { FaReact, FaGithub, FaLinkedin, FaNodeJs, FaDatabase, FaPython, FaHtml5, FaCss3, FaJs, FaJava, FaGitAlt  } from "react-icons/fa";
import { HiAcademicCap } from "react-icons/hi";
import { FaBriefcase, FaPlay  } from "react-icons/fa6";
import { TiHome } from "react-icons/ti";
import { DiCode  } from "react-icons/di";
import { BiLogoPostgresql } from "react-icons/bi";
import { SiAstro, SiTailwindcss } from "react-icons/si";
import { TbBrandCpp } from "react-icons/tb";

import { useRouter } from "next/navigation";
import Link from "next/link";
import dynamic from "next/dynamic";

import { ReactNode, useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";


type SkillPanelType = {
  name: string;
  description: string
  category: string;
  icon: ReactNode ;
  playingSince: string;
  xpLevel: number;
  projects: { name: string; url: string }[];
};

const skillPanel: SkillPanelType[] = [
  {
    name:"Astro",
    description: "FrontEnd Javascript framework, static web, SEO - efficent",
    category: "FrontEnd",
    icon:<SiAstro size={40} className="text-neutral-50" />,
    playingSince: "2025",
    xpLevel: 50,
    projects: [{ name: "Portfolio", url: "uu" }],
  },
  {
    name:"CSS 3",
    description:"Styles, layouts, and responsive designs for web pages.",
    category: "FrontEnd",
    icon:<FaCss3 size={40} className="text-blue-500" />,
    playingSince: "2023",
    xpLevel: 80,
    projects: [{ name: "Portfolio", url: "uu" }],
  },
  {
    name:"C ++",
    description:"Low-level language with memory management for performance-critical applications.",
    category: "BackEnd",
    icon:<TbBrandCpp size={40} className="text-blue-500" />,
    playingSince: "2022",
    xpLevel: 80,
    projects: [{ name: "Portfolio", url: "uu" }],
  },
  {
    name:"Git",
    description:"Version control system for tracking and managing code changes.",
    category: "Other",
    icon:<FaGitAlt  size={40} className="text-orange-500" />,
    playingSince: "2022",
    xpLevel: 80,
    projects: [{ name: "Portfolio", url: "uu" }],
  },
  {
    name:"HTML 5",
    description:"Markup language for structuring content on the web.",
    category: "FrontEnd",
    icon:<FaHtml5 size={40} className="text-orange-500" />,
    playingSince: "2022",
    xpLevel: 80,
    projects: [{ name: "Portfolio", url: "uu" }],
  },
  {
    name:"Java",
    description:"Object-oriented, platform-independent language for enterprise applications.",
    category: "BackEnd",
    icon:<FaJava size={40} className="text-red-400" />,
    playingSince: "2022",
    xpLevel: 90,
    projects: [{ name: "Portfolio", url: "uu" }],
  },
  {
    name:"JavaScript",
    description:"Client-side scripting for dynamic and interactive web functionality",
    category: "FrontEnd",
    icon:<FaJs size={40} className="text-yellow-300" />,
    playingSince: "2023",
    xpLevel: 60,
    projects: [{ name: "Portfolio", url: "uu" }],
  },
  {
    name:"MySQL",
    description:"Relational database management system using SQL for queries.",
    category: "BackEnd",
    icon:<FaDatabase size={40} className="text-green-400" />,
    playingSince: "2024",
    xpLevel: 60,
    projects: [{ name: "Portfolio", url: "uu" }],
  },
  {
    name:"Node.js",
    description:"Runtime environment for server-side JavaScript execution.",
    category: "BackEnd",
    icon:<FaNodeJs size={24} className="text-green-500" />,
    playingSince: "2023",
    xpLevel: 65,
    projects: [{ name: "Portfolio", url: "uu" }],
  },
  {
    name:"Python",
    description:"High-level, interpreted language for scripting and automation.",
    category: "BackEnd",
    icon:<FaPython size={40} className="text-yellow-400" />,
    playingSince: "2023",
    xpLevel: 75,
    projects: [{ name: "Portfolio", url: "uu" }],
  },
  {
    name:"PostgreSQL",
    description:"Object-relational database with ACID compliance and extensibility.",
    category: "BackEnd",
    icon:<BiLogoPostgresql size={40} className="text-blue-500" />,
    playingSince: "2023",
    xpLevel: 80,
    projects: [{ name: "Portfolio", url: "uu" }],
  },
  {
    name: "React",
    description:"JavaScript library for building component-based user interfaces.",
    category: "FrontEnd",
    icon: <FaReact size={40} className="text-blue-400" />,
    playingSince: "2023",
    xpLevel: 65,
    projects: [{ name: "Portfolio", url: "uu" }],
  },
  {
    name: "Tailwind CSS",
    description:"Utility-first CSS framework for customizable, responsive designs.",
    category: "FrontEnd",
    icon: <SiTailwindcss size={40} className="text-cyan-400" />,
    playingSince: "2025",
    xpLevel: 25,
    projects: [{ name: "Portfolio", url: "uu" }],
  },
  
];


export default function Home() {
    const router = useRouter();

    const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredSkills = selectedCategory === "All"
    ? skillPanel
    : skillPanel.filter(skillPanel => skillPanel.category === selectedCategory);

    useEffect(() =>{
      AOS.init({duration:1200})
    })
  
    const [selectedSkill, setSelectedSkill] = useState<SkillPanelType | null>(null);
    const [isPanelOpen, setIsPanelOpen] = useState(false);

    const openPanel = (skill: SkillPanelType) => {
      setSelectedSkill(skill);
      setIsPanelOpen(true);
    };
    const closePanel = () => {
      setIsPanelOpen(false);
      setTimeout(() => setSelectedSkill(null), 300); 
    };

  
    return (

      <div className="flex min-h-screen bg-black text-white">
          {/* Sidebar */}
          <aside className="w-16 bg-[#121212] flex flex-col items-center py-6 space-y-1 h-screen rounded-md my-1  ml-3 fixed top-0 left-0">
            <div className="flex-1 flex flex-col items-center space-y-2">
            <div className="bg-[#316B31] w-10 h-10 flex items-center justify-center rounded-md">
                  <TiHome size={29} className="text-gray-400 hover:text-white cursor-pointer" />
                </div>
            <Link href="/projects">
                <div className="bg-[#2A2A2A] w-10 h-10 flex items-center justify-center rounded-md">
                  <DiCode size={40} className="text-gray-400 hover:text-white cursor-pointer" />
                </div>
                </Link>
              <div className="bg-[#2A2A2A] w-10 h-10 flex items-center justify-center rounded-md">
                <FaBriefcase size={22} className="text-gray-400 hover:text-white cursor-pointer" />
              </div>
              <div className="bg-[#2A2A2A] w-10 h-10 flex items-center justify-center rounded-md">
                <HiAcademicCap size={29} className="text-gray-400 hover:text-white cursor-pointer" />
              </div>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <div className="bg-[#2A2A2A] w-10 h-10 flex items-center justify-center rounded-md">
                <a href="https://github.com/Froggotkd" target="_blank" rel="noopener noreferrer">
                  <FaGithub size={29} className="text-gray-400 hover:text-white cursor-pointer" />
                </a>
              </div>
              <div className="bg-[#2A2A2A] w-10 h-10 flex items-center justify-center rounded-md">
                <FaLinkedin size={29} className="text-gray-400 hover:text-white cursor-pointer" />
              </div>
            </div>
          </aside>

          {/* Main Content */}
          <main className="flex-1 p-6 ml-18">
            <div className={`bg-gradient-to-t from-[#316B31] to-black p-6 rounded-lg flex items-center space-x-6 [filter:drop-shadow(0_0_3px_rgba(34,197,94,0.1))_drop-shadow(0_0_20px_rgba(34,197,94,0.2))] ${isPanelOpen ? "w-197" : "w-auto"} `}>
              <div className="rounded-full p-2">
                <img src="https://cdn3d.iconscout.com/3d/premium/thumb/man-avatar-3d-icon-download-in-png-blend-fbx-gltf-file-formats--men-people-male-pack-avatars-icons-5187871.png?f=webp" alt="Avatar" className={`${isPanelOpen ? "w-28 h-20" : "w-51 h-45"}`} />
              </div>
              <div>
                <p className="text-gray-300 p-2">📌 Quito, Ecuador</p>
                <h2 className="text-3xl font-bold p-2">DANIEL JARAMILLO</h2>
                <p className="text-gray-400 mt-2">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
            </div>

            {/* Skills Section */}
            <section className="mt-6">
              <h3 className="text-2xl font-semibold p-2">My library (of skills)</h3>

              {/* Filter Tabs */}
              <div className="flex space-x-3 mt-3">
                {["All", "FrontEnd", "BackEnd", "Other"].map(category => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-full ${selectedCategory === category
                        ? "bg-[#EFEFEF] text-[#2A2A2A]"
                        : "bg-[#2A2A2A] text-gray-300 hover:bg-gray-700"}`}
                  >
                    {category}
                  </button>
                ))}
              </div>

              {/* Skills Grid */}
              <div className={`grid gap-4 mt-6 ${isPanelOpen ? "grid-cols-3 w-197" : "grid-cols-3"}`}>
                {filteredSkills.map((skill, index) => (
                  <div key={index} className=" mb-1 group bg-[#2A2A2A] p-7 flex items-center justify-between rounded-lg"
                    data-aos="fade-up">
                    <div className="flex items-center space-x-4">
                      {skill.icon}
                      <span className="text-lg font-medium text-white">{skill.name}</span>
                    </div>
                    <div className="bg-[#1ED760] p-2 rounded-full cursor-pointer hover:bg-green-400 transition opacity-0 group-hover:opacity-100">
                      <FaPlay size={20} className="text-black" onClick={() => openPanel(skill)} />
                    </div>
                  </div>
                ))}

                <div className={`border-8 border-transparent fixed top-0 right-0 h-full w-80 bg-[#121212] text-white shadow-lg transition-transform duration-300 ${isPanelOpen ? "translate-x-0" : "translate-x-full"}`}>
                  <button
                    className="absolute top-4 right-4 text-2xl"
                    onClick={closePanel}
                  >
                    ✖
                  </button>
                  {selectedSkill && (
                    <div className="p-6 mt-10">
                      <div className="place-items-center">
                        {selectedSkill.icon}
                      </div>
                      <h2 className="text-2xl font-bold text-center mt-4">
                        {selectedSkill.name}
                      </h2>
                      <p className="text-sm">{selectedSkill.description}</p>
                      <p className="mt-2">Playing Since: {selectedSkill.playingSince}</p>

                      {/* Experience Bar */}
                      <div className="w-full bg-gray-700 h-2 rounded-full mt-4">
                        <div
                          className="bg-green-400 h-2 rounded-full"
                          style={{ width: `${selectedSkill.xpLevel}%` }}
                        ></div>
                      </div>

                      {/* Projects */}
                      <h3 className="mt-6 text-lg font-semibold">Projects:</h3>
                      <ul className="mt-2">
                        {selectedSkill.projects.map((project) => (
                          <li key={project.name} className="mt-1">
                            <a
                              href={project.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-blue-400 hover:underline"
                            >
                              {project.name}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>

              </div>
            </section>
          </main>
        </div>
  )
}


