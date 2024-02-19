import { Box, Typography } from "@mui/material";

import { useState } from "react";
import { ProjectCardProps } from "../types/types";

const ProjectCard = ({ stacks, url, gitHubUrl, image }: ProjectCardProps) => {
  const [isHovered, setIsHovered] = useState<boolean>(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  console.log(window.innerWidth);
  return (
    <a href={url} target="_blank">
      <Box
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className="flex border-1 rounded-md w-full md:w-[320px] lg:w-[470px] xl:w-[400px]  h-[200px] shadow-[rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px] flex-grow-1 relative"
      >
        <img src={image} alt="project" className="w-full" />
        {isHovered && (
          <Box
            sx={{
              position: "absolute",
              display: "flex",
              flexDirection: "column",
              bottom: 0,
              left: 0,
              width: "100%",
              backgroundColor: "rgba(173, 216, 230, 0.8)",
            }}
          >
            <a href={gitHubUrl} target="_blank">
              <Typography
                sx={{ color: "blue", fontSize: "16px", fontStyle: "italic" }}
              >
                Check Source Code here
              </Typography>
            </a>
            <span className="flex flex-wrap  w-full ">
              {stacks.split(",").map((stack, index) => (
                <Typography className=" w-[150px] text-left " key={index}>
                  {stack}
                </Typography>
              ))}
            </span>
          </Box>
        )}
      </Box>
    </a>
  );
};

export default ProjectCard;
