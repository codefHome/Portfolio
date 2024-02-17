import { Typography } from "@mui/material";
import { IndicativeBoxProps } from "../types/types";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
const IndicativeBox = ({ text }: IndicativeBoxProps) => {
  return (
    <div className="flex flex-col justify-center items-center w-fit ">
      <div className="bg-black p-3">
        <Typography sx={{ color: "#b0fc38" }}>{text}</Typography>
      </div>
      <div className="flex justify-end w-4/5 mt-[-8px]">
        <PlayArrowIcon
          sx={{
            width: "30px",
            color: "black",
            transform: "rotate(90deg)",
          }}
        />
      </div>
    </div>
  );
};

export default IndicativeBox;
