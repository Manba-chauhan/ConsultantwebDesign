import { Box, Button, Container, Paper, Stack, ThemeProvider, Typography ,Grid, Card} from '@mui/material';
import React from 'react';
import theme from './theme';
import CardComp from './CardComp';

const HeroSection2 = () => {
  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ bgcolor: "#e5e5e5", pt: 10 ,height:"100%" ,mb:0}}>
        <Container>
          <Paper
            sx={{
              width: { xs: "220px", sm: "600px" },
              mx: "auto",
              height: "991px",
              // position:"absolute"
            }}
          >
            {/* <img src={} alt='img'/> */}
            <Box
              sx={{
                backgroundImage:
                  "url('https://images01.nicepagecdn.com/c461c07a441a5d220e8feb1a/af3da5f0a6e2510f966a2b2b/jj.jpg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                width: { xs: "260px", sm: "543px" },
                height: { xs: "260px", sm: "543px" },
                borderRadius: "50%",
                ml: { xs: -1, sm: 3, md: -25 },
                position: "relative",
                top: -25,
                // mr:20
                // flexGrow:1
              }}
            >
              <Box
                sx={{
                  flexGrow: 1,
                  position: "relative",
                  left: { xs: "15px", sm: "0px", md: "380px", lg: "480px" },
                  top: { xs: "280px", sm: "550px", md: 20 },
                  px: { xs: 0, sm: 2, md: 3 },
                  py: { xs: 0, sm: 2, md: 10 },
                  ml: { xs: -4, sm: -2, md: 18 },
                  textAlign: { xs: "center", md: "left" },
                }}
              >
                <Typography
                  variant="h4"
                  sx={{
                    fontFamily: "Oswald, sans-serif",
                    fontSize: { xs: "1.5rem", md: "2.5rem" },
                    lineClamp: 7,
                    mb: 2,
                  }}
                >
                  About Our Company
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    letterSpacing: 1,
                    lineClamp: 7,
                    mb: 3,
                  }}
                >
                  Ultricies leo integer malesuada nunc vel risus commodo viverra
                  maecenas. Lobortis elementum nibh tellus molestie nunc non.
                  Aliquet bibendum
                </Typography>
                <Button
                  variant="contained"
                  sx={{
                    // border: "2px solid #fff",
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
            </Box>
          </Paper>
          <Container
            sx={{
              maxWidth: "1000px",
              mx: "auto",
              mt: 2,
              position: "relative",
              top: { xs: "-450px", sm: "-180px", md: "-450px" },
            }}
          >
            <Grid container spacing={4}>
              <Grid item sm={6} md={4}>
                <Card sx={{ bgcolor: "#2c3f52", color: "#fff", p: 2 }}>
                  <CardComp num="01" />
                </Card>
              </Grid>
              <Grid item sm={6} md={4}>
                <Card sx={{ bgcolor: "#edf4fb", color: "#000", p: 2 }}>
                  <CardComp num="02" />
                </Card>
              </Grid>
              <Grid item sm={6} md={4}>
                <Card sx={{ bgcolor: "#1e4870", color: "#fff", p: 2 }}>
                  <CardComp num="03" />
                </Card>
              </Grid>
            </Grid>
          </Container>
        </Container>
      </Box>
    </ThemeProvider>
  );
}

export default HeroSection2;
