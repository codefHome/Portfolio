import { Typography, Box } from "@mui/material";
import CodeIcon from "@mui/icons-material/IntegrationInstructions";
import HorizontalDivider from "../components/HorizontalDivider";
import AboutMeCard from "../components/AboutMeCard";
import SchoolIcon from "@mui/icons-material/School";
import { ExperienceIcon } from "../assets/icons/ExperienceIcon";
import { BuildWebIcon } from "../assets/icons/BuildWebIcon";
import { FreeTime } from "../assets/icons/FreeTime";
import { useAppSelector } from "../store/hooks";

const AboutMe = () => {
  const { isDark } = useAppSelector((state) => state.lading);
  return (
    <div className="flex  mt-[17%] justify-center items-center mb-[10%]">
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          borderRadius: "15px",
          p: "20px",
          border: isDark ? "1px solid #333333" : "1px solid #d6f3e7",
          background: isDark ? "#333333" : "#92e3a9",
          boxShadow:
            "rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px",
        }}
        className="flex flex-col w-full md:w-[80%] xl:w-[65%] self-center ml-[-13%] lg:ml-0"
      >
        <Typography variant="caption" >About Me</Typography>
        <Typography variant="subtitle2">who I'm</Typography>
        <HorizontalDivider />
        <Box>
          <div className="flex flex-col gap-2">
            <div className="flex flex-col md:flex-row justify-between gap-5">
              <img
                src="./myPic1.png"
                alt="avatar show coding"
                width="350px"
                height="350px"
                className="shadow-2xl md:rounded-lg w-fit"
              />
              <span className="flex flex-col  w-full mt-3 ">
                <AboutMeCard
                  icon={<ExperienceIcon color={isDark ? "white" : "black"} />}
                  title="In Locker"
                  url="Over 5 years Experience"
                />
                <AboutMeCard
                  icon={
                    <SchoolIcon
                      sx={{
                        width: "24px",
                        height: "24px",
                        color: isDark ? "white" : "black",
                      }}
                    />
                  }
                  title="Got MSc"
                  url="Software Engineering"
                />
                <AboutMeCard
                  icon={<CodeIcon sx={{ color: isDark ? "white" : "black" }} />}
                  title="Upscale"
                  url={
                    <a
                      href="https://my-music-playlist.netlify.app/"
                      target="_blank"
                    >
                      my-music-playlist
                    </a>
                  }
                />
                <AboutMeCard
                  icon={<BuildWebIcon color={isDark ? "white" : "black"} />}
                  title="Crafting"
                  url="course-manager(loading ...)"
                />
                <AboutMeCard
                  icon={<FreeTime color={isDark ? "white" : "black"} />}
                  title="Leisure"
                  url="Watch Football, Walk"
                />
              </span>
            </div>
            <Typography variant="overline">Me at a glance</Typography>
            <Typography
              sx={{
                color: isDark ? "white" : "gray",
                fontSize: "12px",
                mt: "-12px",
                ml: "2px",
                mb: "-10px",
              }}
            >
              Read me here
            </Typography>
            <HorizontalDivider />
            <Typography
              variant="subtitle2"
              sx={{
                width: "100%",
                mt: "-5%",
                textAlign: "justify",
              }}
            >
              I am forward-thinking Software Engineer, who possess a robust
              abilities and extensive experience in the constantly evolving
              field of technology. Personally, I am deeply committed to
              continually enhancing my skills, reflecting a strong sense of
              discipline and dedication.
            </Typography>
            <Typography variant="subtitle2">
              During my leisure time, I enjoy watching TV, catching football
              matches, and going for walks. These activities offer both
              entertainment and relaxation, allowing me to unwind and recharge.
            </Typography>
          </div>
        </Box>
      </Box>
    </div>
  );
};

export default AboutMe;
