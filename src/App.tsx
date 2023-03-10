import React from 'react';
// import theme from './AppTheme';
import "./App.css";
import { useState } from "react";
import { darkTheme } from "./ui/theme/dark";
import { lightTheme } from "./ui/theme/light";
import { purpleTheme } from './ui/theme/purple';
import { greenTheme } from './ui/theme/green';
import { blueTheme } from './ui/theme/blue';

import {
  createTheme, ThemeProvider,
  styled,
  Box,
  Typography,
  FormGroup,
  Grid,
  Badge,
  Stack,
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
const StyledBadge = styled(Badge)(({ theme }) => ({
  borderRadius: 20,
  height: 20,
  width: 20,
  cursor: 'pointer'
}))
function App() {

  const [selectedTheme, setSelectedTheme] = useState(lightTheme);
  const [checked, setChecked] = useState(false);

  // This function is triggered when the Switch component is toggled
  const toggleTheme = (e: any) => {
    setChecked(e.target.checked);
    if(e.target.checked === false){
      setSelectedTheme(lightTheme)
    }else{
      setSelectedTheme(darkTheme)
    }
    
   
  };
  // This function is triggered when the Switch component is toggled
  const changeTheme = (theme: any) => {
    setSelectedTheme(theme);
  };

  return (
    <>
      <React.Fragment>
        <ThemeProvider theme={createTheme(selectedTheme)}>
          <div className="App">
            <StyledBackground>
              <Grid container spacing={2} justifyContent="center" >
                <Grid item xs={4}>
                  <Box alignItems='center' display='flex' justifyContent='end' sx={{ pb: 2, pt: 2 }}>
                    <MaterialUISwitch checked={checked} onChange={toggleTheme} />
                    <Stack direction="row" spacing={1} sx={{background: "#ffffff", borderRadius: 20, p: 1, ml: 2}}>
                     <StyledBadge sx={{background: purpleTheme.colors.bodyBg}} onClick={() => { changeTheme(purpleTheme);}} />
                     <StyledBadge sx={{background: greenTheme.colors.bodyBg}} onClick={() => { changeTheme(greenTheme);}} />
                     <StyledBadge sx={{background: blueTheme.colors.bodyBg}} onClick={() => { changeTheme(blueTheme);}} />
                     </Stack>
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
