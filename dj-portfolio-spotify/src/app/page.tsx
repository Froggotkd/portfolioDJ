"use client"; 
import { FaReact, FaGithub, FaLinkedin, FaNodeJs, FaPython, FaHtml5, FaCss3, FaJs, FaJava, FaGitAlt  } from "react-icons/fa";
import { HiAcademicCap } from "react-icons/hi";
import { FaBriefcase, FaPlay  } from "react-icons/fa6";
import { TiHome } from "react-icons/ti";
import { DiCode, DiMysql   } from "react-icons/di";
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
  image: string,
  color: string;
  name: string;
  description: string
  category: string;
  icon: ReactNode ;
  playingSince: string;
  xpLevel: number;
  projects: { name: string; url: string, cover: string }[];
};

const skillPanel: SkillPanelType[] = [
  {
    image:"https://media2.dev.to/dynamic/image/width=1280,height=720,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fntwbi1zq2vxsqbb3hkiy.png",
    color:"#333232",
    name:"Astro",
    description: "FrontEnd Javascript framework, static web, SEO - efficent",
    category: "FrontEnd",
    icon:<SiAstro size={40} className="text-neutral-50" />,
    playingSince: "2025",
    xpLevel: 50,
    projects: [{ name: "Portfolio", url: "uu", cover:"https://www.shutterstock.com/image-photo/awesome-pic-natureza-600nw-2408133899.jpg" }],
  },
  {
    image:"https://blogandweb.com/wp-content/uploads/2010/02/css3-500x281.png",
    color:"#0a1c38",
    name:"CSS 3",
    description:"Styles, layouts, and responsive designs for web pages.",
    category: "FrontEnd",
    icon:<FaCss3 size={40} className="text-blue-500" />,
    playingSince: "2023",
    xpLevel: 80,
    projects: [{ name: "Portfolio", url: "uu", cover:"https://www.shutterstock.com/image-photo/awesome-pic-natureza-600nw-2408133899.jpg" }],
  },
  {
    image:"https://www.godaddy.com/resources/latam/wp-content/uploads/programacionc.webp",
    color:"#0a1c38",
    name:"C ++",
    description:"Low-level language with memory management for performance-critical applications.",
    category: "BackEnd",
    icon:<TbBrandCpp size={40} className="text-blue-500" />,
    playingSince: "2022",
    xpLevel: 80,
    projects: [{ name: "Portfolio", url: "uu", cover:"https://www.shutterstock.com/image-photo/awesome-pic-natureza-600nw-2408133899.jpg" }],
  },
  {
    image:"https://media.licdn.com/dms/image/v2/D4D12AQFPEOmOOcwwAg/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1706896285400?e=2147483647&v=beta&t=NvySqjCinqHUjKyQ1iILjE8-x57zaVHqHlrNIMBTL0c",
    color:"#40200b",
    name:"Git",
    description:"Version control system for tracking and managing code changes.",
    category: "Other",
    icon:<FaGitAlt  size={40} className="text-orange-500" />,
    playingSince: "2022",
    xpLevel: 80,
    projects: [{ name: "Portfolio", url: "uu", cover:"https://www.shutterstock.com/image-photo/awesome-pic-natureza-600nw-2408133899.jpg" }],
  },
  {
    image:"https://phoenixnap.com/glossary/wp-content/uploads/2023/04/what-is-html.jpg",
    color:"#40200b",
    name:"HTML 5",
    description:"Markup language for structuring content on the web.",
    category: "FrontEnd",
    icon:<FaHtml5 size={40} className="text-orange-500" />,
    playingSince: "2022",
    xpLevel: 80,
    projects: [{ name: "Portfolio", url: "uu", cover:"https://www.shutterstock.com/image-photo/awesome-pic-natureza-600nw-2408133899.jpg" }],
  },
  {
    image:"https://www.orientsoftware.com/Themes/Content/Images/blog/2024-05-16/oop-language-java.webp",
    color:"#400406",
    name:"Java",
    description:"Object-oriented, platform-independent language for enterprise applications.",
    category: "BackEnd",
    icon:<FaJava size={40} className="text-red-400" />,
    playingSince: "2022",
    xpLevel: 90,
    projects: [{ name: "Portfolio", url: "uu", cover:"https://www.shutterstock.com/image-photo/awesome-pic-natureza-600nw-2408133899.jpg" },{ name: "aaa", url: "uu", cover:"https://www.shutterstock.com/image-photo/awesome-pic-natureza-600nw-2408133899.jpg" },{ name: "pROJECTO 3", url: "uu", cover:"https://www.shutterstock.com/image-photo/awesome-pic-natureza-600nw-2408133899.jpg" }],
  },
  {
    image:"https://binarapps.com/wp-content/uploads/2021/02/2021-01-11-CG-Grudzien%CC%81_8.What-is-a-JavaScript-framework-Which-one-is-the-best-.png",
    color:"#665907",
    name:"JavaScript",
    description:"Client-side scripting for dynamic and interactive web functionality",
    category: "FrontEnd",
    icon:<FaJs size={40} className="text-yellow-300" />,
    playingSince: "2023",
    xpLevel: 60,
    projects: [{ name: "Portfolio", url: "uu", cover:"https://www.shutterstock.com/image-photo/awesome-pic-natureza-600nw-2408133899.jpg" }],  },
  {
    image:"https://media.licdn.com/dms/image/v2/D4D12AQGOVSednILAUQ/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1694616033281?e=2147483647&v=beta&t=l7Rd4WLlaOg1fnWKyuJMdRROYIvM-8tt8So1JYW4CJQ",
    color:"#0a1c38",
    name:"MySQL",
    description:"Relational database management system using SQL for queries.",
    category: "BackEnd",
    icon:<DiMysql  size={40} className="text-blue-500" />,
    playingSince: "2024",
    xpLevel: 60,
    projects: [{ name: "Portfolio", url: "uu", cover:"https://www.shutterstock.com/image-photo/awesome-pic-natureza-600nw-2408133899.jpg" }],  },
  {
    image:"https://creativemansion.com.ng/wp-content/uploads/2022/10/The-Node.js-Architecture.-Hello-everyone.-Hope-you-are-doing%E2%80%A6-by-Ad.png",
    color:"#062403",
    name:"Node.js",
    description:"Runtime environment for server-side JavaScript execution.",
    category: "BackEnd",
    icon:<FaNodeJs size={24} className="text-green-500" />,
    playingSince: "2023",
    xpLevel: 35,
    projects: [{ name: "Portfolio", url: "uu", cover:"https://www.shutterstock.com/image-photo/awesome-pic-natureza-600nw-2408133899.jpg" }],  },
  {
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQm-z3E98u1Z5x6iJd5KQ9Q3Gnzj_cJaUCBzg&s",
    color:"#344004",
    name:"Python",
    description:"High-level, interpreted language for scripting and automation.",
    category: "BackEnd",
    icon:<FaPython size={40} className="text-yellow-400" />,
    playingSince: "2023",
    xpLevel: 75,
    projects: [{ name: "Portfolio", url: "uu", cover:"https://www.shutterstock.com/image-photo/awesome-pic-natureza-600nw-2408133899.jpg" }],  },
  {
    image:"https://kinsta.com/es/wp-content/uploads/sites/8/2022/04/que-es-postgresql.png",
    color:"#0a1c38",
    name:"PostgreSQL",
    description:"Object-relational database with ACID compliance and extensibility.",
    category: "BackEnd",
    icon:<BiLogoPostgresql size={40} className="text-blue-500" />,
    playingSince: "2023",
    xpLevel: 80,
    projects: [{ name: "Portfolio", url: "uu", cover:"https://www.shutterstock.com/image-photo/awesome-pic-natureza-600nw-2408133899.jpg" }],  },
  {
    image:"https://i0.wp.com/getmimo.wpcomstaging.com/wp-content/uploads/2024/06/react_header.png?fit=1920%2C1080&ssl=1",
    color:"#0a1c38",
    name: "React",
    description:"JavaScript library for building component-based user interfaces.",
    category: "FrontEnd",
    icon: <FaReact size={40} className="text-blue-400" />,
    playingSince: "2023",
    xpLevel: 65,
    projects: [{ name: "Portfolio", url: "uu", cover:"https://www.shutterstock.com/image-photo/awesome-pic-natureza-600nw-2408133899.jpg" }],  },
  {
    image:"https://webdesignerdepot-wp.s3.us-east-2.amazonaws.com/2021/09/08123810/featured_tailwind_2022-09-16-143652_okfu.jpeg",
    color:"#187280",
    name: "Tailwind CSS",
    description:"Utility-first CSS framework for customizable, responsive designs.",
    category: "FrontEnd",
    icon: <SiTailwindcss size={40} className="text-cyan-400" />,
    playingSince: "2025",
    xpLevel: 25,
    projects: [{ name: "Portfolio", url: "/projects", cover:"https://www.shutterstock.com/image-photo/awesome-pic-natureza-600nw-2408133899.jpg" }],  },
  
];



