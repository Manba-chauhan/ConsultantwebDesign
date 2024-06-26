import React from "react";
import {
  styled,
  Box,
  Container,
  Typography,
  ThemeProvider,
  Button,
} from "@mui/material";
import theme from "./theme";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// Import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";


const HeroSection = () => {
  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          backgroundImage:
            "url('https://images01.nicepagecdn.com/c461c07a441a5d220e8feb1a/4682bffd73a05ba8a6c18ea8/hg-min.jpg')",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          width: "100%",
          height: "100vh",
        }}
      >
        <Container
          sx={{
            width: "100%",
            height: "100%",
            textAlign: { xs: "center", sm: "left", md: "left" },
          }}
        >
          <Box sx={{ width: "100%", height: "100%" }}>
            <Swiper
              cssMode={true}
              //   navigation={true}
              pagination={true}
              mousewheel={true}
              keyboard={true}
              modules={[Navigation, Pagination, Mousewheel, Keyboard]}
              className="mySwiper"
              //   style={{ width: "50%", margin: "30px " }} // Center the swiper
            >
              <SwiperSlide>
                <Box
                  sx={{
                    pt: { xs: 30, md: 30 },
                    width: { xs: "100%", sm: "100%", md: "80%" },
                    height: "100%",
                    px: { xs: 0, md: 10 },
                  }}
                  color="secondary.main"
                >
                  <Typography
                    variant="h2"
                    component="div"
                    sx={{
                      fontFamily: "Oswald, sans-serif",
                      fontSize: { xs: "2rem", md: "3.5rem" },
                    }}
                  >
                    Successful Consultants
                  </Typography>
                  <Typography
                    variant="body1"
                    component="div"
                    sx={{
                      fontFamily: "roboto",
                      fontSize: "18px",
                      fontWeight: 50,
                      my: 3,
                    }}
                  >
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat
                  </Typography>
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
                      "&:hover": {
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
              </SwiperSlide>
              <SwiperSlide>
                <Box
                  sx={{
                    pt: { xs: 30, md: 30 },
                    width: { xs: "100%", sm: "100%", md: "80%" },
                    height: "100%",
                    px: { xs: 0, md: 10 },
                    pb: 10,
                  }}
                  color="secondary.main"
                >
                  <Typography
                    variant="h2"
                    component="div"
                    sx={{
                      fontFamily: "Oswald, sans-serif",
                      fontSize: { xs: "2rem", md: "3.5rem" },
                    }}
                  >
                    Coaching and Training
                  </Typography>
                  <Typography
                    variant="body1"
                    component="div"
                    sx={{
                      fontFamily: "roboto",
                      fontSize: "18px",
                      fontWeight: 50,
                      my: 3,
                    }}
                  >
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat
                  </Typography>
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
                      "&:hover": {
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
              </SwiperSlide>
            </Swiper>
          </Box>
        </Container>
      </Box>
    </ThemeProvider>
  );
};

export default HeroSection;
