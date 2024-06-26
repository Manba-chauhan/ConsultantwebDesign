import { Container ,Box, Typography,Stack, Card,Grid, ThemeProvider} from '@mui/material';
import React from 'react';
import Testimonial from './Testimonial';
import theme from './theme';
import A1 from '../assets/img/A1.png'
import A2 from "../assets/img/A2.png";
import A3 from "../assets/img/A3.png";

const Section8 = () => {
  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ width: "100%", mt: 15 }}>
        <Container>
          <Box
            sx={{
              width: { xs: "100%", sm: "50%" },
              mx: "auto",
              textAlign: "center",
            }}
          >
            <Typography
              variant="h2"
              sx={{ fontFamily: "Oswald", lineHeight: 2 }}
            >
              Our experts
            </Typography>
            <Typography variant="p">
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur.
            </Typography>
          </Box>
          <Stack sx={{ mt: 5 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6} md={4}>
                <Card sx={{  bgcolor: "black", color: "white", p: 2 }}>
                  <Testimonial 
                    img={A1}
                    name='Celia Almeda'
                    designation='CEO Company'

                  />
                </Card>
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <Card sx={{ bgcolor: "primary.main", color: "white", p: 2 }}>
                  <Testimonial 

                     img={A2}
                    name='Frank Kinney'
                    designation='Financial Director'
                  />
                </Card>
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <Card
                  sx={{
                    bgcolor: "#2c3f52",
                    color: "#fff",
                    width: "100%",
                    height: "100%",
                    p: 2,
                  }}
                >
                  <Testimonial 
                     img={A3}
                    name='Nick Jhonson'
                    designation='Sales Manager'
                  />
                </Card>
              </Grid>
            </Grid>
          </Stack>
        </Container>
      </Box>
    </ThemeProvider>
  );
}

export default Section8;
