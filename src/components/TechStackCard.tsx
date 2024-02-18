import { Typography, Box, Button } from "@mui/material";
import { useState } from "react";

import { TechStackCardProps } from "../types/types";

const TechStackCard = ({ images, stacks, description }: TechStackCardProps) => {
  const [showFrontDetail, setShowFrontDetail] = useState<boolean>(false);

  const handleShowFront = () => {
    setShowFrontDetail(!showFrontDetail);
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        border: "1px solid #BDF7B4",
        background: "#BDF7B4",
        padding: "10px",
        boxShadow:
          "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset",
      }}
    >
      <div className="flex flex-col gap-5 justify-center items-center w-full">
        <Typography variant="subtitle1">{description}</Typography>
        {!showFrontDetail && (
          <div className="flex flex-wrap gap-4">
            {images.map((stack, index) => (
              <img
                src={`./stackIcons/${stack}`}
                alt="Tech stack log"
                key={index}
                width="60px"
                height="fit"
              />
            ))}
          </div>
        )}
        {showFrontDetail && (
          <div className="flex   w-full ">
            <ul className="flex flex-wrap items-center  px-2 ">
              {stacks.map((tech, index) => (
                <li className="flex w-[150px]" key={index}>
                  {tech}
                </li>
              ))}
            </ul>
          </div>
        )}
        <Button
          onClick={handleShowFront}
          className="flex self-end"
          variant="contained"
        >
          {showFrontDetail ? "See Icons" : "See in word"}
        </Button>
      </div>
    </Box>
  );
};

export default TechStackCard;