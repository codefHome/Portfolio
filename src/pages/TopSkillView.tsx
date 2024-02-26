import { Box, Typography } from "@mui/material";
import HorizontalDivider from "../components/HorizontalDivider";
import ButtonWithAnimation from "../components/ButtonWithAnimation";
import { useAppSelector } from "../store/hooks";
import { MyWorkType } from "../types/types";

const TopSkillView = ({ handleClick }: MyWorkType) => {
  const { isDark } = useAppSelector((state) => state.lading);
  return (
    <div className="flex flex-col mt-[7%]  ">
      <Typography variant="caption">My Expertise</Typography>
      <Typography variant="subtitle2">Skill Sets</Typography>
      <HorizontalDivider />
      <Box
        sx={{
          width: "100%",
          border: isDark ? "1px solid #3D3D3D" : "1px solid #fff",
          borderRadius: "15px",
          background: isDark ? "#3D3D3D" : "#fff",
          boxShadow:
            "rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px",
          p: "20px",
        }}
        className="flex flex-wrap lg:flex-row w-full lg:w-fit ml-[-13%] lg:ml-0 self-center"
      >
        <div className="flex flex-col gap-2 w-full lg:w-1/2">
          <Typography variant="subtitle1">Front-end</Typography>
          <Typography className="flex w-fit leading-normal" variant="subtitle2">
            I possess a strong skill set encompassing React, JavaScript, HTML,
            CSS, Vue, Redux, Redux Toolkit, Redux Toolkit Query, Pinia,
            TypeScript, Ant Design, Material UI, Tailwind CSS Jest, React Test
            Library, Cypress. I excel at managing application state and creating
            dynamic user interfaces. API integration, responsive design, and
            UI/UX best practices are among my core competencies.
          </Typography>

          <Typography variant="subtitle2" className="flex w-fit leading-normal">
            I have a keen eye for testing, debugging, performance optimization,
            and ensuring cross-browser compatibility and experienced in
            implementing software solutions that enforce technical standards to
            improve company income.
          </Typography>

          <Typography variant="subtitle1" sx={{ mt: "20px" }}>
            Back-end
          </Typography>
          <Typography variant="subtitle2" className="flex w-fit leading-normal">
            I'm proficient in Node.js, Express.js, Nest.js, and TypeORM for
            building robust REST API and managing database interactions with
            MongoDB, MYSQL, and PostgreSQL. I excel in API documentation using
            Swagger, and containerization with Docker, Docker-compose, and
            Kubernetes. I have a keen eye implementing secure authentication
            using JWT and Passport.js.
          </Typography>
          <ButtonWithAnimation handleClick={handleClick} />
        </div>
        <div className="flex justify-end w-full lg:w-1/2">
          <img
            src="./programming.svg"
            alt="avatar show coding"
            width="400px"
            height="400px"
          />
        </div>
      </Box>
    </div>
  );
};

export default TopSkillView;