export default function Home() {

    const router = useRouter();

    const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredSkills = selectedCategory === "All"
    ? skillPanel
    : skillPanel.filter(skillPanel => skillPanel.category === selectedCategory);

    useEffect(() =>{
      AOS.init({duration:1200});
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

    const[colorGradient, setColorGradient] = useState("#2a2a2a");

  
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
          <main 
            className="flex-1 p-6 ml-18 transition-all duration-[4500ms] ease-in-out"
            style={{ 
              backgroundImage: `linear-gradient(to top, rgba(0, 0, 0, 0.9), ${colorGradient})`,
              transition: 'background-image 4s ease-in-out'
            }}
            onMouseEnter={() => setColorGradient("rgba(34, 34, 34, 0.8)")} 
          >
            <div className={`bg-gradient-to-t from-[#316B31] to-[#121212] p-6 rounded-lg flex items-center space-x-6 [filter:drop-shadow(0_0_3px_rgba(34,197,94,0.1))_drop-shadow(0_0_20px_rgba(34,197,94,0.2))] ${isPanelOpen ? "w-197" : "w-auto"} `}>
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
                    className={`cursor-pointer px-4 py-2 rounded-full ${selectedCategory === category
                        ? "bg-[#EFEFEF] text-[#2A2A2A]"
                        : "bg-[#2A2A2A] text-gray-300 hover:bg-[#424242]"}`}
                  >
                    {category}
                  </button>
                ))}
              </div>

              {/* Skills Grid */}
              <div className={`grid gap-4 mt-5 ${isPanelOpen ? "grid-cols-3 w-210" : "grid-cols-3"}`}>
                {filteredSkills.map((skill, index) => (
                  <div key={index} className={`cursor-pointer mb-1 h-20 group bg-[#2A2A2A] p-2 flex items-center justify-between rounded-lg hover:bg-[#424242]`}
                    data-aos="fade-up"
                    onClick={() => openPanel(skill)}
                    onMouseEnter={() => setColorGradient(skill.color)}
                    onMouseLeave={() => setColorGradient("#222222")}>
                      
                    <div className="flex items-center space-x-4">
                      {skill.icon}
                      <span className="text-lg font-medium text-white">{skill.name}</span>
                    </div>
                    <div className="bg-[#1ED760] p-2 rounded-full cursor-pointer hover:bg-green-400 transition opacity-0 group-hover:opacity-100 hover:scale-110 hover:drop-shadow-2xl">
                      <FaPlay size={20} className="text-black hover:bg-[#39dd73] "  />
                    </div>
                  </div>
                ))}

                <div
                  className={` border-none fixed top-0 right-0 h-full w-80 my-3 rounded-sm bg-[#121212] text-white shadow-2xl transition-transform duration-300 ${
                    isPanelOpen ? "translate-x-0" : "translate-x-full"
                  }`}
                >
                  {/* Close Button */}
                  <button
                    className="cursor-pointer absolute top-4 right-4 text-base text-gray-400 hover:text-white transition-colors"
                    onClick={closePanel}
                  >
                    ✖
                  </button>

                  {selectedSkill && (
                    <div className="no-scrollbar p-6 mt-12 h-[calc(100vh-4rem)] overflow-y-auto">
                      {/* Image */}
                      <div className="flex justify-center">
                        <div className="relative">
                          <img
                            src={selectedSkill.image}
                            alt={selectedSkill.name}
                            className="w-76 h-38 rounded-sm shadow-lg"
                          />
                          <div className="absolute bottom-0 left-0 w-full h-12 bg-gradient-to-t from-[#121212] to-transparent"></div>
                        </div>
                      </div>

                      <h2 className="text-2xl font-bold mt-4">{selectedSkill.name}</h2>
                      <p className="text-gray-400 text-sm mt-2">{selectedSkill.description}</p>

                      {/* Experience Section */}
                      <div className="bg-[#222222] p-2 mt-2 rounded-sm">
                        <p className="text-sm">
                          Playing Since: <span className="text-green-400">{selectedSkill.playingSince}</span>
                        </p>

                        {/* Experience Bar */}
                        <div className="w-full bg-gray-700 h-2 rounded-full mt-4 overflow-hidden">
                          <div
                            className="bg-green-400 h-2 rounded-full transition-all duration-500"
                            style={{ width: `${selectedSkill.xpLevel}%` }}
                          ></div>
                        </div>
                      </div>

                      {/* Projects Section */}
                      <div className="bg-[#222222] mt-3 rounded-sm">
                        <h3 className="text-lg font-semibold p-2 text-left">Related</h3>
                        
                        <div className="mt-2 overflow-x-auto whitespace-nowrap flex px-1 no-scrollbar">
                          {selectedSkill.projects.map((project) => (
                            <div key={project.name} className="flex flex-col items-center min-w-[100px]">
                              <div className="cursor-pointer relative group p-2 hover:bg-[#424242] mb-2 rounded-sm">
                                <div className="relative">
                                  <img src={project.cover} alt={project.name} className="w-18 h-18 rounded-sm mb-2 transition-opacity duration-300 group-hover:opacity-60" />
                                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <div className=" bg-opacity-10 p-2 rounded-full hover:bg-opacity-80">
                                      <FaPlay size={18} className="text-white" />
                                    </div>
                                  </div>
                                </div>

                                {/* Project Name */}
                                <a
                                  href={project.url}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="font-semibold text-gray-100 text-sm text-center hover:underline w-full"
                                >
                                  {project.name}
                                </a>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                    </div>
                  )}
                </div>

              </div>
            </section>
            <div>
              <p className="text-black">asda</p>
            </div>
          </main>
        </div>
  )
}


