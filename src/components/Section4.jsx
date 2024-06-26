import {
  Box,
  Container,
  Paper,
  Stack,
  Typography,
  Button,
  ThemeProvider,
} from "@mui/material";
import React from "react";
import theme from "./theme";

const Section4 = () => {
  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          bgcolor: "#e5e5e5",
          pt: { xs:4, sm: 40, md: 10 },
          pb: { xs: 20, sm: 0, md: 10 },
        }}
      >
        <Container
          sx={{
            width: { xs: "100%", sm: "80%", md: "70%" },
            height: { xs: "auto", md: "auto" },
            // mt:'100px'
          }}
        >
          <Box>
            <Paper
              sx={{
                width: { xs: "200px", sm: "450px", md: "600px" },
                mx: "auto",
                height: { xs: "auto", sm: "1200px", md: "991px" },
              }}
            ></Paper>
            {/* <Box sx={{ position: "relative", bottom: 0, mt: -70 ,top:{xs:500,md:-400}}}> */}
            <Stack
              direction={{ xs: "column", sm: "column", md: "row" }}
              justifyContent="center"
              alignItems="center"
              sx={{
                width: "100%",
                height: "100%",
                mt: { xs: 10, sm: -180, md: -120 },
                // mb:20,
              }}
            >
              <Stack
                direction={{ xs: "column", sm: "column", md: "column" }}
                justifyContent="center"
                alignItems="center"
              >
                <Box
                  sx={{
                    width: { xs: "300px", sm: "520px", md: "80%" },
                    height: { xs: "300px", sm: "520px", md: "400px" },
                    borderRadius: "50%",
                    overflow: "hidden",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    mx: 2,
                  }}
                >
                  <img
                    src="https://assets.nicepagecdn.com/d2cc3eaa/2369305/images/Untitled-1.jpg"
                    alt="Company Image"
                    style={{
                      width: "100%",
                      height: "100%",
                      borderRadius: "50%",
                    }}
                  />
                </Box>
                <Box
                  sx={{
                    width: { xs: "100%", sm: "80%", md: "70%" },
                    textAlign: { xs: "center", sm: "center", md: "left" },
                    mx: 4,
                  }}
                >
                  <Typography
                    variant="h4"
                    sx={{
                      fontFamily: "Oswald, sans-serif",
                      fontSize: { xs: "1.5rem", md: "2.5rem" },
                      mb: 2,
                      mt: 2,
                    }}
                  >
                    Full Management Solutions
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{
                      letterSpacing: 1,
                      mb: 3,
                    }}
                  >
                    Ultricies leo integer malesuada nunc vel risus commodo
                    viverra maecenas. Lobortis elementum nibh tellus molestie
                    nunc non. Aliquet bibendum
                  </Typography>
                  <Button
                    variant="contained"
                    sx={{
                      px: 4,
                      py: 1.5,
                      color: "white",
                      letterSpacing: 4,
                      fontFamily: "monospace",
                      fontSize: "16px",
                      borderRadius: "10px",
                      mt: 3,
                    }}
                  >
                    Learn More
                  </Button>
                </Box>
              
              </Stack>
              <Stack
                direction={{
                  xs: "column-reverse",
                  sm: "column-reverse",
                  md: "column",
                }}
                justifyContent="center"
                alignItems="center"
                sx={{
                  mt: 5,
                }}
              >
                <Box
                  sx={{
                    width: { xs: "100%", sm: "80%", md: "70%" },
                    textAlign: { xs: "center", sm: "center", md: "left" },
                    mx: 4,
                    mb: 2,
                  }}
                >
                  <Typography
                    variant="h4"
                    sx={{
                      fontFamily: "Oswald, sans-serif",
                      fontSize: { xs: "1.5rem", md: "2.5rem" },
                      mb: 2,
                      mt: 2,
                    }}
                  >
                    Who we are
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{
                      letterSpacing: 1,
                      mb: 3,
                    }}
                  >
                    Ultricies leo integer malesuada nunc vel risus commodo
                    viverra maecenas. Lobortis elementum nibh tellus molestie
                    nunc non. Aliquet bibendum
                  </Typography>
                  <Button
                    variant="contained"
                    sx={{
                      px: 4,
                      py: 1.5,
                      color: "white",
                      letterSpacing: 4,
                      fontFamily: "monospace",
                      fontSize: "16px",
                      borderRadius: "10px",
                      mt: 3,
                    }}
                  >
                    Learn More
                  </Button>
                </Box>
                <Box
                  sx={{
                    width: { xs: "300px", sm: "420px", md: "80%" },
                    height: { xs: "300px", sm: "380px", md: "350px" },
                    borderRadius: "50%",
                    overflow: "hidden",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    mx: 2,
                    mt: { xs: 0, sm: 2, md: 15 },
                  }}
                >
                  <img
                    src="https://assets.nicepagecdn.com/d2cc3eaa/2369305/images/5.jpg"
                    alt="Company Image"
                    style={{
                      width: "100%",
                      height: "100%",
                      borderRadius: "50%",
                      objectFit: "cover",
                      mt: 10,
                    }}
                  />
                </Box>
              </Stack>
            </Stack>
          </Box>
          {/* </Box> */}
        </Container>
      </Box>
    </ThemeProvider>
  );
};

export default Section4;
