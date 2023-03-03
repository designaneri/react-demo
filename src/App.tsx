import React from 'react';
// import theme from './AppTheme';
import "./App.css";
import { useState } from "react";
import { darkTheme } from "./ui/theme/dark";
import { lightTheme } from "./ui/theme/light";

import {
  createTheme, ThemeProvider,
  styled,
  Box,
  Typography,
  FormGroup,
  Grid,
} from "@mui/material";
import MaterialUISwitch from './ui/components/switchComponent';
import CustomCard from './ui/components/cardComponent';
// import { Route, Routes, Navigate } from 'react-router-dom';
// import RouteEnum from './Routes/RoutesEnum';
// const Home = lazy(() => import('./pages/Home'));
const StyledBackground = styled(Box)(({ theme }) => ({
  backgroundColor: theme.colors.bodyBg,
  minHeight: '100vh',
}))

function App() {
  
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  
  // This function is triggered when the Switch component is toggled
  const changeTheme = () => {
    setIsDarkTheme(!isDarkTheme);
    // document.body.style.backgroundColor = theme.palette.colors;
  };

  return (
    <>
    <React.Fragment>
      <ThemeProvider theme={isDarkTheme ? createTheme(darkTheme) : createTheme(lightTheme)}>
        <div className="App">
          <StyledBackground>
{/*         
          <Routes>
            <Route path={RouteEnum.Home} element={<Home />} />
          </Routes>
          */}
         
          <Grid container spacing={2} justifyContent="center" >
            <Grid item xs={8}>
              <Box alignItems='center' display='flex' justifyContent='end' sx={{ p: 2}}>
                <MaterialUISwitch checked={isDarkTheme} onChange={changeTheme} />
                  <Typography variant="body1" sx={{pl:2}}>
                    {isDarkTheme ? 'Dark Theme' : 'Light Theme'}
                  </Typography>
              </Box>
            
              <CustomCard />
            </Grid>
          </Grid>
         
          </StyledBackground>
        </div>
      </ThemeProvider>
      </React.Fragment>
    </>
  );
}

export default App;
