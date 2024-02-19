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
import { useAppSelector } from "../store/hooks";
const SideMenu = ({
  open,
  handleClose,
  handleExperience,
  handleHome,
  handleWorks,
  handleResume,
  handleSayHello,
}: SideMenuProps) => {
  const { isHomeVisible } = useAppSelector((state) => state.lading);
  const list = () => (
    <Box className="w-3/5">
      <List>
        <ListItem disablePadding>
          <ListItemButton>
            <div className="flex flex-col  w-fit justify-start  gap-4 ">
              <ButtonWithIcon
                handleClick={handleHome}
                label="Home"
                icon={<HomeIcon />}
              />
              <ButtonWithIcon
                handleClick={handleWorks}
                label="Works"
                icon={<InsertDriveFileIcon />}
              />
              <ButtonWithIcon
                handleClick={handleResume}
                label="Resume"
                icon={<PersonIcon />}
              />
              <ButtonWithIcon
                handleClick={handleExperience}
                label="Experience"
                icon={<ExperienceIcon />}
              />
              {isHomeVisible && (
                <ButtonWithIcon
                  handleClick={handleSayHello}
                  label="Say Hello"
                  icon={<EmailIcon />}
                />
              )}
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
