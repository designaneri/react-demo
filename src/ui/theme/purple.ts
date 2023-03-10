import { ThemeOptions } from "@mui/material";

export const purpleTheme: ThemeOptions = {
  typography: {
    fontFamily: ["Poppins", "sans-serif"].join(","),
  },
  colors: {
    bodyBg: "#845EC2",
    contrastColor: '#FF8066'
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