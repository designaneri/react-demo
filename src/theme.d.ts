import { ThemeOptions } from '@mui/material/styles';
import React from 'react';

declare module '@mui/material/styles' {

  interface Theme{
    status:{
      danger: string
    },
    colors:{
      redTheme: string,
      blueTheme: string,
      purpleTheme: string
    }
  }
  interface ThemeOptions {
    status:{
      danger: React.CSSProperties["color"]
    },
    colors:{
      redTheme: string,
      blueTheme: string,
      purpleTheme: string
    }
  }
  // custom color
  interface Palette{
    neutral?: PaletteColor,
    redThemePalette?: PaletteColor,
  }
  interface PaletteOptions{
    neutral?: PaletteColorOptions,
    redThemePalette?: PaletteColorOptions,
  }

  // darker color
  interface SimplePaletteColorOptions{
    darker ?: string 
  }
  interface PaletteColor{
    darker?: string
  }
}