import { Box, Typography } from "@mui/material";
import HorizontalDivider from "../components/HorizontalDivider";
import ExperienceCard from "../components/ExperienceCard";
import { useGetExperienceQuery } from "../api/landingAPI";
import { Experience } from "../types/types";
import { useEffect, useState } from "react";
import CircularProgress from "@mui/material/CircularProgress";
const MyExperience = () => {
  const { data, isSuccess } = useGetExperienceQuery({});
  const [excel, setExcel] = useState<Experience>({} as Experience);
  const [hu, setHu] = useState<Experience>({} as Experience);
  console.log({ data });
  useEffect(() => {
    if (isSuccess) {
      setExcel(data[0]?.experiences[0]);
      setHu(data[0]?.experiences[1]);
    }
  }, [data]);
  return (
    <div className="flex flex-col w-full">
      <Typography variant="caption" className="hidden lg:flex">
        Where I have been Working
      </Typography>
      <Typography
        sx={{
          mt: "-15px",
          mb: "10px",
        }}
        variant="caption"
        className="flex lg:hidden"
      >
        Experience
      </Typography>
      <span className="hidden lg:flex flex-col ml-3">
        <Typography variant="subtitle2">My Experience</Typography>
        <HorizontalDivider />
      </span>

      <Box className="flex flex-col gap-10 w-full">
        {!isSuccess && (
          <Box className="flex justify-center items-center">
            <CircularProgress />
          </Box>
        )}
        {isSuccess && (
          <>
            <ExperienceCard
              title={excel?.title}
              companyName={excel?.companyName}
              companyDescription={excel?.companyDescription}
              companyLink={excel?.companyLink}
              startYear={excel?.startYear}
              endYear={excel?.endYear}
              projects={excel?.projects}
            />
            <ExperienceCard
              title={hu?.title}
              companyName={hu?.companyName}
              companyDescription={hu?.companyDescription}
              companyLink={hu?.companyLink}
              startYear={hu?.startYear}
              endYear={hu?.endYear}
              projects={hu?.projects}
            />
          </>
        )}
      </Box>
    </div>
  );
};

export default MyExperience;
