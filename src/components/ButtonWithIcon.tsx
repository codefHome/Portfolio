import { useState } from "react";
import { Box, Typography } from "@mui/material";
import { IButtonProps } from "../types/types";

const ButtonWithIcon = ({ icon, label }: IButtonProps) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <Box
      sx={{
        display: "flex",
        gap: "5px",
        cursor: "pointer",
        transition: "transform 0.3s ease-in-out",
        transform: isHovered ? "rotate(15deg)" : "rotate(0deg)",
        background: isHovered ? "orange" : "",
        padding: "5px",
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {icon}
      <Typography sx={{ color: isHovered ? "white" : "" }}>{label}</Typography>
    </Box>
  );
};

export default ButtonWithIcon;
