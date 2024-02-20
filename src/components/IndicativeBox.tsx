import { Typography } from "@mui/material";
import { IndicativeBoxProps } from "../types/types";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import { useAppSelector } from "../store/hooks";
const IndicativeBox = ({ text }: IndicativeBoxProps) => {
  const { isDark } = useAppSelector((state) => state.lading);
  return (
    <div className="flex flex-col justify-center items-center w-fit ">
      <div className={`${isDark ? "bg-[#fff]" : "bg-black"} p-3`}>
        <Typography sx={{ color: isDark ? "black" : "#b0fc38" }}>
          {text}
        </Typography>
      </div>
      <div className="flex justify-end w-4/5 mt-[-8px]">
        <PlayArrowIcon
          sx={{
            width: "30px",
            color: isDark ? "white" : "black",
            transform: "rotate(90deg)",
          }}
        />
      </div>
    </div>
  );
};

export default IndicativeBox;
