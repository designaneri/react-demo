import React, { Suspense, lazy } from 'react';
import theme from './AppTheme';

import { useState } from "react";
import { darkTheme } from "./ui/theme/dark";
import { lightTheme } from "./ui/theme/light";
import {
  createTheme, ThemeProvider,
  styled,
  Switch,
  Box,
  Typography,
  FormGroup,
  FormControlLabel,
  CssBaseline,
} from "@mui/material";
// import { Route, Routes, Navigate } from 'react-router-dom';
// import RouteEnum from './Routes/RoutesEnum';
// const Home = lazy(() => import('./pages/Home'));

const StyledBox = styled(Box)(({ theme }) => ({
  height: '250px',
  width: '250px',
  backgroundColor: theme.palette.neutral?.darker
}))
const RedBox = styled(Box)(({ theme }) => ({
  height: '250px',
  width: '250px',
  backgroundColor: theme.palette.redThemePalette?.main
}))
const BlueBox = styled(Box)(({ theme }) => ({
  height: '250px',
  width: '250px',
  backgroundColor: theme.colors.blueTheme
}))

function App() {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  // This function is triggered when the Switch component is toggled
  const changeTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  return (
    <>
    <React.Fragment>
      <ThemeProvider theme={isDarkTheme ? createTheme(darkTheme) : createTheme(lightTheme)}>
        <div className="App">
{/*         
          <Routes>
            <Route path={RouteEnum.Home} element={<Home />} />
          </Routes>
          */}
          <FormGroup>
            <FormControlLabel
              control={
                <Switch checked={isDarkTheme} onChange={changeTheme} />
              }
              label="Dark Theme"
            />
          </FormGroup>
          <StyledBox />
          <RedBox />
          <BlueBox />
          <Typography variant='h4' component="h1">Hello</Typography>
          <header className="App-header">
            <p>
              Edit <code>src/App.tsx</code> and save to reload.
            </p>
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React
            </a>
          </header>
        </div>
      </ThemeProvider>
      </React.Fragment>
    </>
  );
}

export default App;
