import { ThemeOptions } from "@mui/material";
import { colors } from '@mui/material';

export const lightTheme: ThemeOptions = {
  typography: {
    fontFamily: ["Roboto", "sans-serif"].join(","),
  },
  colors: {
    bodyBg: "#ffffff",
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
    mode: "light",
  },
};