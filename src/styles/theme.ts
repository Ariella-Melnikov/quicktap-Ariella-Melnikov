import { createTheme } from '@mui/material/styles';
import '@fontsource/montserrat/300.css';
import '@fontsource/montserrat/400.css';
import '@fontsource/montserrat/500.css';
import '@fontsource/montserrat/700.css';

export const baseTheme = {
  colors: {
    primary: '#212721',
    pinkSecondary: '#EA3784',
    pinkBackground: '#FFE0EE',
    white: '#fafafa',

    info: {
      red: '#F04747',
      green: '#30A66D',
    },
  },
  spacing: {
    xs: '4px',
    sm: '8px',
    md: '16px',
    lg: '24px',
    xl: '32px',
  },
  fontSizes: {
    sm: '14px',
    base: '16px',
    lg: '24px',
    xl: '30px',
    xxl: '36px',
  },
  borderRadius: {
    sm: '4px',
    md: '8px',
    lg: '12px',
  },
  breakpoints: {
    sm: '600px',
    md: '900px',
    lg: '1200px',
    xl: '1536px',
  },
  fonts: {
    primary: `'Montserrat', sans-serif`,
  },
} as const;

export const muiTheme = createTheme({
  typography: {
    fontFamily: baseTheme.fonts.primary,
  },
  palette: {
    primary: { main: baseTheme.colors.primary },
    secondary: { main: baseTheme.colors.pinkSecondary },
    background: {
      default: baseTheme.colors.white,
      paper: baseTheme.colors.pinkBackground,
    },
    info: {
      main: baseTheme.colors.info.red, 
    },
    success: {
      main: baseTheme.colors.info.green, 
    },
  },
});

export type AppTheme = typeof baseTheme;