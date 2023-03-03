import { ThemeOptions } from '@mui/material/styles';
import React from 'react';

declare module '@mui/material/styles' {

  interface Theme{
    colors:{
      bodyBg: string,
      contrastColor: string
    }
  }
  interface ThemeOptions {
    colors:{
      bodyBg: string,
      contrastColor: string
    }
  }
  // custom color
  // interface Palette{
  //   neutral?: PaletteColor,
  //   redThemePalette?: PaletteColor,
  // }
  // interface PaletteOptions{
  //   neutral?: PaletteColorOptions,
  //   redThemePalette?: PaletteColorOptions,
  // }

  // darker color
  interface SimplePaletteColorOptions{
    darker ?: string 
  }
  interface PaletteColor{
    darker?: string
  }
}