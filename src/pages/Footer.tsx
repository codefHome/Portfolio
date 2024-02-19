import { IconButton } from "@mui/material";
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
const Footer = () => {
  const dispatch = useAppDispatch();
  const handleResume = () => {
    dispatch(setIsResumeVisible(true));
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  const handleWorks = () => {
    dispatch(setIsWorkVisible(true));
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  const handleExperience = () => {
    dispatch(setIsExperienceVisible(true));
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  const handleHome = () => {
    dispatch(setIsHomeVisible(true));
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
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
        <div className="flex w-full justify-end  items-center">
          {Date()}, Addis Ababa, Ethiopia
        </div>
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

          <li>
            {new Date().toLocaleString("default", { month: "long" })}{" "}
            {new Date().getFullYear()}, Addis Ababa, Ethiopia
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
