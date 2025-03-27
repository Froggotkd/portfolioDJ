"use client";

import { useState, useEffect } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiAcademicCap } from "react-icons/hi";
import { FaBriefcase, FaPlay } from "react-icons/fa6";
import { TiHome } from "react-icons/ti";
import { DiCode } from "react-icons/di";
import Link from "next/link";
import { PiCatFill } from "react-icons/pi";

import AOS from "aos";
import "aos/dist/aos.css";

type Project = {
  name: string;
  description: string;
  challenges: string;
  date: string;
  url: string;
  pictures: { name: string; cover: string }[];
  tech: { name: string; cover: string }[];
};

const Projects: Project[] = [
  {
    name: "AI-Exercise Assistant",
    description: "AI-powered exercise tracker with pose estimation and real-time feedback.",
    challenges: "Defining motion rules, sequencing exercise validation, video processing API.",
    date: "2025",
    url: "https://github.com/Froggotkd/PullUpROM",
    pictures: [{ name: "AI1", cover: "https://saiwa.ai/uploads/skeleton_detection_online_demo_after_552a7df280.jpg" }, { name: "AI2", cover: "https://i.imgur.com/UvSgV6F.png" }, { name: "AI3", cover: "https://i.imgur.com/1pnySu9.png" }, { name: "AI4", cover: "https://i.imgur.com/LHp3Snc.png" }
    ],
    tech: [{ name: "Python", cover: "https://img.icons8.com/?size=512&id=13441&format=png" }, { name: "Flask", cover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmD38KsMgEwahtWc_Nfs5ZVktP9dBc36MUZA&s" }, { name: "MediaPipe", cover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3X8C4vNu4P-D8lpCwqi0t1oLbvffrBif9ZOm6nI3a2u8Qz8tF0Vuqw2KuZDuXjPmcbb8&usqp=CAU" }, { name: "OpenCV", cover: "https://d2jdgazzki9vjm.cloudfront.net/tutorial/opencv/images/what-is-opencv.png" }],
  },
  {
    name: "DotNet Website",
    description: "SEO-optimized, UX-focused frontend for the Ecuadorian .NET community.",
    challenges: "Ensuring fast load times, optimizing UI, improving client-server performance.",
    date: "2025",
    url: "https://github.com/DotNet-Ecuador/website",
    pictures: [{ name: "DW1", cover: "https://media.licdn.com/dms/image/v2/D4E0BAQEHPyNCOKh0Uw/company-logo_200_200/company-logo_200_200/0/1725512087890/dotnet_ecuador_logo?e=2147483647&v=beta&t=sbde0WRVOM_ZxZBKwV27XbKzDdm9uT0sPI4d4X8xTfs" }, { name: "DW2", cover: "https://i.imgur.com/k1pC9GO.png" }, { name: "DW3", cover: "https://i.imgur.com/un1Ns8e.png" }
    ],
    tech: [{ name: "JavaScript", cover: "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png" }, { name: "Astro", cover: "https://yt3.googleusercontent.com/8aWv8A1zanF_R80egpVs-JOQ0j1yN27mPMtWjkBxe2VWTNJMLcmeCJfGMMYmubQ734C0PxsqHA=s900-c-k-c0x00ffffff-no-rj" }, { name: "Git", cover: "https://img.icons8.com/color/512/git.png" }],
  },
  {
    name: "Restaurant",
    description: "Full-stack restaurant site with ordering system and middleware logic.",
    challenges: "Business logic handling, data integrity, structured order processing.",
    date: "2023",
    url: "https://github.com/Froggotkd/Restaurante",
    pictures: [{ name: "Portfolio1", cover: "https://quenchwater.ca/wp-content/uploads/2023/10/Restaurant-drinking-water-768x768.webp" }
    ],
    tech: [{ name: "JavaScript", cover: "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png" }, { name: "React", cover: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" }, { name: "Node.js", cover: "https://w7.pngwing.com/pngs/205/650/png-transparent-node-js-javascript-software-developer-express-js-computer-software-node-js-logo-nodejs-software-development-thumbnail.png" }, { name: "PostgreSQL", cover: "https://cdn.iconscout.com/icon/free/png-256/free-postgresql-3521647-2945091.png" }],
  },
  {
    name: "Portfolio",
    description: "A portfolio styled like Spotify with a sleek UI/UX.",
    challenges: "Designing only with frontend, no backend data storage.",
    date: "2024-03-12",
    url: "https://github.com/Froggotkd/portfolioDJ",
    pictures: [{ name: "Portfolio2", cover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdn2D2wgSTGJ_K96X06vLpJyRXxEQgC7sFPQ&s" }],
    tech: [{ name: "JavaScript", cover: "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png" }, { name: "React", cover: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" }, { name: "Tailwind", cover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVfajmoInaItnd5sS1-qXvfPAn8r__xxVYvg&s" }],
  },
  {
    name: "AnTracker",
    description: "A mobile app for tracking expenses, income, and spending trends.",
    challenges: "Adapting UI for multiple screen sizes, ensuring clear data visualization..",
    date: "2024",
    url: "https://github.com/Froggotkd/expTracker?tab=readme-ov-file",
    pictures: [{ name: "Portfoli3o", cover: "https://economipedia.com/wp-content/uploads/gastos-hormiga-1.jpg" }, { name: "asdasd", cover: "https://i.imgur.com/Uoyk97n.png" }],
    tech: [{ name: "JavaScript", cover: "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png" }, { name: "React Native", cover: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" }, { name: "SQLite", cover: "https://images.tpointtech.com/sqlite/images/sqlite-tutorial.png" },],
  },
  {
    name: "Dataset Premier League",
    description: "Web scraper for extracting and structuring soccer match statistics.",
    challenges: "Understanding website structures, filtering out irrelevant data.",
    date: "2024",
    url: "#",
    pictures: [{ name: "Portfol4io", cover: "https://keepcoding.io/wp-content/uploads/2021/11/DALL%C2%B7E-2025-02-24-16.33.31-A-high-quality-digital-illustration-representing-the-use-of-Big-Data-in-football.-The-image-features-a-futuristic-football-stadium-with-a-large-digita.webp" }],
    tech: [{ name: "Python", cover: "https://img.icons8.com/?size=512&id=13441&format=png" }, { name: "Beautiful Soup", cover: "https://cdn-cms.apify.com/beautiful_soup_cloud_runner_8fecd38730.png" }],
  },
  {
    name: "DinoTech",
    description: "OpenGL-based dinosaur safari with 3D lighting, sound, and effects.",
    challenges: "Version control in OpenGL, optimizing graphics and rendering.",
    date: "2025",
    url: "#",
    pictures: [{ name: "Portfolio453", cover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhVqiYE5dtU3aNuG4T76Ll4RNRkeTQ1wEbZKkD3tR-rBLVUW7k9tTvzDr21TKi_glEEsc&usqp=CAU" }],
    tech: [{ name: "C++", cover: "https://cdn-icons-png.flaticon.com/512/6132/6132222.png" }, { name: "OpenGL", cover: "https://w7.pngwing.com/pngs/454/878/png-transparent-opengl-hd-logo.png" }, { name: "Git", cover: "https://img.icons8.com/color/512/git.png" }],
  },
  {
    name: "Beauty Clinic CRUD",
    description: "A Java-based CRUD app for a beauty clinic with dual databases.",
    challenges: "Managing multiple databases, ensuring ACID.",
    date: "2025",
    url: "#",
    pictures: [{ name: "Portfolio345", cover: "https://images.jdmagicbox.com/comp/rourkela/c8/9999px661.x661.170914195107.u1c8/catalogue/sai-glamour-beauty-clinic-chhend-colony-rourkela-skin-care-clinics-b79x14ww20-250.jpg" }],
    tech: [{ name: "Java", cover: "https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/181_Java_logo_logos-512.png" }, { name: "PostgreSQL", cover: "https://cdn.iconscout.com/icon/free/png-256/free-postgresql-3521647-2945091.png" }, { name: "MySQL", cover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGGT_pnMHJdps9fGjcDaFSqcfFxO2E7BQk4g&s" }, { name: "Git", cover: "https://img.icons8.com/color/512/git.png" }],
  },
];

export default function ProjectsPage() {


  let projectName = "";
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isPanelOpen, setIsPanelOpen] = useState(false);


  const openPanel = (project: Project) => {
    setSelectedProject(project);
    setIsPanelOpen(true);
  };
  const closePanel = () => {
    setIsPanelOpen(false);
    setTimeout(() => setSelectedProject(null), 300);
  };

  useEffect(() => {
    AOS.init({ duration: 1200 });
    console.log(projectName)
  })

  return (
    <div className="flex min-h-screen bg-black text-white">


      {/* Main Content */}
      <main className="flex-1 p-6 ml-18 relative">
        <div className={`bg-[#222222] p-2 mt-2 rounded-sm  ${isPanelOpen ? "w-210" : "w-auto"}`}>

          <h1 className="text-3xl font-bold p-2">Made By Daniel</h1>

          {/* Projects Grid */}
          <div className={`grid gap-4  mt-3 ${isPanelOpen ? "grid-cols-4 w-210 pr-7 " : "grid-cols-5"}`}>
            {Projects.map((project, index) => (
              <div
                key={index}
                className="p-3 rounded-lg cursor-pointer transition hover:bg-[#424242] w-50 mb-1 group relative"
                onClick={() => openPanel(project)}
              >
                <img
                  src={project.pictures[0].cover}
                  alt={project.name}
                  className="justify-self-center w-42 h-40 rounded-xl object-cover"
                />
                <h3 className="text-white font-bold mt-3">{project.name}</h3>

                <div className="flex items-center gap-2 mt-2">
                  {project.tech.map((tech, index) => (
                    <img key={index} src={tech.cover} alt={tech.name} className="w-6 h-6 rounded-full" />
                  ))}
                </div>

                <div className="bg-[#1ED760] p-2 rounded-full cursor-pointer hover:bg-green-400 transition opacity-0 group-hover:opacity-100 hover:scale-110 hover:drop-shadow-2xl absolute top-3/5 left-4/5 transform -translate-x-1/2 -translate-y-1/2">
                  <FaPlay size={20} className="text-black" />
                </div>
              </div>
            ))}

          </div>
        </div>

        {/* Sliding Panel */}
        <div
          className={`fixed right-0 top-0 h-full bg-[#121212] w-100 p-6 shadow-lg transition-transform duration-300 ${selectedProject ? "translate-x-0" : "translate-x-full"
            }`}
        >
          {selectedProject && (
            <>
              {/* Close Button */}
              <button
                onClick={closePanel}
                className="absolute top-4 right-4 text-white text-2xl cursor-pointer"
              >
                &times;
              </button>

              {/* Project Content */}
              <div className="no-scrollbar mt-2 h-[calc(100vh-4rem)] overflow-y-auto px-4">

                {/* Image Gallery */}
                <div className="mt-2 flex overflow-x-auto gap-4 px-2 no-scrollbar">
                  {selectedProject.pictures.map((picture) => (
                    <div key={picture.name} className="flex flex-col min-w-[480px]">
                      <div className="relative group mb-3 rounded-md overflow-hidden">
                        <a href={picture.cover} target="_blank">
                          <img
                            src={picture.cover}
                            alt={picture.name}
                            className="cursor-pointer h-96 w-auto object-cover rounded-md "
                          />
                        </a>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Project Details */}
                <h2 className="text-white font-bold text-2xl mt-4">{selectedProject.name}</h2>
                <p className="text-gray-400 mt-2">{selectedProject.description}</p>
                <p className="text-gray-500 text-sm mt-1">🔹 Challenges: {selectedProject.challenges}</p>
                <p className="text-gray-500 text-sm mt-1">📅 Date: {selectedProject.date}</p>

                {/* Project Link */}
                <a
                  href={selectedProject.url}
                  target="_blank"
                  className="text-blue-400 mt-3 block hover:underline"
                >
                  🔗 View Project
                </a>

                {/* Tech Stack */}
                <div className="mt-6">
                  <h3 className="text-white font-semibold text-lg mb-2">Tech Stack</h3>
                  <div className="flex flex-wrap gap-3">
                    {selectedProject.tech.map((tech, index) => (
                      <div key={index} className="flex items-center gap-2  p-2 rounded-md">
                        <img src={tech.cover} alt={tech.name} className="w-8 h-8 rounded-full" />
                        <span className="text-white">{tech.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </>
          )}

        </div>


        {/* Sidebar */}
        <aside className={` bg-[#121212] flex flex-col  py-6 space-y-1 h-screen rounded-md my-1 ml-3 fixed top-0 left-0 w-16 items-start px-3 items-center`}>
          <div className="flex-1 flex flex-col items-center space-y-2">
            <Link href="/">
              <div className="bg-[#2A2A2A] w-10 h-10 flex items-center justify-center rounded-md hover:scale-110">
                <TiHome size={29} className="text-gray-400 hover:text-white cursor-pointer" />
              </div>
            </Link>
            <div className="bg-[#316B31] w-10 h-10 flex items-center justify-center rounded-md">
              <DiCode size={40} className="text-gray-400 hover:text-white cursor-pointer" />
            </div>
            <div className="bg-[#2A2A2A] w-10 h-10 flex items-center justify-center rounded-md">
              <FaBriefcase size={22} className="text-gray-400 hover:text-white cursor-pointer" />
            </div>
            <div className="bg-[#2A2A2A] w-10 h-10 flex items-center justify-center rounded-md">
              <HiAcademicCap size={29} className="text-gray-400 hover:text-white cursor-pointer" />
            </div>
            <div className="bg-[#2A2A2A] w-10 h-10 flex items-center justify-center rounded-md">
              <PiCatFill size={29} className="text-gray-400 hover:text-white cursor-pointer" />
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
      </main>
    </div>
  );
}
