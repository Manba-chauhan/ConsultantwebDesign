import { Box, Container, ThemeProvider, Typography,Grid, Card, CardContent, CardHeader, CardActions, Button } from '@mui/material';
import React from 'react';
import theme from './theme';
import SmallCard from './SmallCard';
import PhonelinkRingIcon from "@mui/icons-material/PhonelinkRing";
import DashboardCustomizeOutlinedIcon from "@mui/icons-material/DashboardCustomizeOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";

const HeroSection3 = () => {
  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ bgcolor: "#e5e5e5", mt: { xs: -40, sm: -20, md: -30 } }}>
        <Container>
          <Box
            sx={{
              width: { xs: "100%", sm: "100%", md: "60%" },
              textAlign: "center",
              mx: "auto",
            }}
          >
            <Typography
              variant="h5"
              sx={{
                fontSize: { xs: "1.80rem", sm: "3rem" },
                fontWeight: 500,
                fontFamily: "Oswald",
                letterSpacing: 2,
                mb: 3,
                textWrap: { xs: "wrap", sm: "nowrap" },
              }}
            >
              Get Great Work for Your Budget
            </Typography>
            <Typography
              variant="body1"
              sx={{
                fontSize: "16px",

                mb: 3,
                px: { xs: 0, sm: 5 },
              }}
            >
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident, sunt in culpa
            </Typography>
          </Box>

          <Grid container spacing={2} justifyContent="center">
            <Grid item sm={6} md={4}>
              <SmallCard
                icon={<DashboardCustomizeOutlinedIcon />}
                text="Website Design"
              />
            </Grid>
            <Grid item sm={6} md={4}>
              <Card
                sx={{
                //   width: "100%",
                  height: "100%",
                  px: 0,
                  bgcolor: "primary.main",
                  color: "secondary.main",
                }}
              >
                <CardContent>
                  <Typography
                    variant="h5"
                    sx={{
                      fontSize: "1.75rem",
                      fontWeight: 600,
                    //    width:"80%"
                        textWrap:"wrap"
                      // mb:2
                    }}
                  >
                    Our call service world quality
                  </Typography>
                  <Typography sx={{ mt: 1 }}>
                    Sample text. Click to select the Text Element.
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button
                    variant="text"
                    sx={{
                      textDecorationLine: "underline",
                      lineHeight: 2,
                      color: "#fff",
                    }}
                  >
                    READ MORE
                  </Button>
                </CardActions>
              </Card>
            </Grid>
            <Grid item sm={6} md={4}>
              <SmallCard
                icon={<PhonelinkRingIcon />}
                text="Online Research"
              />
            </Grid>
            <Grid item sm={6} md={4}>
              <Box
                sx={{
                  width: "100%",
                  height: "100%",
                  backgroundImage:
                    "url('https://assets.nicepagecdn.com/d2cc3eaa/2369305/images/5463.jpg')",
                  objectFit: "cover",
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                }}
              ></Box>
            </Grid>
            <Grid item sm={6} md={4}>
              <SmallCard
                icon={<SettingsOutlinedIcon />}
                text="Social Media"
              />
            </Grid>
            <Grid item sm={6} md={4}>
              <Box
                sx={{
                  width: "100%",
                  height: "100%",
                  backgroundImage:
                    "url('https://images01.nicepagecdn.com/c461c07a441a5d220e8feb1a/e409a7a3552c582cb3c13a09/8e64d14c-d5df-4050-b76e-c7c0c90da004.jpg')",
                  objectFit: "cover",
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                }}
              ></Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </ThemeProvider>
  );
}

export default HeroSection3;
