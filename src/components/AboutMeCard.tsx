import { Typography } from "@mui/material";
import { AboutMeCardProps } from "../types/types";

const AboutMeCard = ({ icon, title, url = "" }: AboutMeCardProps) => {
  return (
    <div className="flex gap-2 mb-3">
      {icon}
      <Typography
        sx={{
          color: "#2e2e2e",
          fontWeight: 600,
          fontSize: "16px",
          lineHeight: "normal",
          textTransform: "none",
          whiteSpace: "nowrap",
        }}
      >
        {title}:
      </Typography>
      {url !== "" && (
        <Typography
          sx={{
            fontStyle: "italic",
            fontWeight: 500,
          }}
          variant="subtitle2"
        >
          {url}
        </Typography>
      )}
    </div>
  );
};

export default AboutMeCard;
