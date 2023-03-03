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
    purpleTheme: "#0023ff",
    bodyBg: "#333333"
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
      main: colors.grey[600],
      darker: colors.grey[500]
    },
    redThemePalette: {
      main: "#220000",
    }

  },
};