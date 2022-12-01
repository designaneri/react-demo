import { createTheme, colors } from '@mui/material';

const theme = createTheme({
  typography: {
    fontFamily: ["Train One", "cursive"].join(","),
  },
  status: {
    danger: "#123123"
  },
  colors:{
    redTheme: '#ff0000',
    blueTheme: "#0000ff",
    purpleTheme: "#0023ff"
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1440
    },
  },
  palette: {
    secondary: {
      main: colors.orange[500]
    },
    neutral:{
      // for new color defining
      main: colors.grey[500],
      darker: colors.grey[700]
    },
    redThemePalette:{
      main: "#220000",
    }
    
  },
});

export default theme;