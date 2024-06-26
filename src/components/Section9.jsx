import {
  Container,
  Stack,
  Box,
  TextField,
  ThemeProvider,
  Typography,
  Button,
} from "@mui/material";
import React from "react";
import theme from "./theme";
import AccordianComp from "./AccordianComp";

const Section9 = () => {
  const data = [
    {
      id: 1,
      que: "Phasellus sed efficitur dolor?",
      ans: "Answer. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur id suscipit ex. Suspendisse rhoncus laoreet purus quis elementum. Phasellus sed efficitur dolor, et ultricies sapien. Quisque fringilla sit amet dolor commodo efficitur. Aliquam et sem odio. In ullamcorper nisi nunc, et molestie ipsum iaculis sit amet.",
    },
    {
      id: 2,
      que: "Quisque fringilla sit amet dolor?",
      ans: "Answer. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur id suscipit ex. Suspendisse rhoncus laoreet purus quis elementum. Phasellus sed efficitur dolor, et ultricies sapien. Quisque fringilla sit amet dolor commodo efficitur. Aliquam et sem odio. In ullamcorper nisi nunc, et molestie ipsum iaculis sit amet.",
    },
    {
      id: 3,
      que: "Aliquam et sem odio?",
      ans: "Answer. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur id suscipit ex. Suspendisse rhoncus laoreet purus quis elementum. Phasellus sed efficitur dolor, et ultricies sapien. Quisque fringilla sit amet dolor commodo efficitur. Aliquam et sem odio. In ullamcorper nisi nunc, et molestie ipsum iaculis sit amet.",
    },
  ];

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ mt: 20 }}>
        <Container>
          <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
            <Box sx={{ width: { xs: "100%", sm: "100%", md: "50%" }, px: 2 }}>
              <Typography
                variant="h4"
                component={Box}
                sx={{
                  fontWeight: 600,
                  mb: 4,
                  fontSize: { xs: "2rem", sm: "2rem", md: "3.5rem" },
                }}
              >
                Get In Touch
              </Typography>
              <Box component="form">
                <Box>
                  <TextField
                    placeholder="Enter Your Name"
                    sx={{
                      bgcolor: "#f2f2f2",
                      "& .MuiOutlinedInput-root": {
                        "& fieldset": {
                          borderColor: "transparent", // Hide the border color
                        },
                        "&:hover fieldset": {
                          borderColor: "gray", // Show the border color on hover
                        },
                        "&.Mui-focused fieldset": {
                          borderColor: "gray", // Show the border color when focused
                        },
                      },
                    }}
                    size="small"
                    fullWidth
                  />
                </Box>
                <Box sx={{ mt: 2 }}>
                  <TextField
                    placeholder="Enter Your Email"
                    sx={{
                      bgcolor: "#f2f2f2",
                      "& .MuiOutlinedInput-root": {
                        "& fieldset": {
                          borderColor: "transparent", // Hide the border color
                        },
                        "&:hover fieldset": {
                          borderColor: "gray", // Show the border color on hover
                        },
                        "&.Mui-focused fieldset": {
                          borderColor: "gray", // Show the border color when focused
                        },
                      },
                    }}
                    size="small"
                    fullWidth
                  />
                </Box>
                <Box sx={{ mt: 2 }}>
                  <TextField
                    placeholder="Your Message Here"
                    sx={{
                      bgcolor: "#f2f2f2",
                      "& .MuiOutlinedInput-root": {
                        "& fieldset": {
                          borderColor: "transparent", // Hide the border color
                        },
                        "&:hover fieldset": {
                          borderColor: "gray", // Show the border color on hover
                        },
                        "&.Mui-focused fieldset": {
                          borderColor: "gray", // Show the border color when focused
                        },
                      },
                    }}
                    size="small"
                    multiline
                    rows={6}
                    fullWidth
                  />
                </Box>
                <Button variant="contained" sx={{ my: 2, px: 4 }}>
                  Submit
                </Button>
              </Box>
            </Box>
            <Box
              sx={{
                width: { xs: "100%", sm: "100%", md: "50%" },
                bgcolor: "#f2f2f2",
                p: 2,
              }}
            >
              {data.map((item) => (
                <Box sx={{ mt: 2 }} key={item.id}>
                  <AccordianComp
                    id={item.id}
                    title={item.que}
                    answer={item.ans}
                  />
                </Box>
              ))}
            </Box>
          </Stack>
        </Container>
      </Box>
    </ThemeProvider>
  );
};

export default Section9;
