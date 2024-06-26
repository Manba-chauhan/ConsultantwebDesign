import { CardContent, Typography } from '@mui/material';
import React from 'react';

const CardComp = (props) => {
  return (
    <CardContent>
      <Typography variant="h4" sx={{ fontFamily: "sans-serif" ,fontWeight:"bold" ,mb:2 }}>
        {props.num}
      </Typography>
      <Typography variant="body1" sx={{letterSpacing:1 ,lineClamp:7 ,fontSize:"15px", fontWeight:100,fontFamily:"serif"}}>
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
        dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
        proident, sunt in culpa qui officia deserunt mollit anim id est laborum.<br></br>
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
        ut aliquip ex ea commodo consequat.
      </Typography>
    </CardContent>
  );
}

export default CardComp;
