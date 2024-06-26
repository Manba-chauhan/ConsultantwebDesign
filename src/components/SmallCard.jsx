import { Button, Card, CardActions, CardContent, IconButton, Typography } from '@mui/material';
import React from 'react';
const SmallCard = (props) => {
  return (
    <Card sx={{width:"100%" ,  height:"100%" ,px:2 ,}}>
      <CardContent>
        <IconButton
          size="large"
          sx={{
            bgcolor: "primary.main",
            color: "#fff",
            p:2,
            fontSize:"40px",
            "&:hover": {
              bgcolor: "primary.main",
              color: "#fff",
            },
          }}
        >
        {props.icon}
         
        </IconButton>
        <Typography variant='h6' sx={{my:2,fontSize:"22px",fontWeight:700}}> {props.text}</Typography>
        <Typography variant='body1' sx={{fontFamily:'italic',fontWeight:200 ,fontSize:"18px"}}>Sample text. Click to select the Text Element.</Typography>
      </CardContent>
    </Card>
  );
}

export default SmallCard;
