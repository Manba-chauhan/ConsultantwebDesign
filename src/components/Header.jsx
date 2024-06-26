import {
  AppBar,
  Box,
  Button,
  Container,
  Drawer,
  IconButton,
  Stack,
  ThemeProvider,
  Toolbar,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import theme from "./theme";
import MenuIcon from "@mui/icons-material/Menu";

const Header = () => {
    const drawerWidth=200;
   const [open ,setopenmenu]=useState(false)

   const Openmenu=()=>{
     setopenmenu(true)
   }

   const handleClose=()=>{
    setopenmenu(false)
   }

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ bgcolor: "white", boxShadow: 1,}}>
        <AppBar sx={{ bgcolor: "white" }}>
          <Container>
            <Toolbar>
              <Box sx={{ flexGrow: 1 }}>
                <Typography
                  variant="h4"
                  sx={{ color: "GrayText", fontFamily: "cursive" }}
                >
                  Logo
                </Typography>
              </Box>
              <Stack>
                <IconButton
                  sx={{ color: "black" }}
                  size="large"
                  onClick={Openmenu}
                >
                  <MenuIcon />
                </IconButton>
                <Drawer
                  open={open}
                  anchor="right"
                  onClose={handleClose}
                  sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    "& .MuiDrawer-paper": {
                      width: drawerWidth,
                      bgcolor: "primary.main",
                    },
                    color: "secondary.main",
                  }}
                  //   onClick={Openmenu }
                >
                  <Box
                    sx={{
                      mt: 5,
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      flexDirection: "column",
                      //   bgcolor: "primary.main",
                    }}
                  >
                    <Button
                      onClick={handleClose}
                      sx={{ fontSize: "20px" }}
                      fullWidth
                      color="secondary"
                    >
                      Home
                    </Button>
                    <br></br>
                    <Button
                      sx={{ fontSize: "20px" 
                       
                      }}
                      color="secondary"
                      fullWidth
                      onClick={handleClose}
                    >
                      About
                    </Button>
                  </Box>
                </Drawer>
              </Stack>
            </Toolbar>
          </Container>
        </AppBar>
      </Box>
    </ThemeProvider>
  );
};

export default Header;
