import { IconButton, Typography } from "@mui/material";
import ButtonWithIcon from "../components/ButtonWithIcon";
import { useAppDispatch } from "../store/hooks";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";
import {
  setIsResumeVisible,
  setIsWorkVisible,
  setIsExperienceVisible,
  setIsHomeVisible,
} from "../store/slices/landingSlice";
import { useNavigate } from "react-router-dom";
const Footer = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate()
  const handleResume = () => {
    dispatch(setIsResumeVisible(true));
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    navigate('/resume')
  };
  const handleWorks = () => {
    dispatch(setIsWorkVisible(true));
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    navigate('/work')
  };
  const handleExperience = () => {
    dispatch(setIsExperienceVisible(true));
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    navigate('/experience')
  };
  const handleHome = () => {
    dispatch(setIsHomeVisible(true));
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    navigate('/')
  };
  return (
    <div className="flex flex-col self-center justify-center w-full lg:w-[80%] mt-[2%]  mb-[2%]">
      <div className="hidden lg:flex">
        <div onClick={handleHome} className=" flex  justify-end ">
          <ButtonWithIcon label="Home" />
        </div>
        <div className="flex  w-3/5 justify-end items-center gap-4 ">
          <ButtonWithIcon handleClick={handleWorks} label="Works" />
          <ButtonWithIcon handleClick={handleResume} label="Resume" />
          <ButtonWithIcon handleClick={handleExperience} label="Experience" />
        </div>
        <Typography
          variant="subtitle1"
          className="flex w-full justify-end  items-center"
        >
          {new Date().toLocaleString("default", { month: "long" })},&nbsp;
          {new Date().getFullYear()}
        </Typography>
      </div>
      <div className="flex lg:hidden justify-center">
        <ul className="flex justify-between items-center w-full px-1">
          <li>
            <a href="https://www.linkedin.com/in/bedada-bekele/" target="blank">
              <IconButton>
                <LinkedInIcon />
              </IconButton>
            </a>
          </li>
          <li>
            <a href="https://github.com/codefHome" target="_blank">
              <IconButton>
                <GitHubIcon />
              </IconButton>
            </a>
          </li>
          <li>
            <a href="https://twitter.com/BedadaBekele2" target="_blank">
              <IconButton>
                <TwitterIcon />
              </IconButton>
            </a>
          </li>

          <li className="flex justify-center items-center">
            {new Date().toLocaleString("default", { month: "long" })},&nbsp;
            {new Date().getFullYear()}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
