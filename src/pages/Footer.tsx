import ButtonWithIcon from "../components/ButtonWithIcon";
import { useAppDispatch } from "../store/hooks";
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
    <div className="flex flex-col self-center justify-center w-[80%] mt-[2%]  mb-[2%]">
      <div className="flex">
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
    </div>
  );
};

export default Footer;
