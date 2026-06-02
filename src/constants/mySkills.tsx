import { TbBrandFramerMotion } from "react-icons/tb";
import { BiLogoPostgresql, BiLogoSpringBoot } from "react-icons/bi";
import { DiRedis, DiLinux } from "react-icons/di";
import { RiSupabaseLine } from "react-icons/ri";
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGit,
  FaGithub,
  FaDocker,
  FaAws,
  FaLinux,
  FaBootstrap,
  FaSass,
  FaNpm,
  FaPython,
} from "react-icons/fa";
import {
  SiTypescript,
  SiNextdotjs,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiPostgresql,
  SiFirebase,
  SiKubernetes,
  SiNginx,
  SiPostman,
  SiTailwindcss,
  SiRedux,
  SiGraphql,
  SiPrisma,
  SiSocketdotio,
  SiTurborepo,
  SiVite,
  SiShadcnui,
  SiJest,
  SiCplusplus,
} from "react-icons/si";

export const iconMapping = {
  html5: FaHtml5,
  css3: FaCss3,
  javascript: FaJs,
  react: FaReact,
  framerMotion: TbBrandFramerMotion,
  typescript: SiTypescript,
  nextjs: SiNextdotjs,
  nodejs: FaNodeJs,
  express: SiExpress,
  mongodb: SiMongodb,
  mysql: SiMysql,
  postgresql: SiPostgresql, // or BiLogoPostgresql
  firebase: SiFirebase,
  supabase: RiSupabaseLine,
  git: FaGit,
  github: FaGithub,
  docker: FaDocker,
  kubernetes: SiKubernetes,
  aws: FaAws,
  nginx: SiNginx,
  linux: FaLinux,
  postman: SiPostman,
  sass: FaSass,
  tailwind: SiTailwindcss,
  bootstrap: FaBootstrap,
  redux: SiRedux,
  graphql: SiGraphql,
  prisma: SiPrisma,
  redis: DiRedis,
  websockets: SiSocketdotio,
  turborepo: SiTurborepo,
  vite: SiVite,
  shadcn: SiShadcnui,
  jest: SiJest,
  npm: FaNpm,
  cpp: SiCplusplus,
  python: FaPython,
};

export const iconAltMapping = [
  /* ============================
     1. FRONTEND CORE & SYSTEMS
     ============================ */
  { icon: FaHtml5, alt: "HTML5" },
  { icon: FaCss3, alt: "CSS3" },
  { icon: FaJs, alt: "JavaScript" },
  { icon: SiTypescript, alt: "TypeScript" },
  { icon: FaReact, alt: "React" },
  { icon: SiNextdotjs, alt: "Next.js" },
  { icon: TbBrandFramerMotion, alt: "Framer Motion" },
  { icon: SiRedux, alt: "Redux" },
  { icon: SiTailwindcss, alt: "Tailwind CSS" },
  { icon: SiShadcnui, alt: "shadcn/ui" },
  { icon: FaSass, alt: "Sass" },
  { icon: FaBootstrap, alt: "Bootstrap" },

  /* ============================
     2. BACKEND & RUNTIMES
     ============================ */
  { icon: FaNodeJs, alt: "Node.js" },
  { icon: SiExpress, alt: "Express" },
  { icon: SiGraphql, alt: "GraphQL" },
  { icon: SiSocketdotio, alt: "WebSockets" },

  /* ============================
     3. DATA ARCHITECTURE & ORMs
     ============================ */
  { icon: SiPrisma, alt: "Prisma" },
  { icon: SiMongodb, alt: "MongoDB" },
  { icon: SiPostgresql, alt: "PostgreSQL" },
  { icon: SiMysql, alt: "MySQL" },
  { icon: DiRedis, alt: "Redis" },
  { icon: SiFirebase, alt: "Firebase" },
  { icon: RiSupabaseLine, alt: "Supabase" },

  /* ============================
     4. DEVOPS & INFRASTRUCTURE
     ============================ */
  { icon: FaDocker, alt: "Docker" },
  { icon: SiKubernetes, alt: "Kubernetes" },
  { icon: FaAws, alt: "AWS" },
  { icon: SiNginx, alt: "Nginx" },
  { icon: FaLinux, alt: "Linux" },

  /* ============================
     5. TOOLING & CONFIGURATION
     ============================ */
  { icon: FaGit, alt: "Git" },
  { icon: FaGithub, alt: "GitHub" },
  { icon: SiTurborepo, alt: "Turborepo" },
  { icon: SiVite, alt: "Vite" },
  { icon: SiPostman, alt: "Postman" },
  { icon: FaNpm, alt: "NPM" },
  { icon: SiJest, alt: "Jest" },

  /* ============================
     6. LANGUAGES / FOUNDATIONAL
     ============================ */
  { icon: SiCplusplus, alt: "C++" },
  { icon: FaPython, alt: "Python" },
];
