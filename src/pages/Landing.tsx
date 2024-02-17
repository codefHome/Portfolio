import ButtonWithIcon from "../components/ButtonWithIcon";
import EmailIcon from "@mui/icons-material/Email";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import InsertDriveFileIcon from "@mui/icons-material/InsertDriveFile";
import { Box, IconButton, Typography } from "@mui/material";
import { PersonIcon } from "../assets/icons/PersonIcon";
import { ExperienceIcon } from "../assets/icons/ExperienceIcon";
import SocialMedia from "../components/SocialMedia";
import IndicativeBox from "../components/IndicativeBox";
import TopSkillView from "./TopSkillView";
import AboutMe from "./AboutMe";

const Landing = () => {
  const quate =
    "Hard work beats talent when talent doesn’t work hard- `${author}`. Talk is cheap. Show me the code '${author}`";
  return (
    <Box
      sx={{
        position: "relative",
        boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
      }}
      className="flex flex-col  border rounded-[5px] bg-[#ffffff] w-[90%] p-6 "
    >
      <SocialMedia />
      <div className="flex justify-between w-full gap-3 p-4 mb-5">
        <div className="flex  items-center justify-between w-2/5 ">
          <span className="flex ">
            <img src="/logo1.png" alt="logo" width={24} height={20} />
          </span>

          <Box sx={{ position: "inherit" }}>
            <ButtonWithIcon label="bedada6@gmail.com" icon={<EmailIcon />} />
          </Box>
          <IconButton>
            <Brightness4Icon />
          </IconButton>
        </div>
        <div className="flex  w-2/5 justify-end items-center gap-4 ">
          <ButtonWithIcon label="Works" icon={<InsertDriveFileIcon />} />
          <ButtonWithIcon label="Resume" icon={<PersonIcon />} />
          <ButtonWithIcon label="Experience" icon={<ExperienceIcon />} />
        </div>
      </div>
      <div className="flex flex-col ml-[13%]">
        <div className="flex justify-between items-center mt-10">
          <div className="flex flex-col w-fit ">
            <IndicativeBox text="Hi, there" />
            <Typography variant="caption">Bedada</Typography>
            <Typography sx={{ mt: "-25px" }} variant="caption">
              Bekele
            </Typography>
            <Typography sx={{ mt: "-15px" }} variant="subtitle1">
              Sr. Software Engineer
            </Typography>
            <Typography
              variant="subtitle2"
              sx={{
                width: "220px",
                mt: "15%",
              }}
            >
              Full-stack Software Engineer from Addis Ababa, Ethiopia, who enjoy
              crafting complex web application using state of the art
              technologies. Compiled for this role for over 5 years
            </Typography>
            <IconButton
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
          </div>
          <div className="flex flex-col w-3/5 h-fit justify-center items-center ">
            <img src="./mypic.png" alt="my picture" />
            <Typography
              sx={{
                fontStyle: "italic",
                fontSize: "14px",
                textAlign: "justify",
                color: "black",
                width: "300px",
              }}
            >
              {quate}
            </Typography>
          </div>
        </div>
        <TopSkillView />
        <AboutMe />
      </div>
    </Box>
  );
};

export default Landing;
