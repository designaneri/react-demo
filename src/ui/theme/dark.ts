import { ThemeOptions } from "@mui/material";

export const darkTheme: ThemeOptions = {
  typography: {
    fontFamily: ["Poppins", "sans-serif"].join(","),
  },
  colors: {
    bodyBg: "#333333",
    contrastColor: '#0063aa'
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
    mode: "dark",
  },
};