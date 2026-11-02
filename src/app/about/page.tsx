"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaPython,
  FaLinux,
  FaDocker,
  FaGit,
} from "react-icons/fa6";
import {
  SiPython,
  SiScikitlearn,
  SiPandas,
  SiNumpy,
  SiPytorch,
  SiTypescript,
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiVscodium,
  SiGit,
  SiGithub,
  SiLinux,
  SiDocker,
  SiTailwindcss,
} from "react-icons/si";
import { GraduationCap, Briefcase } from "lucide-react";
import { config } from "@/data/config";
import { EDUCATION, EXPERIENCE } from "@/data/constants";

// @ts-ignore
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

const CONTACT_LINKS = [
  {
    name: "Email",
    content: config.email,
    href: `mailto:${config.email}`,
    icon: <FaEnvelope className="w-5 h-5 text-zinc-300" />,
  },
  {
    name: "LinkedIn",
    href: config.social.linkedin,
    content: "/in/dhanush-m",
    icon: <FaLinkedin className="w-5 h-5 text-[#0077b5]" />,
  },
  {
    name: "GitHub",
    href: config.social.github,
    content: "/dhanush186",
    icon: <FaGithub className="w-5 h-5 text-white" />,
  },
];

const TOOLS = [
  {
    name: "Python",
    content: "Core programming language for machine learning algorithms and software development",
    icon: <SiPython size={"50px"} color={"#3776ab"} />,
    color: "#3776ab",
  },
  {
    name: "Scikit-Learn",
    content: "Machine learning algorithms, regression analysis, and predictive modeling",
    icon: <SiScikitlearn size={"50px"} color={"#f7931e"} />,
    color: "#f7931e",
  },
  {
    name: "Pandas",
    content: "Data manipulation, feature engineering, and exploratory data analysis",
    icon: <SiPandas size={"50px"} color={"#150458"} />,
    color: "#150458",
  },
  {
    name: "NumPy",
    content: "High-performance scientific computing and numerical array operations",
    icon: <SiNumpy size={"50px"} color={"#4dabcf"} />,
    color: "#4dabcf",
  },
  {
    name: "PyTorch",
    content: "Deep learning framework for acoustic modeling and neural networks",
    icon: <SiPytorch size={"50px"} color={"#ee4c2c"} />,
    color: "#ee4c2c",
  },
  {
    name: "Git",
    content: "Distributed version control system for reliable code tracking",
    icon: <SiGit size={"50px"} color={"#f05032"} />,
    color: "#f05032",
  },
  {
    name: "GitHub",
    content: "Collaborative repository hosting, code management, and CI/CD",
    icon: <SiGithub size={"50px"} color={"#ffffff"} />,
    color: "#ffffff",
  },
  {
    name: "Linux",
    content: "Standard operating environment for development, scripting, and model execution",
    icon: <SiLinux size={"50px"} color={"#fcc624"} />,
    color: "#fcc624",
  },
  {
    name: "VS Code",
    content: "Lightweight and extensible source code editor for Python and full-stack development",
    icon: <SiVscodium size={"50px"} color={"#007acc"} />,
    color: "#007acc",
  },
  {
    name: "TypeScript",
    content: "Strongly typed programming language built on modern JavaScript",
    icon: <SiTypescript size={"50px"} color={"#007acc"} />,
    color: "#007acc",
  },
  {
    name: "Next.js",
    content: "React framework for modern web development and interactive user interfaces",
    icon: <SiNextdotjs size={"50px"} color={"#ffffff"} />,
    color: "#ffffff",
  },
  {
    name: "Docker",
    content: "Containerization platform to build and run portable applications",
    icon: <SiDocker size={"50px"} color={"#2496ed"} />,
    color: "#2496ed",
  },
];

