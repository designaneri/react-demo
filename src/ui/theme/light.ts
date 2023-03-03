import { ThemeOptions } from "@mui/material";
import { colors } from '@mui/material';

export const lightTheme: ThemeOptions = {
  typography: {
    fontFamily: ["Roboto", "sans-serif"].join(","),
  },
  status: {
    danger: "#123123"
  },
  colors: {
    redTheme: '#ff0000',
    blueTheme: "#0000ff",
    purpleTheme: "#0023ff",
    bodyBg: "#ffffff"
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
    secondary: {
      main: colors.orange[500]
    },
    neutral: {
      // for new color defining
      main: colors.yellow[500],
      darker: colors.yellow[700]
    },
    redThemePalette: {
      main: "#220000",
    }

  },
};