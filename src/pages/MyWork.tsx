import { Box, Typography } from "@mui/material";
import HorizontalDivider from "../components/HorizontalDivider";
import ProjectCard from "../components/ProjectCard";

const MyWork = () => {
  const projects = [
    {
      id: 1,
      title: "Music playlist",
      url: "https://my-music-playlist.netlify.app/",
      image: "./music-playlist.png",
      stacks:
        "React, Redux toolkit, Redux Saga, React Hook Form, Zod, Style-system, emotion, TypeScript, express.js, MongoDB,JWT",
      gitHubUrl: "https://github.com/codefHome/react-express-app",
    },
    {
      id: 2,
      title: "Course-manager-app",
      url: "https://my-music-playlist.netlify.app/",
      image: "./music-playlist.png",
      stacks:
        "React, Redux toolkit, RTK Query, MUI, TypeScript, Nest.js PostgreSQL, JWT, TailwindCSS",
      gitHubUrl: "https://github.com/codefHome/react-express-app",
    },
    {
      id: 3,
      title: "Bedada Bekele",
      url: "https://my-music-playlist.netlify.app/",
      image: "./portfolio.png",
      stacks:
        "React, Redux toolkit, RTK Query, TypeScript, express.js mongoose, MongoDB",
      gitHubUrl: "https://github.com/codefHome/react-express-app",
    },
    {
      id: 4,
      title: "Vue-pet-project",
      url: "https://my-music-playlist.netlify.app/",
      image: "./music-playlist.png",
      stacks: "Vue.js, Pinia, TypeScript, Express.js, bootstrap",
      gitHubUrl: "https://github.com/codefHome/Vue.js-pet-project",
    },
  ];
  return (
    <div className="flex flex-col ">
      <Typography variant="caption"> My Projects</Typography>
      <Typography variant="subtitle2">
        Project's that I have been working on
      </Typography>
      <HorizontalDivider />
      <Box className="flex flex-wrap  justify-center md:justify-between ml-[-13%] lg:ml-0 self-center">
        {projects?.map((project) => (
          <Box key={project.id} className="border-1 rounded-lg p-2 border mb-4">
            <ProjectCard
              title={project?.title}
              url={project?.url}
              stacks={project?.stacks}
              gitHubUrl={project?.gitHubUrl}
              image={project?.image}
            />
          </Box>
        ))}
      </Box>
    </div>
  );
};

export default MyWork;
