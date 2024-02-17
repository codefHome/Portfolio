import { Box, IconButton } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";

const SocialMedia = () => {
  return (
    <Box
      sx={{
        position: "fixed",
        left: "12%",
        top: "60%",
      }}
    >
      <ul>
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
      </ul>
    </Box>
  );
};

export default SocialMedia;
