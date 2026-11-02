import AceTernityLogo from "@/components/logos/aceternity";
import SlideShow from "@/components/slide-show";
import { Button } from "@/components/ui/button";
import { TypographyH3, TypographyP } from "@/components/ui/typography";
import { ArrowUpRight, ExternalLink, Link2, MoveUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";
import { RiNextjsFill, RiNodejsFill, RiReactjsFill } from "react-icons/ri";
import {
  SiChakraui,
  SiDocker,
  SiExpress,
  SiFirebase,
  SiJavascript,
  SiMongodb,
  SiPostgresql,
  SiPrisma,
  SiPython,
  SiReactquery,
  SiSanity,
  SiShadcnui,
  SiSocketdotio,
  SiSupabase,
  SiTailwindcss,
  SiThreedotjs,
  SiTypescript,
  SiVuedotjs,
  SiHtml5,
  SiCss3,
  SiScikitlearn,
  SiPandas,
  SiNumpy,
  SiPytorch,
} from "react-icons/si";
import { TbBrandFramerMotion } from "react-icons/tb";
const BASE_PATH = "/assets/projects-screenshots";

const ProjectsLinks = ({ live, repo }: { live: string; repo?: string }) => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-start gap-3 my-3 mb-8">
      <Link
        className="font-mono underline flex gap-2"
        rel="noopener"
        target="_new"
        href={live}
      >
        <Button variant={"default"} size={"sm"}>
          Visit Website
          <ArrowUpRight className="ml-3 w-5 h-5" />
        </Button>
      </Link>
      {repo && (
        <Link
          className="font-mono underline flex gap-2"
          rel="noopener"
          target="_new"
          href={repo}
        >
          <Button variant={"default"} size={"sm"}>
            Github
            <ArrowUpRight className="ml-3 w-5 h-5" />
          </Button>
        </Link>
      )}
    </div>
  );
};

