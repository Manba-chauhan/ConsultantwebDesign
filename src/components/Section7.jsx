import React from 'react';
import {Box,Stack,Grid, Typography,Button} from '@mui/material'

const Section7 = () => {
  return (
    <Box sx={{pt:5}}>
      <Stack direction={{ xs: "column", sm: "column", md: "row" }} justifyContent="center">
        <Box sx={{ width: { xs: "100%", sm: "100%", md: "50%" } }}>
          <Box sx={{ px: { xs: 0, md: 10 }, pb: 3 }}>
            <Typography variant="h2" sx={{ fontFamily: "Oswald" }}>
              The leading consulting firm
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
                textWrap: "nowrap",
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
              READ MORE
            </Button>
          </Box>
        </Box>
        <Box sx={{ width: { xs: "100%", sm: "100%", md: "50%" } }}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6} md={6}>
              <Box sx={{ width: "100%", height: "100%" }}>
                <img
                  src="https://images01.nicepagecdn.com/c461c07a441a5d220e8feb1a/578fb085a1f2517496903263/b54139c5-2460-fd57-11e8-70a172b63d89.jpg"
                  alt="img"
                  style={{
                    width: "100%",
                    height: "100%",
                    borderRadius: "5px",
                  }}
                />
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={6}>
              <Box sx={{ width: "100%", height: "100%" }}>
                <img
                  src="https://images01.nicepagecdn.com/c461c07a441a5d220e8feb1a/578fb085a1f2517496903263/b54139c5-2460-fd57-11e8-70a172b63d89.jpg"
                  alt="img"
                  style={{
                    width: "100%",
                    height: "100%",
                    borderRadius: "5px",
                  }}
                />
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={6}>
              <Box sx={{ width: "100%", height: "100%" }}>
                <img
                  src="https://images01.nicepagecdn.com/c461c07a441a5d220e8feb1a/578fb085a1f2517496903263/b54139c5-2460-fd57-11e8-70a172b63d89.jpg"
                  alt="img"
                  style={{
                    width: "100%",
                    height: "100%",
                    borderRadius: "5px",
                  }}
                />
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={6}>
              <Box sx={{ width: "100%", height: "100%" }}>
                <img
                  src="https://images01.nicepagecdn.com/c461c07a441a5d220e8feb1a/578fb085a1f2517496903263/b54139c5-2460-fd57-11e8-70a172b63d89.jpg"
                  alt="img"
                  style={{
                    width: "100%",
                    height: "100%",
                    borderRadius: "5px",
                  }}
                />
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Stack>
    </Box>
  );
}

export default Section7;
