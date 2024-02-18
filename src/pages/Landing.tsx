import { Box, Typography } from "@mui/material";
import SocialMedia from "../components/SocialMedia";
import TopSkillView from "./TopSkillView";
import AboutMe from "./AboutMe";
import MyWork from "./MyWork";
import ContactMe from "./ContactMe";
import Header from "./Header";
import MyResume from "./MyResume";
import Home from "./Home";
import { useAppSelector } from "../store/hooks";
import MyExperience from "./MyExperience";
import { useRef } from "react";

const Landing = () => {
  const { isResumeVisible, isHomeVisible, isWorkVisible, isExperienceVisible } =
    useAppSelector((state) => state.lading);
  const targetRef = useRef<HTMLDivElement>(null);

  const handleSayHello = () => {
    if (targetRef.current) {
      targetRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div className="flex flex-col ">
      <Box
        sx={{
          position: "relative",
          boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
        }}
        className="flex flex-col self-center border rounded-[5px] bg-[#ffffff] w-[90%] p-6 "
      >
        <SocialMedia />
        <Header />
        <div className="flex flex-col ml-[13%]">
          {isHomeVisible && (
            <>
              <Home handleSayHello={handleSayHello} />
              <TopSkillView />
              <AboutMe />
              <MyWork />
              <ContactMe targetRef={targetRef} />
            </>
          )}
          {isResumeVisible && <MyResume />}
          {isWorkVisible && <MyWork />}
          {isExperienceVisible && <MyExperience />}

          <div className="flex flex-col justify-center items-center self-center mt-[2%]">
            <Typography variant="caption">Thank you</Typography>
            <Typography variant="caption">😘 💝 </Typography>
          </div>
        </div>
      </Box>
    </div>
  );
};

export default Landing;
