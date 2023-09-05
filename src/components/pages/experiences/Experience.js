import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { v4 as uuidv4 } from "uuid";
import AnimateOnScroll from "../../shared/AnimateOnScroll";

const experiencesList = [
  {
    companyName: "MappedIn",
    role: "Fullstack Software Developer",
    timePeriod: "Sept 2023 - Dec 2023",
    techStack: [
      "React.js",
      "Node.js",
      "Redux",
      "MobX",
      "Fastify"
    ],
  },
  {
    companyName: "CloudsparkLabs",
    role: "Software Engineering Intern",
    timePeriod: "Jan 2023 - Apr 2023",
    techStack: [
      "React",
      "Next.js",
      "Python",
      "Typescript",
      "Postman",
      "IndexedDB",
      "Redis"
    ],
  },
  {
    companyName: "First Robotics Competition",
    role: "Head of Programming / Co-Captain",
    timePeriod: "Sept 2019 - June 2021",
    techStack: [
      "Java",
      "C++",
      "Telemetry",
      "Tensorflow"
    ]
  },
  {
    companyName: "Canadian Computing Competition",
    role: "Came within top 20% of competitors yearly",
    timePeriod: "April 2016 - June 2021",
    techStack: [
      "C++",
      "Java",
      "Python"
    ],
  },
];

const Experience = () => {
  const isNotFirstItem = (index) => index !== 0;
  const isNotLastItem = (index) => index !== experiencesList.length - 1;

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      p={3}
      py={7}
      bgcolor="primary.main"
      id="experiences"
    >
      <Typography variant="h1">experiences</Typography>
      <Box p={1}>
        {experiencesList.map((experience, index) => {
          return (
            <Box display="flex" flexDirection="row" key={uuidv4()}>
              <Box display="flex" flexDirection="column" alignItems="center" width="20px">
                <Box
                  width="5px"
                  flex={2}
                  bgcolor={isNotFirstItem(index) && "tertiary.main"}
                  mb={isNotFirstItem(index) && 2}
                  borderRadius="0px 0px 5px 5px "
                />
                <Box
                  height="10px"
                  width="10px"
                  borderRadius="100%"
                  bgcolor="secondary.main"
                />
                <Box
                  width="5px"
                  flex={2}
                  bgcolor={isNotLastItem(index) && "tertiary.main"}
                  mt={isNotLastItem(index) && 2}
                  borderRadius="5px 5px 0px 0px"
                />
              </Box>
              <AnimateOnScroll animation="fade-left">
                <Box py={5} pl={3}>
                  <Typography variant="h4" color="secondary.main">
                    {experience.companyName}
                  </Typography>
                  <Typography sx={{ fontWeight: 700 }}>
                    {experience.role}
                  </Typography>
                  {experience.techStack && (
                    <Box maxWidth="350px" mb={1.5}>
                      {experience.techStack.map((technology, index) => (
                        <React.Fragment key={uuidv4()}>
                          {index !== 0 && (
                            <Typography display="inline">, </Typography>
                          )}
                          <Typography display="inline" noWrap>
                            {technology}
                          </Typography>
                        </React.Fragment>
                      ))}
                    </Box>
                  )}
                  <Typography>{experience.timePeriod}</Typography>
                </Box>
              </AnimateOnScroll>
            </Box>
          );
        })}
      </Box>
    </Box>
  );
};

export default Experience;
