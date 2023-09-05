import { Box, Button, IconButton, Typography } from "@mui/material";
import React from "react";
import { v4 as uuidv4 } from "uuid";
import AnimateOnScroll from "../../shared/AnimateOnScroll";
import GitHubIcon from "@mui/icons-material/GitHub";
import { useTheme } from "@mui/styles";
import useScreenSize from "../../../hooks/useScreenSize";
import { YouTube } from "@mui/icons-material";

const projects = [
  {
    name: "Loose-Leaf Tunes",
    description:
      "Loose-Leaf Tunes is a full-stack web application that employs various Microsoft APIs to analyze text for the overall mood and composes original music to reflect its tone"
    , techStack: [
      "HTML",
      "CSS",
      "JavaScript",
      "JQuery",
      "Firebase"
    ],
    websiteURL: "https://devpost.com/software/project-sw70dtyukc2m",
    githubURL: "https://github.com/Nathan-dot/LooseLeafTunes-1",
    desktopImgSrc:
      "https://firebasestorage.googleapis.com/v0/b/portfolio-bcf96.appspot.com/o/Screenshot%202023-09-04%20at%2010.46.33%20PM.png?alt=media&token=19f5482a-0a73-48be-84e1-99ad4049bfb3",
  },
    {
    name: "RiftReport",
    description:
      "RiftReport is a web application that compiles League of Legends data via the Riot Games API and displays user match history and data via numerous graphs.",
    techStack: ["Javascript, Chart.js, Node.js, React"],
    githubURL: "https://github.com/Nathan-dot/RiftReport",
    desktopImgSrc:
      "https://user-images.githubusercontent.com/61018496/186763023-c5b56f47-f13f-4940-9ca9-490dd97cbbef.gif",
  },
    {
    name: "ChessWithFriends",
    description:
      "This project is a graphical Chess engine that uses C++ and X11 forwarding with 4 levels of AI difficulty and supports single and 2-player game modes. It incorporates various object-oriented principles like Inheritance and Polymorphism and many design-patterns to promote a scalable and modular architecture.",
    techStack: ["C++, Bash, Batch"],
    githubURL: "https://github.com/Nathan-dot/ChessWithFriends",
    desktopImgSrc:
      "https://firebasestorage.googleapis.com/v0/b/portfolio-bcf96.appspot.com/o/Screenshot%202023-09-04%20at%2010.44.24%20PM.png?alt=media&token=d2b0343e-ffdc-4ede-8f46-7333732cd763",
  },
  {
    name: "SudokuAI",
    description:
      "SudokuAI is a command line interface application that incorporates the Algorithm X and Dancing Links algorithms to solve complicated sudokus in under 1 second.",
    techStack: ["Java"],
    //websiteURL: "https://chatify-reactjs.herokuapp.com/",
    githubURL: "https://github.com/Nathan-dot/sudokuSolver",
    desktopImgSrc:
      "https://firebasestorage.googleapis.com/v0/b/portfolio-bcf96.appspot.com/o/watch-all.gif?alt=media&token=cad5247c-ca9e-4311-bcac-eb57ee260488",
  },
  {
    name: "TetrisClone",
    description:
      "This project is a command line interface application, with its own graphical interface, that serves as a fully-functioning single player game of Tetris. It will eventually allow online multiplayer options and an option to play against a deep-learning based AI.",
    techStack: ["Python"],
    githubURL: "https://github.com/Nathan-dot/TetrisClone",
    desktopImgSrc:
      "https://firebasestorage.googleapis.com/v0/b/portfolio-bcf96.appspot.com/o/linux-toy-tetris-animated.gif?alt=media&token=4b02cc29-5710-465b-941c-1f90544626a5",
  },
];

const Projects = () => {
  const theme = useTheme();
  const { desktop } = useScreenSize();

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      p={3}
      bgcolor="primary.main"
      py={7}
      id="projects"
    >
      <Typography variant="h1">projects</Typography>
      {projects.map((project, index) => {
        return (
          <AnimateOnScroll
            animation={index % 2 === 1 ? "fade-left" : "fade-right"}
            key={uuidv4()}
            display="grid"
            sx={{ placeItems: "center" }}
          >
            <Box
              display="flex"
              flexDirection={
                desktop ? index % 2 === 1 && "row-reverse" : "column"
              }
              width={desktop ? "1000px" : "min(500px, 90%)"}
              alignItems="center"
              gap={desktop ? "50px" : "30px"}
              mt="100px"
            >
              <Box flex="1" display="flex" flexDirection="column" gap="15px">
                <Typography variant="h4">{project.name}</Typography>
                <Typography>{project.description}</Typography>
                {project.techStack && (
                  <Box>
                    {project.techStack.map((technology, index) => (
                      <React.Fragment key={uuidv4()}>
                        {index !== 0 && (
                          <Typography display="inline">, </Typography>
                        )}
                        <Typography display="inline">{technology}</Typography>
                      </React.Fragment>
                    ))}
                  </Box>
                )}
                <Box display="flex" alignItems="center">
                  {project.websiteURL && <IconButton
                    size="large"
                    sx={{ right: !project.websiteURL && "12.5px" }}
                    onClick={() => window.open(project.websiteURL, "_blank")}
                  >
                    <YouTube fontSize="inherit" sx={{ color: "black" }} />
                  </IconButton>
                  }
                  <IconButton
                    size="large"
                    sx={{ right: !project.websiteURL && "12.5px" }}
                    onClick={() => window.open(project.githubURL, "_blank")}
                  >
                    <GitHubIcon fontSize="inherit" sx={{ color: "black" }} />
                  </IconButton>
                </Box>
              </Box>
              <Box flex="1" display="grid" sx={{ placeItems: "center" }}>
                <img
                  loading="lazy"
                  src={project.desktopImgSrc}
                  alt={project.name}
                  width="100%"
                  style={{
                    boxShadow: theme.shadows[10],
                  }}
                />
              </Box>
            </Box>
          </AnimateOnScroll>
        );
      })}
    </Box>
  );
};

export default Projects;
