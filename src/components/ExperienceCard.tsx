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

  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        border: "1px solid #ffede9",
        background: "#ffede9",
        padding: "20px",
        boxShadow:
          "rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px",
      }}
    >
      <div className="flex justify-between w-full">
        <span className="flex justify-center items-center">
          <Typography variant="subtitle1">{title} </Typography>
          <Typography variant="overline">&nbsp;@ {companyName}</Typography>
        </span>
        <Typography variant="subtitle1">
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
              color: "blue",
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
              border: "1px solid white",
              background: "white",
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
                  border: "1px solid #ffede9",
                  alignSelf: "center",
                  borderRadius: "15px",
                  background: "#ffede9",
                  boxShadow: "rgba(0, 0, 0, 0.35) 0px -50px 36px -28px inset;",
                  p: "20px",
                }}
                className="flex flex-col w-full mr-3"
              >
                <span className="flex justify-between w-full">
                  <Typography variant="overline">
                    Project:
                    <Typography variant="subtitle2" component="span">
                      &nbsp;{project?.ProjectName}
                    </Typography>
                  </Typography>
                  <Typography variant="overline">
                    Location:
                    <Typography component="span">
                      &nbsp;{project?.location}
                      <Typography variant="overline" component="span">
                        &nbsp;({project?.workType})
                      </Typography>
                    </Typography>
                  </Typography>
                </span>
                <span className="flex justify-between w-full">
                  <Typography variant="overline">
                    Role:
                    <Typography variant="subtitle2" component="span">
                      &nbsp;{project?.role}
                    </Typography>
                  </Typography>
                  <Typography variant="subtitle2">
                    {project?.startDate} -
                    <Typography component="span">
                      &nbsp;{project?.endDate}
                    </Typography>
                  </Typography>
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
                        color: "green",
                      }}
                    >
                      &#9658;
                    </Typography>
                    <ListItemText primary={responsibility} />
                  </ListItem>
                ))}
              </List>
              <Typography variant="overline">Technologies:</Typography>
              <Typography sx={{ color: "#00c6ff" }} variant="subtitle2">
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
