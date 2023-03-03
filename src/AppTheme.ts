import { createTheme, colors } from '@mui/material';

const theme = createTheme({
  typography: {
    fontFamily: ["Train One", "cursive"].join(","),
  },
  colors:{
    bodyBg: "#333333",
    contrastColor: '#d696ff'
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
    // secondary: {
    //   main: colors.orange[500]
    // },
    // neutral:{
    //   // for new color defining
    //   main: colors.grey[500],
    //   darker: colors.grey[700]
    // },
    // redThemePalette:{
    //   main: "#220000",
    // }
    
  },
});

export default theme;