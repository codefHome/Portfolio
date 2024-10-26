import { Box, Typography } from "@mui/material";
import SocialMedia from "../components/SocialMedia";
import TopSkillView from "./TopSkillView";
import AboutMe from "./AboutMe";
import MyWork from "./MyWork";
import ContactMe from "./ContactMe";
import Header from "./Header";

import Home from "./Home";
import { useAppDispatch, useAppSelector } from "../store/hooks";

import { useRef } from "react";
import { setDrawerState } from "../store/slices/landingSlice";
import { LandingProps } from "../types/types";

const Landing = ({ child }: LandingProps) => {
  const { isHomeVisible } =
    useAppSelector((state) => state.lading);
  const targetRef = useRef<HTMLDivElement>(null);
  const myWorkRef = useRef<HTMLDivElement>(null);
  const dispatch = useAppDispatch();
  const handleSayHello = () => {
    if (targetRef.current) {
      targetRef.current.scrollIntoView({ behavior: "smooth" });
    }
    dispatch(setDrawerState(false));
  };
  const handleMyWork = () => {
    if (myWorkRef.current) {
      myWorkRef.current.scrollIntoView({ behavior: "smooth" });
    }
    dispatch(setDrawerState(false));
  };
  const { isDark } = useAppSelector((state) => state.lading);
  return (
    <div className="flex flex-col ">
      <Box
        sx={{
          position: "relative",
          boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
          background: isDark ? "black" : "#ffffff",
          border: isDark ? "1px solid black" : "lpx solid white",
        }}
        className={`flex flex-col self-center  rounded-[5px]  w-[95%] lg:w-[90%] p-1 lg:p-6 `}
      >
        <SocialMedia />
        <Header handleSayHello={handleSayHello} />
        <div className="flex flex-col ml-[11%]">
          {isHomeVisible && (
            <>
              <Home handleSayHello={handleSayHello} />
              <TopSkillView handleClick={handleMyWork} />
              <AboutMe />
              <MyWork targetRef={myWorkRef} />
              <ContactMe targetRef={targetRef} />
            </>
          )}

          {child}

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
