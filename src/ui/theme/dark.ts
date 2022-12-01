import { ThemeOptions } from "@mui/material";
import { colors } from '@mui/material';

export const darkTheme: ThemeOptions = {
  typography: {
    fontFamily: ["Poppins", "sans-serif"].join(","),
  },
  status: {
    danger: "#123123"
  },
  colors: {
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
    mode: "dark",
    secondary: {
      main: colors.orange[500]
    },
    neutral: {
      // for new color defining
      main: colors.yellow[100],
      darker: colors.yellow[50]
    },
    redThemePalette: {
      main: "#220000",
    }

  },
};