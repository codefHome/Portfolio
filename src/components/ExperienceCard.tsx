import {
  Accordion,
  AccordionDetails,
  AccordionSlots,
  AccordionSummary,
  Box,
  Fade,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";
import { useState } from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Experience } from "../types/types";
import { useAppSelector } from "../store/hooks";
const ExperienceCard = ({
  title,
  companyName,
  companyDescription,
  companyLink,
  startYear,
  endYear,
  projects,
}: Experience) => {
  const [expanded, setExpanded] = useState<boolean[]>(
    new Array(projects?.length ?? 3).fill(false)
  );

  const handleChange = (index: number) => {
    const newExpanded = [...expanded];
    newExpanded[index] = !newExpanded[index];
    setExpanded(newExpanded);
  };
  const { isDark } = useAppSelector((state) => state.lading);
  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        border: isDark ? "1px solid white" : "1px solid #ffede9",
        background: isDark ? "#3D3D3D" : "#ffede9",
        padding: "20px",
        boxShadow:
          "rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px",
      }}
      className="ml-[-12%] lg:ml-0 self-cente"
    >
      <div className="flex flex-wrap justify-between w-full">
        <span className="flex flex-wrap justify-start items-center">
          <Typography variant="subtitle1">{title} &nbsp;@</Typography>
          <Typography variant="overline"> {companyName}</Typography>
        </span>
        <Typography className="text-left w-full" variant="subtitle1">
          {startYear} - {endYear}
        </Typography>
      </div>
      <Typography
        variant="subtitle2"
        sx={{
          mt: "15px",
        }}
      >
        {companyDescription}
        <a href={companyLink} target="_blank">
          <Typography
            sx={{
              color: isDark ? "orange" : "blue",
            }}
            component="span"
          >
            {companyName}
          </Typography>
        </a>
      </Typography>
      {projects?.map((project, index) => (
        <Box className="w-full mt-1" key={index}>
          <Accordion
            expanded={expanded[index]}
            onChange={() => handleChange(index)}
            slots={{ transition: Fade as AccordionSlots["transition"] }}
            slotProps={{ transition: { timeout: 400 } }}
            sx={{
              display: "flex",
              flexWrap: "wrap",
              border: isDark ? "1px solid #515151" : "1px solid white",
              background: isDark ? "#515151" : "white",
              mt: "20px",
              boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",

              "& .MuiAccordion-region": {
                height: expanded[index] ? "auto" : 0,
              },
              "& .MuiAccordionDetails-root": {
                display: expanded[index] ? "block" : "none",
              },
            }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1-content"
              id="panel1-header"
              className="w-full"
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifySelf: "center",
                  width: "100%",
                  border: isDark ? "1px solid #3D3D3D" : "1px solid #ffede9",
                  alignSelf: "center",
                  borderRadius: "15px",
                  background: isDark ? "#3D3D3D" : "#ffede9",
                  boxShadow: "rgba(0, 0, 0, 0.35) 0px -50px 36px -28px inset",
                  px: "20px",
                }}
                className="flex flex-col w-full "
              >
                <span className="flex flex-wrap md:flex-nowrap justify-between w-full pt-2 md:pt-0 md:mb-[-5px]">
                  <span className="hidden md:flex flex-wrap justify-start items-center  ">
                    <Typography variant="overline">Project:</Typography>
                    <Typography variant="subtitle2" className="flex flex-wrap">
                      &nbsp;{project?.ProjectName}
                    </Typography>
                  </span>
                  <span className="hidden md:flex flex-wrap justify-start  items-center">
                    <Typography variant="overline">Location:</Typography>
                    <Typography>
                      &nbsp;{project?.location}
                      <Typography variant="overline" component="span">
                        &nbsp;({project?.workType})
                      </Typography>
                    </Typography>
                  </span>
                </span>
                <span className="flex flex-wrap md:flex-nowrap justify-between items-center w-full pb-2 md:pb-0 md:mt-[-5px]">
                  <span className="flex flex-wrap items-center">
                    <Typography variant="overline" className="hidden md:flex">
                      Role:
                    </Typography>
                    <Typography variant="subtitle2">
                      &nbsp;{project?.role}
                    </Typography>
                  </span>
                  <span className="flex flex-wrap items-center">
                    <Typography variant="subtitle2">
                      {project?.startDate} -
                    </Typography>
                    <Typography>&nbsp;{project?.endDate}</Typography>
                  </span>
                </span>
              </Box>
            </AccordionSummary>

            <AccordionDetails className="mt-[-20px] w-full">
              <Typography variant="overline">
                Project Description:&nbsp;
              </Typography>
              <Typography sx={{ textAlign: "justify" }} variant="subtitle2">
                {project?.projectDescription}
              </Typography>
              <Typography variant="overline">
                Responsibilities:&nbsp;
              </Typography>
              <List>
                {project?.responsibility.map((responsibility, index) => (
                  <ListItem sx={{ my: "-10px" }} dense key={index}>
                    <Typography
                      sx={{
                        fontSize: "12px",
                        mr: "8px",
                        color: isDark ? "orange" : "green",
                      }}
                    >
                      &#9658;
                    </Typography>
                    <ListItemText primary={responsibility} />
                  </ListItem>
                ))}
              </List>
              <Typography variant="overline">Technologies:</Typography>
              <Typography
                sx={{ color: isDark ? "orange" : "#00c6ff" }}
                variant="subtitle2"
              >
                {project?.technologies}
              </Typography>
            </AccordionDetails>
          </Accordion>
        </Box>
      ))}
    </Box>
  );
};

export default ExperienceCard;
