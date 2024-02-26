import { IconButton, Typography } from "@mui/material";
import { MyWorkType } from "../types/types";

const ButtonWithAnimation = ({ handleClick }: MyWorkType) => {
  return (
    <IconButton
      onClick={handleClick}
      sx={{
        position: "relative",
        borderRadius: "25px",
        width: "fit-content",
        px: "20px",
        mt: "20px",
        "&:hover": {
          width: "fit-content",
          background: "#92e3a9",
          transition: "width 0.3s",
        },
        "&::before": {
          content: "''",
          position: "absolute",
          top: 0,
          left: 0,
          width: "25%",
          height: "100%",
          background: "#92e3a9",
          borderRadius: "50%",
          transition: "width 0.3s",
          ml: "10px",
        },
      }}
    >
      <Typography variant="subtitle1" sx={{ zIndex: 1, fontSize: "28px" }}>
        Check My Work
      </Typography>
    </IconButton>
  );
};

export default ButtonWithAnimation;
