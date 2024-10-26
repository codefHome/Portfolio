import { Box, Typography } from "@mui/material";

import { ProjectCardProps } from "../types/types";

const ProjectCard = ({ stacks, url, description, image }: ProjectCardProps) => {
 
  const techStack=stacks?.split(',')
  return (
   
      <Box
        className="flex flex-col md:flex-row  border-1 gap-4 rounded-md  shadow-[rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px] flex-grow-1 relative"
      >
         <a href={url} target="_blank" className="">
        <img src={image} alt="project"  style={{width:'500px',height:'230px', objectFit:"fill"}}  />
        </a>
  
          <div
           
            className="flex flex-col  pl-1 md:pl-10 w-full md:w-[60%] gap-2"
          >
            <span>
            <Typography  className=" text-blue-600 text-sm">Project description: </Typography>
            <Typography variant="subtitle2" >{description}</Typography>
            </span>
          
            <span className="flex flex-wrap  w-full items-center ">
              <Typography  sx={{mr:'5px',color:'blue', fontSize:'16px'}}>Tech stack:</Typography>
              {techStack.map((stack, index) => (
                <Typography variant="subtitle2" className="text-left " key={index}>
                  {` ${stack}${index != (techStack.length - 1) ? ',' : ''} `} 
                </Typography>
              ))}
            </span>
            <a href={url} target="_blank" className="w-full">
              <Typography
                sx={{ color: "blue", fontSize: "16px", fontStyle: "italic" }}
              >
                Check it here
              </Typography>
            </a>
          </div>
        {/* )} */}
      </Box>
   
  );
};

export default ProjectCard;
