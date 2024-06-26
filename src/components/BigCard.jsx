import { Box, CardContent, Typography } from '@mui/material';
import React from 'react';

const BigCard = (props) => {
  return (
    <CardContent>
      <Typography variant="h5" sx={{ mt: 1,pb:2, fontWeight:600 ,fontFamily:"sans-serif" }}>
       
        {props.heading}
      </Typography>
      <Typography variant="body1">
        Sample text. Click to select the Text Element.
      </Typography>
      <Typography variant="a" sx={{mt:2,fontFamily:'serif',textDecorationLine:"underline",pointerEvents:"visible"}} component={Box}>
        Read More
      </Typography>
    </CardContent>
  );
}

export default BigCard;
