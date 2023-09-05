import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { v4 as uuidv4 } from "uuid";

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

const Contact = () => {
  const getGmail = () =>
    contactList.filter((item) => item.name === "gmail")[0].websiteURL;

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      p={3}
      py={7}
      bgcolor="primary.main"
      id="contact"
    >
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
      <Box>
        <Typography textAlign="center">
         Designed and Developed by Nathan Kwon
        </Typography>
      </Box>
    </Box>
  );
};

export default Contact;
