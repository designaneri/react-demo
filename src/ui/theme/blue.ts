import { ThemeOptions } from "@mui/material";

export const blueTheme: ThemeOptions = {
  typography: {
    fontFamily: ["Poppins", "sans-serif"].join(","),
  },
  colors: {
    bodyBg: "#6B95BC",
    contrastColor: '#BF628E'
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