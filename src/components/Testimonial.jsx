import { Avatar, Box, CardContent, Stack, Typography } from '@mui/material';
import React from 'react';

const Testimonial = (props) => {
  return (
    <CardContent>
      <Stack direction="row" spacing={2}>
        <Avatar
          sx={{
            width: 70,
            height: 70,
          }}
          src={props.img}
        />
        <Box sx={{pt:1.5}}>
          <Typography
            variant="h5"

            sx={{ fontWeight: "bold", fontFamily: "sans-serif" }}
          >
           {props.name}
          </Typography>
          <Typography
            variant="span"
            sx={{ fontWeight: 100, fontFamily: "serif", letterSpacing: 1.5 }}
          >
            {props.designation}
          </Typography>
        </Box>
      </Stack>
      <Typography  variant='p' component={Box} sx={{mt:3,lineHeight:2,fontFamily:'sans-serif',lineClamp:2,px:1}}>
        Proin sed libero enim sed faucibus turpis. At imperdiet dui accumsan sit
        amet nulla facilisi morbi tempus. Ut sem nulla pharetra diam sit amet
        nisl.
      </Typography>
    </CardContent>
  );
}

export default Testimonial;
