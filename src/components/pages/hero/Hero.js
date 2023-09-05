import { Icon, Fade, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useContext, useState } from "react";
import { StylingValuesContext } from "../../../contexts/StylingValues";
import useDelay from "../../../hooks/useDelay";
import useScreenSize from "../../../hooks/useScreenSize";
import { keyframes } from "@emotion/react";
import AgeTracker from "../../../hooks/age";
import { v4 as uuidv4 } from "uuid";
import { useTheme } from "@mui/styles";
import AnimateOnScroll from "../../shared/AnimateOnScroll";

const heroImageSrc =
  "https://firebasestorage.googleapis.com/v0/b/portfolio-bcf96.appspot.com/o/Screenshot%202023-09-04%20at%209.43.24%20PM.png?alt=media&token=7f5a4a96-2818-493b-9a90-4ef6c2d4a67e";

  const contactList = [
  {
    name: "gmail",
    imageURL:
      "https://firebasestorage.googleapis.com/v0/b/portfolio-bcf96.appspot.com/o/gmail.png?alt=media&token=8931353b-19b1-42fb-aa24-8418e4408844",
    websiteURL: "mailto:n4kwon@gmail.com",
  },
  {
    name: "github",
    imageURL:
      "https://firebasestorage.googleapis.com/v0/b/portfolio-bcf96.appspot.com/o/github.png?alt=media&token=c10afb3c-5ac0-404e-bb1a-06586d004483",
    websiteURL: "https://github.com/Nathan-dot",
  },
  {
    name: "linkedin",
    imageURL:
      "https://firebasestorage.googleapis.com/v0/b/portfolio-bcf96.appspot.com/o/linkedin.png?alt=media&token=1dc538f5-888d-4d82-b7e0-316e178e4b73",
    websiteURL: "https://linkedin.com/in/nathan-kwon-751a8325b",
  },
];

const Hero = () => {
  const { desktop, tablet, phone } = useScreenSize();
  const theme = useTheme();
  const {
    heroPadding,
    heroTypographyDelay,
    heroFadeDuration,
    heroButtonDelay,
  } = useContext(StylingValuesContext);

  let heroTypographyIsReady = useDelay(heroTypographyDelay);
  let heroButtonIsReady = useDelay(heroButtonDelay);

  if (phone) {
    heroTypographyIsReady = true;
    heroButtonIsReady = true;
  }

  const reveal = keyframes({
    from: { transform: "translate3d(-40px, 0px, 0px)" },
    to: { transform: "none" },
  });

  const [backgroundImage, setBackgroundImage] = useState("");

  return (
    <Box
      height={`calc(100vh - 2 * ${heroPadding})`}
      py={heroPadding}
      px="5vw"
      sx={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
      display="flex"
      flexDirection={desktop ? "row" : "column"}
      justifyContent={"center"}
      alignItems={(tablet || phone) && "center"}
      gap={desktop ? "5vw" : "min(100px, 10vh)"}
      bgcolor={theme.palette.primary.main}
    >
      <Box
        display="flex"
        justifyContent="center"
        flexDirection="column"
        alignItems={desktop ? "space-between" : "center"}
      >
        <Fade in={heroTypographyIsReady} timeout={phone ? 0 : heroFadeDuration}>
          <Box
            sx={{
              animation: !phone && `${reveal} 1s ease ${heroTypographyDelay}s`,
            }}
          >
            <Typography
              variant="h1"
              gutterBottom
              textAlign={(tablet || phone) && "center"}
            >
              Hi, I'm{" "}
              <Typography variant="h1" component="span" color="secondary">
                Nathan
              </Typography>
              ,
            </Typography>
            <Typography
              variant="h1"
              textAlign={(tablet || phone) && "center"}
              gutterBottom
            >
              a software developer.
            </Typography>
            <Typography
              variant="body1"
              textAlign={(tablet || phone)}
              gutterBottom
            >
              I'm a <span style={{width: "112px", display: "inline-block"}}><AgeTracker /></span> year-old computer science student <br></br> attending the University of Waterloo. Currently, I've finished 
              <br></br> my 2nd year of studies and am working at MappedIn as a <br></br> Software Developer this fall. I'm very interested in software engineering <br></br>
              and natural language processing, 
              and I'm seeking internships for <br></br> the Summer 2024 term where I can apply my programming skills <br></br>
              and learn more about software development.   
            </Typography>
          </Box>
        </Fade>
          <Box my={4} mt={10} height="40px" display="flex" gap="50px">
        {contactList.map((contact) => {
          const { name, imageURL, websiteURL } = contact;
          return (
            <Box
              key={uuidv4()}
              height="100%"
              sx={{
                position: "relative",
                top: 0,
                transition: "top ease 0.2s",
                "&:hover": {
                  top: "-10px",
                },
              }}
              component="a"
              href={websiteURL}
              target="_blank"
            >
              <img height="100%" src={imageURL} alt={name} />
            </Box>
          );
        })}
      </Box>
          
      </Box>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        height={tablet || phone ? "50%" : "auto"}
      >
        <AnimateOnScroll
          animation="fade-in"
          data-aos-duration="1200"
          data-aos-easing="ease-in"
        >
          <img
            alt="hero"
            src={heroImageSrc}
            height={phone ? "auto" : "390px"}
            width={phone ? "90%" : "335px"}
            style={{
              display: "block",
              marginLeft: "auto",
              marginRight: "auto",
              borderRadius: "50%", // To make it circular
              border: "5px solid #000"
            }}
          />
        </AnimateOnScroll>
      </Box>
    </Box>
  );
};

export default Hero;
