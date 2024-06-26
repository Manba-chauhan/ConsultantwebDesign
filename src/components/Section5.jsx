import React from 'react';
import { Box } from '@mui/system';
import { Card, CardContent, Container ,Grid, ThemeProvider, Typography} from '@mui/material';
import BigCard from './BigCard';
import theme from './theme';

const Section5 = () => {
  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          width: "100%",
          height: { xs: "auto", md: "800px" },
          backgroundImage:
            "url('https://assets.nicepagecdn.com/d2cc3eaa/2369305/images/business-colleagues-rooftop-talking-67767.jpg')",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
          // mt:10,
        }}
      >
        <Container sx={{ pt: 6 ,pb:2}}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6} md={3}>
              <Card
                sx={{
                  bgcolor: "#2c3f52",
                  color: "#fff",
                  width: "100%",
                  height: "100%",
                  px: 2,
                }}
              >
                <CardContent>
                  <Typography variant="h3" sx={{ pb: 2 }}>
                    About Us
                  </Typography>
                  <Typography variant="body1">
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Card
                sx={{ bgcolor: "#fff", width: "100%", height: "100%", px: 2 }}
              >
                <BigCard heading="Property Managers for Management Companies" />
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Card
                sx={{
                  bgcolor: "primary.main",
                  color: "#fff",
                  width: "100%",
                  height: "100%",
                  px: 2,
                }}
              >
                <BigCard heading="Helping clients grow faster than the market" />
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Card
                sx={{ bgcolor: "#fff", width: "100%", height: "100%", px: 2 }}
              >
                <BigCard heading="Logistics company builds value by consolidating brands" />
              </Card>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </ThemeProvider>
  );
}

export default Section5;
