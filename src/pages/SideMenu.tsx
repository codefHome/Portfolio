import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import InsertDriveFileIcon from "@mui/icons-material/InsertDriveFile";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import HomeIcon from "@mui/icons-material/OtherHouses";
import { SideMenuProps } from "../types/types";
import { ExperienceIcon } from "../assets/icons/ExperienceIcon";
import { PersonIcon } from "../assets/icons/PersonIcon";
import ButtonWithIcon from "../components/ButtonWithIcon";
import EmailIcon from "@mui/icons-material/Email";
import { useAppDispatch, useAppSelector } from "../store/hooks";

import Brightness4Icon from "@mui/icons-material/Brightness4";
import { setIsDark } from "../store/slices/landingSlice";
const SideMenu = ({
  open,
  handleClose,
  handleExperience,
  handleHome,
  handleWorks,
  handleResume,
  handleSayHello,
}: SideMenuProps) => {
  const { isHomeVisible, isDark } = useAppSelector((state) => state.lading);
  const dispatch = useAppDispatch();
  const handleDarkMode = () => {
    dispatch(setIsDark());
  };

  const list = () => (
    <Box className="w-fit">
      <List>
        <ListItem disablePadding>
          <ListItemButton>
            <div className="flex flex-col  w-fit justify-start  gap-4 ">
              <ButtonWithIcon
                handleClick={handleHome}
                label="Home"
                icon={<HomeIcon sx={{ color: isDark ? "white" : "black" }} />}
              />
              <ButtonWithIcon
                handleClick={handleWorks}
                label="Works"
                icon={
                  <InsertDriveFileIcon
                    sx={{ color: isDark ? "white" : "black" }}
                  />
                }
              />
              <ButtonWithIcon
                handleClick={handleResume}
                label="Resume"
                icon={<PersonIcon color={isDark ? "white" : "black"} />}
              />
              <ButtonWithIcon
                handleClick={handleExperience}
                label="Experience"
                icon={<ExperienceIcon color={isDark ? "white" : "black"} />}
              />
              {isHomeVisible && (
                <ButtonWithIcon
                  handleClick={handleSayHello}
                  label="Say Hello"
                  icon={
                    <EmailIcon sx={{ color: isDark ? "white" : "black" }} />
                  }
                />
              )}

              <ButtonWithIcon
                handleClick={handleDarkMode}
                label={isDark ? "light" : "Dark"}
                icon={<Brightness4Icon />}
              />
            </div>
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <div>
      <Drawer anchor={"left"} open={open} onClose={handleClose}>
        {list()}
      </Drawer>
    </div>
  );
};

export default SideMenu;