export type Skill = {
  title: string;
  bg: string;
  fg: string;
  icon: ReactNode;
};
const PROJECT_SKILLS = {
  next: {
    title: "Next.js",
    bg: "black",
    fg: "white",
    icon: <RiNextjsFill />,
  },
  chakra: {
    title: "Chakra UI",
    bg: "black",
    fg: "white",
    icon: <SiChakraui />,
  },
  node: {
    title: "Node.js",
    bg: "black",
    fg: "white",
    icon: <RiNodejsFill />,
  },
  python: {
    title: "Python",
    bg: "black",
    fg: "white",
    icon: <SiPython />,
  },
  prisma: {
    title: "prisma",
    bg: "black",
    fg: "white",
    icon: <SiPrisma />,
  },
  postgres: {
    title: "PostgreSQL",
    bg: "black",
    fg: "white",
    icon: <SiPostgresql />,
  },
  mongo: {
    title: "MongoDB",
    bg: "black",
    fg: "white",
    icon: <SiMongodb />,
  },
  express: {
    title: "Express",
    bg: "black",
    fg: "white",
    icon: <SiExpress />,
  },
  reactQuery: {
    title: "React Query",
    bg: "black",
    fg: "white",
    icon: <SiReactquery />,
  },
  shadcn: {
    title: "ShanCN UI",
    bg: "black",
    fg: "white",
    icon: <SiShadcnui />,
  },
  aceternity: {
    title: "Aceternity",
    bg: "black",
    fg: "white",
    icon: <AceTernityLogo />,
  },
  tailwind: {
    title: "Tailwind",
    bg: "black",
    fg: "white",
    icon: <SiTailwindcss />,
  },
  docker: {
    title: "Docker",
    bg: "black",
    fg: "white",
    icon: <SiDocker />,
  },
  yjs: {
    title: "Y.js",
    bg: "black",
    fg: "white",
    icon: (
      <span>
        <strong>Y</strong>js
      </span>
    ),
  },
  firebase: {
    title: "Firebase",
    bg: "black",
    fg: "white",
    icon: <SiFirebase />,
  },
  sockerio: {
    title: "Socket.io",
    bg: "black",
    fg: "white",
    icon: <SiSocketdotio />,
  },
  js: {
    title: "JavaScript",
    bg: "black",
    fg: "white",
    icon: <SiJavascript />,
  },
  ts: {
    title: "TypeScript",
    bg: "black",
    fg: "white",
    icon: <SiTypescript />,
  },
  vue: {
    title: "Vue.js",
    bg: "black",
    fg: "white",
    icon: <SiVuedotjs />,
  },
  react: {
    title: "React.js",
    bg: "black",
    fg: "white",
    icon: <RiReactjsFill />,
  },
  sanity: {
    title: "Sanity",
    bg: "black",
    fg: "white",
    icon: <SiSanity />,
  },
  spline: {
    title: "Spline",
    bg: "black",
    fg: "white",
    icon: <SiThreedotjs />,
  },
  gsap: {
    title: "GSAP",
    bg: "black",
    fg: "white",
    icon: "",
  },
  framerMotion: {
    title: "Framer Motion",
    bg: "black",
    fg: "white",
    icon: <TbBrandFramerMotion />,
  },
  supabase: {
    title: "Supabase",
    bg: "black",
    fg: "white",
    icon: <SiSupabase />,
  },
  html: {
    title: "HTML",
    bg: "black",
    fg: "white",
    icon: <SiHtml5 />,
  },
  css: {
    title: "CSS",
    bg: "black",
    fg: "white",
    icon: <SiCss3 />,
  },
  scikitlearn: {
    title: "Scikit-Learn",
    bg: "black",
    fg: "white",
    icon: <SiScikitlearn />,
  },
  pandas: {
    title: "Pandas",
    bg: "black",
    fg: "white",
    icon: <SiPandas />,
  },
  numpy: {
    title: "NumPy",
    bg: "black",
    fg: "white",
    icon: <SiNumpy />,
  },
  pytorch: {
    title: "PyTorch",
    bg: "black",
    fg: "white",
    icon: <SiPytorch />,
  },
};
export type Project = {
  id: string;
  category: string;
  title: string;
  src: string;
  screenshots: string[];
  skills: { frontend: Skill[]; backend: Skill[] };
  content: React.ReactNode | any;
  github?: string;
  live: string;
};
const projects: Project[] = [
  {
    id: "soil-elastic-modulus-prediction",
    category: "Research & Machine Learning",
    title: "Subgrade Soil Elastic Modulus Predictor",
    src: "https://images.unsplash.com/photo-1579783902614-a3fb3927b675?w=800&q=80",
    screenshots: ["landing.png"],
    live: "https://github.com/dhanush186/Elastic-Modulus-Predection",
    github: "https://github.com/dhanush186/Elastic-Modulus-Predection",
    skills: {
      frontend: [
        PROJECT_SKILLS.python,
        PROJECT_SKILLS.scikitlearn,
      ],
      backend: [
        PROJECT_SKILLS.pandas,
        PROJECT_SKILLS.numpy,
      ],
    },
    get content(): JSX.Element {
      return (
        <div>
          <TypographyP className="font-mono ">
            An applied machine learning research project conducted during the official research internship at Indian Institute of Information Technology Tiruchirappalli (IIIT Tiruchirappalli) under the supervision of Dr. R. K. Madhumathi.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <p className="font-mono mb-2 mt-8">
            <strong>Research Title:</strong> &ldquo;Machine Learning-Based Prediction of Elastic Modulus of Coir Geotextile Reinforced Subgrade Soils&rdquo;, developed under the AICTE-QIP-PG Certificate Programme on Machine Learning and Cyber Physical Systems.
          </p>
          <p className="font-mono mb-2 mt-4">
            The project focuses on predicting the elastic modulus of reinforced subgrade soils using supervised machine learning algorithms. By modeling complex geotechnical parameters, this tool accelerates civil and soil engineering design without requiring costly and destructive physical testing.
          </p>
          <p className="font-mono mb-2 mt-4">
            Built using Python, Scikit-Learn, Pandas, and NumPy for comprehensive data preprocessing, feature engineering, cross-validation, and regression performance evaluation (R², RMSE, and MAE).
          </p>
        </div>
      );
    },
  },
  {
    id: "ai-voice-deepfake-detection",
    category: "Deep Learning & Audio AI",
    title: "AI Voice Deepfake Detection",
    src: "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?w=800&q=80",
    screenshots: ["landing.png"],
    live: "https://github.com/dhanush186/AI-Voice-Deepfake-Detection",
    github: "https://github.com/dhanush186/AI-Voice-Deepfake-Detection",
    skills: {
      frontend: [
        PROJECT_SKILLS.python,
        PROJECT_SKILLS.pytorch,
      ],
      backend: [
        PROJECT_SKILLS.scikitlearn,
        PROJECT_SKILLS.numpy,
      ],
    },
    get content(): JSX.Element {
      return (
        <div>
          <TypographyP className="font-mono ">
            An intelligent AI-powered deepfake audio detection system engineered in Python to detect synthesized, cloned, and computer-generated human speech.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <p className="font-mono mb-2 mt-8">
            With the rapid rise of generative voice cloning technologies, detecting synthetic speech has become essential for digital security and authentication. This system extracts key acoustic and spectral features—including Mel-frequency cepstral coefficients (MFCCs), spectral centroid, and zero-crossing rates.
          </p>
          <p className="font-mono mb-2 mt-4">
            Classification models are trained to differentiate subtle acoustic artifacts and phase discrepancies present in synthetic voice models compared to natural human speech patterns, delivering reliable detection accuracy.
          </p>
        </div>
      );
    },
  },
  {
    id: "sih-2026-solution",
    category: "AI Solutions & Data Science",
    title: "Smart India Hackathon Project",
    src: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&q=80",
    screenshots: ["landing.png"],
    live: "https://github.com/dhanush186/sih2026",
    github: "https://github.com/dhanush186/sih2026",
    skills: {
      frontend: [
        PROJECT_SKILLS.python,
        PROJECT_SKILLS.scikitlearn,
      ],
      backend: [
        PROJECT_SKILLS.pandas,
        PROJECT_SKILLS.numpy,
      ],
    },
    get content(): JSX.Element {
      return (
        <div>
          <TypographyP className="font-mono ">
            A competitive innovation project built for the Smart India Hackathon (SIH 2026), delivering practical AI/ML algorithms and data analysis for real-world challenge statements.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <p className="font-mono mb-2 mt-8">
            Engineered using Python and data-driven methods, the project addresses community and industrial problem statements by combining machine learning pipelines with clear programmatic logic.
          </p>
          <p className="font-mono mb-2 mt-4">
            Emphasizes modular code organization, efficient data processing pipelines, and practical computational intelligence that can scale to real-world applications.
          </p>
        </div>
      );
    },
  },
  {
    id: "3d-ai-portfolio",
    category: "Interactive 3D Portfolio",
    title: "3D Interactive AI/ML Portfolio",
    src: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800&q=80",
    screenshots: ["landing.png"],
    live: "https://dhanush186.github.io/portfolio/",
    github: "https://github.com/dhanush186/portfolio",
    skills: {
      frontend: [
        PROJECT_SKILLS.python,
        PROJECT_SKILLS.next,
        PROJECT_SKILLS.react,
        PROJECT_SKILLS.ts,
        PROJECT_SKILLS.spline,
        PROJECT_SKILLS.tailwind,
      ],
      backend: [],
    },
    get content(): JSX.Element {
      return (
        <div>
          <TypographyP className="font-mono ">
            The interactive portfolio you are currently experiencing! Built with Next.js, React, TypeScript, Spline 3D, and Tailwind CSS to present AI/ML research and technical capabilities in a modern dark aesthetic.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <p className="font-mono mb-2 mt-8">
            Features an interactive 3D scene, responsive glassmorphism interface, smooth scrolling, and optimized static export deployed seamlessly via GitHub Pages.
          </p>
          <p className="font-mono mb-2 mt-4">
            Highlights academic credentials from Stella Mary&apos;s College of Engineering and research experience from IIIT Tiruchirappalli.
          </p>
        </div>
      );
    },
  },
];
export default projects;