function Page() {
  const [toolsLoaded, setToolsLoaded] = useState(false);
  useEffect(() => {
    setToolsLoaded(true);
  }, []);

  return (
    <div className="container mx-auto px-4 md:px-[50px] xl:px-[150px] text-zinc-300 pt-24 pb-20">
      <div className="flex flex-col lg:flex-row gap-6">
        <aside className="w-full lg:basis-1/3">
          <div
            className="p-6 md:p-8 rounded-2xl border-[.5px] border-zinc-700 bg-zinc-900/60"
            style={{ backdropFilter: "blur(8px)" }}
          >
            <div className="flex flex-col items-center text-center">
              <div className="w-[160px] h-[160px] rounded-full overflow-hidden border-2 border-primary/40 mb-4 bg-zinc-800 shadow-xl">
                <Image
                  className="w-full h-full object-cover"
                  alt="Dhanush M"
                  src="/assets/me.jpg"
                  width={200}
                  height={200}
                  priority
                />
              </div>
              <h2 className="text-2xl font-bold text-white mb-2">{config.author}</h2>
              <div className="text-xs font-mono font-medium bg-zinc-800 text-zinc-300 border border-zinc-700 px-3 py-1 rounded-full mb-6">
                AI/ML Engineer with Python
              </div>
            </div>

            <hr className="my-6 border-zinc-700/60" />

            <ul className="flex flex-col gap-3">
              {CONTACT_LINKS.map((link) => (
                <li key={link.name}>
                  <a
                    className="flex items-center px-4 gap-3 w-full h-12 border-zinc-700/80 bg-zinc-800/80 hover:border-zinc-500 hover:bg-zinc-800 border-[.5px] rounded-lg transition-colors"
                    href={link.href}
                    target={link.href.startsWith("http") ? "_blank" : undefined}
                    rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  >
                    <div className="w-6 flex items-center justify-center">{link.icon}</div>
                    <div className="flex flex-col text-left overflow-hidden">
                      <div className="text-xs text-zinc-400 font-mono">{link.name}</div>
                      <div className="text-xs font-medium text-zinc-200 truncate">{link.content}</div>
                    </div>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </aside>

        <main className="w-full lg:basis-2/3 flex flex-col gap-6">
          {/* About Me Section */}
          <div
            className="p-6 md:p-8 border-[.5px] rounded-2xl border-zinc-700 bg-zinc-900/60"
            style={{ backdropFilter: "blur(8px)" }}
          >
            <h1 className="text-2xl md:text-3xl font-bold text-white mb-6">About Me</h1>
            <p className="text-base text-zinc-300 leading-relaxed mb-4">
              I am a B.Tech Artificial Intelligence and Data Science student at Stella Mary&apos;s College of Engineering, Kanyakumari.
            </p>
            <p className="text-base text-zinc-300 leading-relaxed mb-4">
              I am interested in Artificial Intelligence, Machine Learning, Python, Data Science and practical software development.
            </p>
            <p className="text-base text-zinc-300 leading-relaxed">
              I enjoy building projects that apply machine learning to real-world problems.
            </p>
          </div>

          {/* Education Card */}
          <div
            className="p-6 md:p-8 border-[.5px] rounded-2xl border-zinc-700 bg-zinc-900/60"
            style={{ backdropFilter: "blur(8px)" }}
          >
            <div className="flex items-center gap-2 mb-4">
              <GraduationCap className="w-6 h-6 text-primary" />
              <h2 className="text-xl md:text-2xl font-bold text-white">Education</h2>
            </div>
            {EDUCATION.map((edu) => (
              <div key={edu.id} className="p-4 rounded-xl border border-zinc-700/60 bg-zinc-800/40">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                  <h3 className="text-lg font-bold text-white">{edu.degree}</h3>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono bg-zinc-700 text-zinc-200 px-2.5 py-0.5 rounded-full">
                      {edu.graduationYear}
                    </span>
                    <span className="text-xs font-mono font-medium bg-emerald-700/80 text-white px-2.5 py-0.5 rounded-full">
                      {edu.cgpa}
                    </span>
                  </div>
                </div>
                <p className="text-sm text-zinc-300 font-medium mb-2">
                  {edu.institution}, {edu.location}
                </p>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  {edu.description}
                </p>
              </div>
            ))}
          </div>

          {/* Research Internship Experience Card */}
          <div
            className="p-6 md:p-8 border-[.5px] rounded-2xl border-zinc-700 bg-zinc-900/60"
            style={{ backdropFilter: "blur(8px)" }}
          >
            <div className="flex items-center gap-2 mb-4">
              <Briefcase className="w-6 h-6 text-primary" />
              <h2 className="text-xl md:text-2xl font-bold text-white">Research Internship Experience</h2>
            </div>
            {EXPERIENCE.map((exp) => (
              <div key={exp.id} className="p-4 rounded-xl border border-zinc-700/60 bg-zinc-800/40">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-1">
                  <h3 className="text-lg font-bold text-white">{exp.title}</h3>
                  <span className="text-xs font-mono bg-zinc-700 text-zinc-200 px-2.5 py-0.5 rounded-full w-fit">
                    {exp.startDate} – {exp.endDate}
                  </span>
                </div>
                <p className="text-sm text-zinc-300 font-semibold mb-3">
                  {exp.company}
                </p>
                <ul className="list-disc list-outside ml-4 space-y-2 text-xs text-zinc-400 leading-relaxed">
                  {exp.description.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Tools Carousel */}
          <div
            className="p-6 md:p-8 border-[.5px] rounded-2xl border-zinc-700 bg-zinc-900/60"
            style={{ backdropFilter: "blur(8px)" }}
          >
            <h2 className="text-xl md:text-2xl font-bold text-white mb-6">Technical Stack</h2>
            <div>
              {!toolsLoaded ? (
                <div className="h-[80px]" />
              ) : (
                <Splide
                  options={{
                    type: "loop",
                    interval: 2200,
                    autoplay: true,
                    pagination: false,
                    speed: 1800,
                    perPage: 5,
                    perMove: 1,
                    rewind: true,
                    easing: "cubic-bezier(0.25, 1, 0.5, 1)",
                    arrows: false,
                    breakpoints: {
                      640: { perPage: 3 },
                      1024: { perPage: 4 },
                    },
                  }}
                  aria-label="Technologies"
                >
                  {TOOLS.map((tool) => (
                    <SplideSlide key={tool.name}>
                      <div className="flex flex-col items-center justify-center p-3 m-1 border-[.5px] border-zinc-700/80 bg-zinc-800/50 rounded-xl hover:border-zinc-500 transition-colors">
                        <div className="w-10 h-10 flex items-center justify-center mb-2">
                          {tool.icon}
                        </div>
                        <span className="text-xs text-zinc-300 font-mono text-center truncate max-w-[80px]">
                          {tool.name}
                        </span>
                      </div>
                    </SplideSlide>
                  ))}
                </Splide>
              )}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default Page;
