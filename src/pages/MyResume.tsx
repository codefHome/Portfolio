import { Button, Typography } from "@mui/material";
import HorizontalDivider from "../components/HorizontalDivider";
import TechStackCard from "../components/TechStackCard";

const MyResume = () => {
  const resume = [
    {
      description:
        "Main Technologies that I use for client-side application include 👇, but not limit to the list.",
      images: [
        "css.png",
        "html.png",
        "javaScript.svg",
        "mui.svg",
        "next.png",
        "react.svg",
        "redux.svg",
        "pinia.png",
        "tailwindcss.svg",
        "typeScript.svg",
        "vue.svg",
      ],
      stacks: [
        "React",
        "Vue",
        "Next",
        "Redux",
        "Redux Toolkit",
        "RTK Query",
        "ContextAPI",
        "Ant Design",
        "Pinia",
        "Zod",
        "Zustand",
        "TypeScript",
        "JavaScript",
        "React Hook Form",
        "TailwindCSS",
        "HTML",
        "CSS",
        "Jest",
        "React Test Library",
        "Cypress",
        "Recharts",
      ],
    },
    {
      description:
        "Main Technologies that I use for server-side API include 👇, but not limit to the list.",
      images: [
        "nest.png",
        "express.svg",
        "mongodb.svg",
        "mongoose.svg",
        "node.svg",
        "postgresql.svg",
        "mysql.svg",
        "sql.png",
        "postman.svg",
      ],
      stacks: [
        "Node",
        "Express",
        "Nest",
        "TypeORM",
        "JWT",
        "Passport",
        "MongoDB",
        "PostgreSQL",
        "MYSQL",
        "Postman",
        "REST API",
        "MicroService",
        "Sequelize",
      ],
    },
    {
      description:
        "Main Technologies that I use for CI/CD and other functionalities include 👇, but not limit to the list.",
      images: [
        "npm.svg",
        "docker.svg",
        "bitbucket.svg",
        "git.svg",
        "github.svg",
        "jira.svg",
        "netlify.png",
        "vite.svg",
        "webpack.svg",
      ],
      stacks: [
        "NPM",
        "Bitbucket",
        "Docker",
        "Docker-compose",
        "git",
        "GitHub",
        "GitLab",
        "Jira",
        "Netlify",
        "Render",
        "Vite",
        "Webpack",
      ],
    },
  ];

  return (
    <div className="flex flex-col ">
      <Typography variant="caption">Technologies I Use</Typography>
      <div className="flex justify-between">
        <span className="flex flex-col">
          <Typography variant="subtitle2">My Tech stacks</Typography>
          <HorizontalDivider />
        </span>
        <Button
          sx={{
            width: "200px",
            height: "50px",
            borderRadius: "15px",
            background: "#ffede9",
            textTransform: "none",
            color: "white",
            fontSize: "18px",
            boxShadow:
              "rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset, rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset, rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px",
          }}
        >
          Download Resume
        </Button>
      </div>
      <div className="flex flex-col gap-10">
        {resume.map((stacks) => (
          <TechStackCard
            description={stacks?.description}
            images={stacks?.images}
            stacks={stacks?.stacks}
          />
        ))}
      </div>
    </div>
  );
};

export default MyResume;
