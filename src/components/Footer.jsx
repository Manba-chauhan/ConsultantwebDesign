import { Box, Typography } from '@mui/material';
import React from 'react';

const Footer = () => {
  return (
    <Box
      sx={{
        width: "100%",
        height: "300px",
        textAlign: "center",
        mt: 10,
        bgcolor: "#333333",
        color: "#fff",
        pt: 4,
      }}
    >
      <Typography sx={{ fontStyle: "italic" ,width:"50%" ,mx:"auto"}} component={Box}>
        Sample text. Click to select the Text Element.
      </Typography>
    </Box>
  );
}

export default Footer;
