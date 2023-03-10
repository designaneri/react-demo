import { ThemeOptions } from "@mui/material";

export const greenTheme: ThemeOptions = {
  typography: {
    fontFamily: ["Poppins", "sans-serif"].join(","),
  },
  colors: {
    bodyBg: "#80C2AF",
    contrastColor: '#8D8FD5'
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
};