import { Typography, IconButton, Box } from "@mui/material";
import IndicativeBox from "../components/IndicativeBox";

import { HomeProps } from "../types/types";

const Home = ({ handleSayHello }: HomeProps) => {
  const quate =
    "Hard work beats talent when talent doesn’t work hard- `${author}`. Talk is cheap. Show me the code '${author}`";

  return (
    <div className="flex flex-wrap lg:flex-nowrap justify-between items-center ">
      <div className="flex flex-col w-fit ">
        <IndicativeBox text="Hi, there" />
        <Typography variant="caption">Bedada</Typography>
        <Typography sx={{ mt: "-25px" }} variant="caption">
          Bekele
        </Typography>
        <Typography sx={{ mt: "-15px" }} variant="subtitle1">
          Software Engineer
        </Typography>
        <Typography
          variant="subtitle2"
          sx={{
            width: "220px",
            mt: "15%",
          }}
        >
          Full-stack Software Engineer from Addis Ababa, Ethiopia, who enjoy
          crafting complex web application using state of the art technologies.
          Compiled for this role for over 5 years
        </Typography>
        <span className="hidden lg:flex">
          <IconButton
            onClick={handleSayHello}
            sx={{
              ml: "30px",
              width: "80px",
              height: "80px",
              border: "1px solid #C078B3",
              borderRadius: "50%",
              background: "#C078B3",
              marginTop: "40px",
              boxShadow:
                "rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px",
              "&:hover": {
                background: "blue",
              },
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                width: "60px",
                height: "60px",
                border: "1px solid #c9bec7",
                background: "#c9bec7",
                borderRadius: "50%",
                padding: "10px",
                boxShadow:
                  "rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px",
              }}
            >
              <Typography
                sx={{
                  fontSize: "14px",
                  color: "black",
                  textAlign: "start",
                }}
              >
                Say,
              </Typography>
              <Typography
                sx={{
                  fontSize: "14px",
                  color: "black",
                  textAlign: "end",
                }}
              >
                Hello
              </Typography>
            </Box>
          </IconButton>
        </span>
      </div>
      <div className="flex flex-col w-full  h-fit justify-center items-center">
        <img src="./mypic.png" alt="my cartoon" className="w-fit h-fit" />
        <Typography
          variant="subtitle2"
          className="text-wrap italic w-full md:w-[460px] "
        >
          {quate}
        </Typography>
      </div>
    </div>
  );
};

export default Home;
