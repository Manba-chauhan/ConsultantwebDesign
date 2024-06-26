import {
  Box,
  Container,
  ThemeProvider,
  Stack,
  Typography,
  Button,
  Card,
  CardContent,
} from "@mui/material";
import React from "react";
import theme from "./theme";
import Section7 from "./Section7";

const Section6 = () => {
  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          bgcolor: "primary.main",
          color: "secondary.main",
          width: "100%",
          //   height: "auto",
          pt: 10,
            pb: 5,
        }}
      >
        <Container>
          <Stack
            direction={{ xs: "column", sm: "column", md: "row" }}
            spacing={2}
            sx={{
              flexWrap: { xs: "wrap", sm: "wrap", md: "nowrap" },
            }}
          >
            <Stack
              direction="column"
              sx={
                {
                  // width: { xs: "100%", sm: "50%", md: "33.33%" },
                  // flexGrow: 1,
                }
              }
              spacing={4}
              alignItems="flex-end"
            >
              <Box
                sx={{
                  width: { xs: "100%", sm: "100%", md: "60%" },
                }}
              >
                <img
                  src="https://images01.nicepagecdn.com/c461c07a441a5d220e8feb1a/9cdeda5c9b6c5c6990372d8f/errr.jpg"
                  alt="img"
                  style={{
                    width: "100%",
                    height: "100%",
                    borderRadius: "5px",
                  }}
                />
              </Box>
              <Box
                sx={{
                  width: "100%",
                  height: "100%",
                }}
              >
                <img
                  src="https://assets.nicepagecdn.com/d2cc3eaa/2369305/images/634.jpg"
                  alt="img"
                  style={{
                    width: "100%",
                    height: "100%",
                    borderRadius: "5px",
                  }}
                />
              </Box>
            </Stack>
            <Stack
              direction="column"
              sx={{
                // width: { xs: "100%", sm: "100%", md: "33.33%" },
                flexGrow: 1,
                height: "100%",
              }}
              spacing={4}
            >
              <Box
                sx={{
                  width: "100%",
                  height: "100%",
                }}
              >
                <img
                  src="https://images01.nicepagecdn.com/c461c07a441a5d220e8feb1a/578fb085a1f2517496903263/b54139c5-2460-fd57-11e8-70a172b63d89.jpg"
                  alt="img"
                  style={{
                    width: "100%",
                    height: "350px",
                    borderRadius: "5px",
                  }}
                />
              </Box>
              <Box sx={{ width: "100%" }}>
                <Typography
                  variant="span"
                  sx={{ fontStyle: "italic", fontWeight: 0 }}
                >
                  Orci nulla pellentesque dignissim enim. In vitae turpis massa
                  sed. Nibh tellus molestie nunc non blandit massa enim nec dui.
                  Viverra adipiscing at in tellus. Ipsum dolor sit amet
                  consectetur adipiscing elit duis tristique.
                </Typography>
                <br></br>
                <Button
                  variant="outlined"
                  sx={{
                    border: "2px solid #fff",
                    px: 4,
                    py: 1.5,
                    color: "white",
                    letterSpacing: 4,
                    fontFamily: "monospace",
                    fontSize: "16px",
                    borderRadius: "10px",
                    mt: 4,
                    "&:hover": {
                      bgcolor: "#fff",
                      color: "primary.main",
                      border: "2px solid #fff",
                    },
                    "&:focus": {
                      border: "2px solid #fff",
                    },
                  }}
                >
                  Learn More
                </Button>
              </Box>
            </Stack>
            <Stack
              direction="column"
              sx={{
                width: { xs: "100%", sm: "100%", md: "100%" },
                flexGrow: 1,
              }}
            >
              <Box
                sx={{
                  width: "100%",
                  bgcolor: "secondary.main",
                  color: "black",
                  position: "relative",
                  left: { xs: 0, sm: 0, md: -80 },
                  top: 40,
                }}
              >
                <Card sx={{ p: 2 }}>
                  <CardContent>
                    <Typography variant="h3" sx={{ fontWeight: 600 }}>
                      Why Us
                    </Typography>
                    <Typography
                      variant="p"
                      component={Box}
                      sx={{ fontSize: "15px", mt: 2 }}
                    >
                      Sample text. Sample text. Click to select the text box.
                      Click again or double click to start editing the text.
                    </Typography>
                    <br></br>
                    <Typography
                      variant="a"
                      sx={{ fontStyle: "monospace", fontSize: "14px" }}
                    >
                      Images from FreePik
                    </Typography>
                  </CardContent>
                </Card>
              </Box>
            </Stack>
          </Stack>
          <Box sx={{ position: "relative", top: 80 }}>
            <Section7 />
          </Box>
        </Container>
      </Box>
    </ThemeProvider>
  );
};

export default Section6;
