import { Box, Typography } from "@mui/material";
import HorizontalDivider from "../components/HorizontalDivider";
import ProjectCard from "../components/ProjectCard";
import { ContactMeProps } from "../types/types";

const MyWork = ({ targetRef }: ContactMeProps) => {
  const projects = [
    {
      id: 1,
      title: "Presence",
      url: "https://www.presencebrowser.com/",
      image: "./presence.png",
      stacks:
        "ReactJS, Nest.js, Typeorm, TailwindCSS, TypeScript, Swagger, PostgreSQL, Passport.js, JSON WebTokens, Bitbucket, Git, Jira, Ant Design, Jest, react test library, NX, Contex API, Redis",
      description:
        "A Presence Browser is a decentralized browser overlay to experience the web like never before",
    },
    {
      id: 2,
      title: "Arifpay Dashboard",
      url: "https://dashboard.arifpay.net",
      image: "./arifpay.png",
      stacks:
        "React.js, Redux Toolkit, Redux Toolkit Query, TypeScript, React hook Form,Material UI, Zod, TailwindCSS, GitLab, NX, Recharts, Tuleap, Vite, ESLint, Prettier",
      description: "Arifpay dashboard provide Solutions through the pillars of innovation, easy access, and security for the fast-tracking and optimization of transactions.",
    },
    {
      id: 3,
      title: "Digital finance",
      url: "https://digitalfinance.shega.co/",
      image: "./digital-finance.png",
      stacks:
        "Next, Strapi, HTML, CSS, TypeScript, Node.js, PostgreSQL,TailwindCSS,ApexCharts",
      description: "Digital Finance Ethiopia Hub empowers stakeholders with the data, insights, and resources they need to understand the evolving digital finance landscape in Ethiopia.",
    },
    {
      id: 4,
      title: "Shega Media",
      url: "https://shega.co/",
      image: "./shega-media.png",
      stacks:
        "Next.js, Strapi, TypeScript, TailwindCSS, JavaScript, Node.js, PostgreSQL",
      description: "Provides in-depth insights into Ethiopia’s economy through digital news, helping stakeholders make informed decisions and drive innovation",
    },
    {
      id: 5,
      title: "Music playlist",
      url: "https://my-music-playlist.netlify.app/",
      image: "./music-playlist.png",
      stacks:
        "React, Redux toolkit, Redux Saga, React Hook Form, Zod, Style-system, emotion, TypeScript, express.js, MongoDB,JWT",
      description: "It is simple web app designed to help users create and manage their music playlists. It offers a user-friendly interface for organizing songs",
    },
    {
      id: 6,
      title: "Bedada Bekele",
      url: "https://bedada-portfolio.netlify.app",
      image: "./portfolio.png",
      stacks:
        "React, Redux toolkit, RTK Query, TypeScript, express.js mongoose, MongoDB",
      description: "My portfolio is designed to showcase my skills and work as a full-stack software engineer.",
    },
    {
      id: 7,
      title: "Vue-pet-portfolio",
      url: "https://vue-pet-portfolio.netlify.app/",
      image: "./vue-pet.png",
      stacks: "Vue.js, Pinia, TypeScript, Express.js, bootstrap",
      description: "My Vue.js version portfolio is designed to showcase my skills and work as a full-stack software engineer.",
    },
  
  ];
  return (
    <div ref={targetRef} className="flex flex-col ">
      <Typography variant="caption"> My Projects</Typography>
      <Typography variant="subtitle2">
        Project's that I have been working on
      </Typography>
      <HorizontalDivider />
      <Box className="flex flex-wrap  justify-center md:justify-between ml-[-13%] lg:ml-0 self-center">
        {projects?.map((project) => (
          <Box
            key={project.id}
            className="border-1 rounded-lg p-2 border mb-4 gap-5 w-5/6"
          >
            <ProjectCard
              title={project?.title}
              url={project?.url}
              stacks={project?.stacks}
              description={project?.description}
              image={project?.image}
            />
          </Box>
        ))}
      </Box>
    </div>
  );
};

export default MyWork;
