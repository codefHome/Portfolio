import { Box, IconButton, Typography } from "@mui/material";
import { ExperienceIcon } from "../assets/icons/ExperienceIcon";
import { PersonIcon } from "../assets/icons/PersonIcon";
import ButtonWithIcon from "../components/ButtonWithIcon";
import EmailIcon from "@mui/icons-material/Email";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import InsertDriveFileIcon from "@mui/icons-material/InsertDriveFile";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import MenuIcon from "@mui/icons-material/Menu";
import {
  setDrawerState,
  setIsDark,
  setIsExperienceVisible,
  setIsHomeVisible,
  setIsResumeVisible,
  setIsWorkVisible,
} from "../store/slices/landingSlice";
import { useState } from "react";
import SideMenu from "./SideMenu";
import { HeaderProps } from "../types/types";
import { useNavigate } from "react-router-dom";
const Header = ({ handleSayHello }: HeaderProps) => {
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const { openDrawer, isDark } = useAppSelector((state) => state.lading);
  const navigate = useNavigate()
  const mouseEnter = () => {
    setIsHovered(true);
  };
  const mouseLeave = () => {
    setIsHovered(false);
  };
  const dispatch = useAppDispatch();
  const handleResume = () => {
    dispatch(setIsResumeVisible(true));
    window.scrollTo(0, 0);
    navigate('/resume')
  };
  const handleWorks = () => {
    dispatch(setIsWorkVisible(true));
    navigate('/work')
  };
  const handleExperience = () => {
    dispatch(setIsExperienceVisible(true));
    window.scrollTo(0, 0);
    navigate('/experience')
  };
  const handleHome = () => {
    dispatch(setIsHomeVisible(true));
    window.scrollTo(0, 0);
    navigate('/')
  };

  const handleOpen = () => {
    dispatch(setDrawerState(true));
  };
  const handleClose = () => {
    dispatch(setDrawerState(false));
  };
  const handleDarkMode = () => {
    dispatch(setIsDark());
  };
  return (
    <>
      <div className="hidden lg:flex justify-between w-full gap-3 p-4 mb-5">
        <div className="flex  items-center justify-between w-2/5 ">
          <div className="flex w-[150px]">
            <Box
              sx={{
                transition: "transform 0.3s ease-in-out",
                transform: isHovered ? "rotate(365deg)" : "rotate(0deg)",
                width: "fit",
                height: "30px",
              }}
              onClick={handleHome}
              className="flex cursor-pointer"
              onMouseEnter={mouseEnter}
              onMouseLeave={mouseLeave}
            >
              {!isHovered && (
                <Box>
                  <img src="/logo1.png" alt="logo" width={24} height={20} />
                </Box>
              )}
              {isHovered && (
                <Typography sx={{ background: "orange", p: "5px" }}>
                  Home
                </Typography>
              )}
            </Box>
          </div>

          <Box sx={{ position: "inherit" }}>
            <a href="mailto:bedada6@gmail.com">
              <ButtonWithIcon
                label="bedada6@gmail.com"
                icon={<EmailIcon sx={{ color: isDark ? "#fff" : "#000" }} />}
              />
            </a>
          </Box>
          <IconButton onClick={handleDarkMode}>
            <Brightness4Icon />
          </IconButton>
        </div>
        <div className="flex  w-2/5 justify-end items-center gap-4 ">
          <ButtonWithIcon
            handleClick={handleWorks}
            label="Works"
            icon={
              <InsertDriveFileIcon sx={{ color: isDark ? "#fff" : "#000" }} />
            }
          />
          <ButtonWithIcon
            handleClick={handleResume}
            label="Resume"
            icon={<PersonIcon color={isDark ? "#fff" : "#000"} />}
          />
          <ButtonWithIcon
            handleClick={handleExperience}
            label="Experience"
            icon={<ExperienceIcon color={isDark ? "#fff" : "#000"} />}
          />
        </div>
      </div>
      <div className="flex lg:hidden justify-end items-center w-full">
        <IconButton onClick={handleOpen}>
          <MenuIcon />
        </IconButton>
        <SideMenu
          open={openDrawer}
          handleClose={handleClose}
          handleExperience={handleExperience}
          handleHome={handleHome}
          handleResume={handleResume}
          handleWorks={handleWorks}
          handleSayHello={handleSayHello}
        />
      </div>
    </>
  );
};

export default Header;
