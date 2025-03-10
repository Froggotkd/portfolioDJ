"use client"; 
import { FaReact, FaGithub, FaLinkedin, FaNodeJs, FaDatabase, FaPython, FaHtml5, FaCss3, FaJs, FaJava, FaGitAlt  } from "react-icons/fa";
import { HiAcademicCap } from "react-icons/hi";
import { FaBriefcase, FaPlay  } from "react-icons/fa6";
import { TiHome } from "react-icons/ti";
import { DiCode  } from "react-icons/di";
import { BiLogoPostgresql } from "react-icons/bi";
import { SiAstro, SiTailwindcss } from "react-icons/si";

import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const skills = [
  { name: "Astro", category:"FrontEnd", icon:<SiAstro size={40} className="text-neutral-50" />},
  { name: "CSS3", category: "FrontEnd", icon: <FaCss3 size={40} className="text-blue-500" /> },
  { name: "Git", category: "Other", icon: <FaGitAlt  size={40} className="text-orange-500" /> },
  { name: "HTML5", category: "FrontEnd", icon: <FaHtml5 size={40} className="text-orange-500" /> },
  { name: "Java", category: "BackEnd", icon: <FaJava size={40} className="text-red-400" /> },
  { name: "JavaScript", category: "FrontEnd", icon: <FaJs size={40} className="text-yellow-300" /> },
  { name: "MySQL", category: "BackEnd", icon: <FaDatabase size={40} className="text-green-400" /> },
  { name: "Node.js", category: "BackEnd", icon: <FaNodeJs size={40} className="text-green-500" /> },
  { name: "Python", category: "BackEnd", icon: <FaPython size={40} className="text-yellow-400" /> },
  { name: "PostgreSQL", category:"BackEnd", icon: <BiLogoPostgresql size={40} className="text-blue-500" />},
  { name: "React", category: "FrontEnd", icon: <FaReact size={40} className="text-blue-400" /> },
  { name: "Tailwind CSS", category: "FrontEnd", icon: <SiTailwindcss size={40} className="text-cyan-400" /> },
];

export default function Home() {
  

  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredSkills = selectedCategory === "All"
    ? skills
    : skills.filter(skill => skill.category === selectedCategory);

    useEffect(() =>{
      AOS.init({duration:1200})
    })
  

  
    return (
      <div className="flex min-h-screen bg-black text-white">
        {/* Sidebar */}
        <aside className="w-16 bg-[#121212] flex flex-col items-center py-6 space-y-1 h-screen rounded-md my-1  ml-3 fixed top-0 left-0">
            <div className="flex-1 flex flex-col items-center space-y-2">
            <div className="bg-[#316B31] w-10 h-10 flex items-center justify-center rounded-md">
              <TiHome size={29} className="text-gray-400 hover:text-white cursor-pointer" />
            </div>
            <div className="bg-[#2A2A2A] w-10 h-10 flex items-center justify-center rounded-md">
              <DiCode size={40} className="text-gray-400 hover:text-white cursor-pointer" />
            </div>
            <div className="bg-[#2A2A2A] w-10 h-10 flex items-center justify-center rounded-md">
              <FaBriefcase size={22} className="text-gray-400 hover:text-white cursor-pointer" />
            </div>
            <div className="bg-[#2A2A2A] w-10 h-10 flex items-center justify-center rounded-md">
              <HiAcademicCap size={29} className="text-gray-400 hover:text-white cursor-pointer" />
            </div>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <div className="bg-[#2A2A2A] w-10 h-10 flex items-center justify-center rounded-md">
              <FaGithub size={29} className="text-gray-400 hover:text-white cursor-pointer" />
              </div>
              <div className="bg-[#2A2A2A] w-10 h-10 flex items-center justify-center rounded-md">
              <FaLinkedin size={29} className="text-gray-400 hover:text-white cursor-pointer" />
              </div>
            </div>
          </aside>

        {/* Main Content */}
        <main className="flex-1 p-6 ml-18">
          <div className="bg-gradient-to-t from-[#316B31] to-black p-6 rounded-lg flex items-center space-x-6 [filter:drop-shadow(0_0_3px_rgba(34,197,94,0.1))_drop-shadow(0_0_20px_rgba(34,197,94,0.2))]">
            <div className="rounded-full p-2">
              <img src="https://cdn3d.iconscout.com/3d/premium/thumb/man-avatar-3d-icon-download-in-png-blend-fbx-gltf-file-formats--men-people-male-pack-avatars-icons-5187871.png?f=webp" alt="Avatar" className="w-51 h-45 " />
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
                  className={`px-4 py-2 rounded-full ${
                    selectedCategory === category 
                      ? "bg-[#EFEFEF] text-[#2A2A2A]" 
                      : "bg-[#2A2A2A] text-gray-300 hover:bg-gray-700"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* Skills Grid */}
            <div className="grid grid-cols-3 gap-4 mt-6" >
              {filteredSkills.map((skill, index) => (
                <div key={index} className="bg-[#2A2A2A] p-7 flex items-center justify-between rounded-lg" data-aos="fade-up">
                  <div className="flex items-center space-x-4">
                    {skill.icon}
                    <span className="text-lg font-medium text-white">{skill.name}</span>
                  </div>
                  <div className="bg-[#1ED760] p-2 rounded-full cursor-pointer hover:bg-green-400 transition">
                    <FaPlay size={20} className="text-black" />
                  </div>
                </div>
              ))}
            </div>
          </section>
        </main>
      </div>
  )
}


