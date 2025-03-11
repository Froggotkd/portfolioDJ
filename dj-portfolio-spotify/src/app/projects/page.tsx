import { FaGithub, FaLinkedin} from "react-icons/fa";
import { HiAcademicCap } from "react-icons/hi";
import { FaBriefcase, FaPlay  } from "react-icons/fa6";
import { TiHome } from "react-icons/ti";
import { DiCode  } from "react-icons/di";


import Link from "next/link";


export default function ProjectsPage() {
    return (
      <div className="flex min-h-screen bg-black text-white">
                {/* Sidebar */}
                <aside className="w-16 bg-[#121212] flex flex-col items-center py-6 space-y-1 h-screen rounded-md my-1  ml-3 fixed top-0 left-0">
                  <div className="flex-1 flex flex-col items-center space-y-2">
                  <Link href="/">
                  <div className="bg-[#2A2A2A] w-10 h-10 flex items-center justify-center rounded-md">
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
                  
                </main>
              </div>
    );
  }
  