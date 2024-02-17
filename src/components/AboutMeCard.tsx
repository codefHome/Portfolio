import { Typography } from "@mui/material";
import { AboutMeCardProps } from "../types/types";

const AboutMeCard = ({ icon, title, url = "" }: AboutMeCardProps) => {
  return (
    <div className="flex gap-2 mb-3">
      {icon}
      <Typography variant="subtitle2">{title}</Typography>
      {url !== "" && (
        <Typography
          sx={{
            fontStyle: "italic",
            fontWeight: 600,
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
